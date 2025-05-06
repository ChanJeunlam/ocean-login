"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import { Water } from "three/examples/jsm/objects/Water.js"
import { Sky } from "three/examples/jsm/objects/Sky.js"

export default function OceanBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    // Three.js 变量
    let scene: THREE.Scene
    let camera: THREE.PerspectiveCamera
    let renderer: THREE.WebGLRenderer
    let water: any
    let sun: THREE.Vector3
    let sky: any
    let animationFrameId: number

    // 初始化 Three.js 场景
    const initThree = () => {
      const container = canvasRef.current
      if (!container) {
        console.warn("Canvas 元素未找到")
        return
      }

      // 创建场景
      scene = new THREE.Scene()

      // 创建相机
      camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 20000)
      camera.position.set(30, 30, 100)
      camera.lookAt(0, 0, 0)

      // 创建太阳光源
      sun = new THREE.Vector3()

      // 创建渲染器
      renderer = new THREE.WebGLRenderer({
        canvas: container,
        antialias: true,
        alpha: true,
      })
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.toneMapping = THREE.ACESFilmicToneMapping
      renderer.toneMappingExposure = 0.5

      // 创建水面
      const waterGeometry = new THREE.PlaneGeometry(10000, 10000)
      water = new Water(waterGeometry, {
        textureWidth: 512,
        textureHeight: 512,
        waterNormals: new THREE.TextureLoader().load(
          "https://threejs.org/examples/textures/waternormals.jpg",
          (texture) => {
            texture.wrapS = texture.wrapT = THREE.RepeatWrapping
          },
        ),
        sunDirection: new THREE.Vector3(),
        sunColor: 0xffffff,
        waterColor: 0x001e0f,
        distortionScale: 3.7,
        fog: scene.fog !== undefined,
      })
      water.rotation.x = -Math.PI / 2
      scene.add(water)

      // 创建天空
      sky = new Sky()
      sky.scale.setScalar(10000)
      scene.add(sky)

      const skyUniforms = sky.material.uniforms

      skyUniforms["turbidity"].value = 10
      skyUniforms["rayleigh"].value = 2
      skyUniforms["mieCoefficient"].value = 0.005
      skyUniforms["mieDirectionalG"].value = 0.8

      const parameters = {
        elevation: 2,
        azimuth: 180,
      }

      const pmremGenerator = new THREE.PMREMGenerator(renderer)
      let renderTarget: THREE.WebGLRenderTarget

      function updateSun() {
        const phi = THREE.MathUtils.degToRad(90 - parameters.elevation)
        const theta = THREE.MathUtils.degToRad(parameters.azimuth)

        sun.setFromSphericalCoords(1, phi, theta)

        sky.material.uniforms["sunPosition"].value.copy(sun)
        water.material.uniforms["sunDirection"].value.copy(sun).normalize()

        if (renderTarget !== undefined) renderTarget.dispose()

        renderTarget = pmremGenerator.fromScene(sky)

        scene.environment = renderTarget.texture
      }

      updateSun()

      // 添加环境光
      const ambient = new THREE.AmbientLight(0x555555)
      scene.add(ambient)

      animate()
    }

    // 动画循环
    const animate = () => {
      if (!scene || !camera || !renderer || !water) {
        return
      }

      // 更新水面动画
      water.material.uniforms["time"].value += 1.0 / 60.0

      renderer.render(scene, camera)
      animationFrameId = requestAnimationFrame(animate)
    }

    // 处理窗口大小变化
    const handleResize = () => {
      if (camera && renderer) {
        try {
          camera.aspect = window.innerWidth / window.innerHeight
          camera.updateProjectionMatrix()
          renderer.setSize(window.innerWidth, window.innerHeight)
        } catch (error) {
          console.error("调整大小时出错:", error)
        }
      }
    }

    // 初始化场景
    initThree()

    // 添加窗口大小变化监听器
    window.addEventListener("resize", handleResize)

    // 清理函数
    return () => {
      window.removeEventListener("resize", handleResize)

      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }

      if (renderer) {
        renderer.dispose()
      }

      // 清理场景中的对象
      if (scene) {
        while (scene.children.length > 0) {
          scene.remove(scene.children[0])
        }
      }
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}
