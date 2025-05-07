<template>
  <div class="ocean-login">
    <canvas id="ocean-canvas" ref="canvasRef"></canvas>
    
    <div class="login-container">
      <div class="login-card">
        <h2>Welcome Back</h2>
        <form @submit.prevent="handleLogin">
          <div class="form-group">
            <label for="username">Username</label>
            <input 
              id="username" 
              v-model="username" 
              type="text" 
              placeholder="Enter your username"
              required
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input 
              id="password" 
              v-model="password" 
              type="password" 
              placeholder="Enter your password"
              required
            />
          </div>
          <div class="form-actions">
            <label class="remember-me">
              <input type="checkbox" v-model="rememberMe" />
              <span>Remember me</span>
            </label>
            <a href="#" class="forgot-password">Forgot password?</a>
          </div>
          <button type="submit" class="login-button">Sign In</button>
        </form>
        <div class="register-link">
          Don't have an account? <a href="#">Register now</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as THREE from 'three';
import { Water } from 'three/examples/jsm/objects/Water.js';
import { Sky } from 'three/examples/jsm/objects/Sky.js';

// Login form data
const username = ref('');
const password = ref('');
const rememberMe = ref(false);

const handleLogin = () => {
  console.log('Login attempt:', {
    username: username.value,
    password: password.value,
    rememberMe: rememberMe.value
  });
  // Add your authentication logic here
};

// Three.js variables
const canvasRef = ref(null);
let scene;
let camera;
let renderer;
let water;
let sun;
let sky;
let animationFrameId;

// Initialize Three.js scene
const initThree = () => {
  const container = canvasRef.value;
  if (!container) {
    console.warn('Canvas element not found');
    return;
  }

  // Create scene
  scene = new THREE.Scene();

  // Create camera
  camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    1,
    20000
  );
  camera.position.set(30, 30, 100);
  camera.lookAt(0, 0, 0);

  // Create sun light source
  sun = new THREE.Vector3();

  // Create renderer
  renderer = new THREE.WebGLRenderer({
    canvas: container,
    antialias: true,
    alpha: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.5;

  // Create water surface
  const waterGeometry = new THREE.PlaneGeometry(10000, 10000);
  water = new Water(waterGeometry, {
    textureWidth: 512,
    textureHeight: 512,
    waterNormals: new THREE.TextureLoader().load(
      "https://threejs.org/examples/textures/waternormals.jpg",
      function (texture) {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
      }
    ),
    sunDirection: new THREE.Vector3(),
    sunColor: 0xffffff,
    waterColor: 0x001e0f,
    distortionScale: 3.7,
    fog: scene.fog !== undefined,
  });
  water.rotation.x = -Math.PI / 2;
  scene.add(water);

  // Create sky
  sky = new Sky();
  sky.scale.setScalar(10000);
  scene.add(sky);

  const skyUniforms = sky.material.uniforms;

  skyUniforms["turbidity"].value = 10;
  skyUniforms["rayleigh"].value = 2;
  skyUniforms["mieCoefficient"].value = 0.005;
  skyUniforms["mieDirectionalG"].value = 0.8;

  const parameters = {
    elevation: 2,
    azimuth: 180,
  };

  const pmremGenerator = new THREE.PMREMGenerator(renderer);
  let renderTarget;

  function updateSun() {
    const phi = THREE.MathUtils.degToRad(90 - parameters.elevation);
    const theta = THREE.MathUtils.degToRad(parameters.azimuth);

    sun.setFromSphericalCoords(1, phi, theta);

    sky.material.uniforms["sunPosition"].value.copy(sun);
    water.material.uniforms["sunDirection"].value.copy(sun).normalize();

    if (renderTarget !== undefined) renderTarget.dispose();

    renderTarget = pmremGenerator.fromScene(sky);

    scene.environment = renderTarget.texture;
  }

  updateSun();

  // Add ambient light
  const ambient = new THREE.AmbientLight(0x555555);
  scene.add(ambient);

  animate();
};

// Animation loop
const animate = () => {
  if (!scene || !camera || !renderer || !water) {
    return;
  }

  // Update water animation
  water.material.uniforms["time"].value += 1.0 / 60.0;

  renderer.render(scene, camera);
  animationFrameId = requestAnimationFrame(animate);
};

// Handle window resize
const handleResize = () => {
  if (camera && renderer) {
    try {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    } catch (error) {
      console.error("Error during resize:", error);
    }
  }
};

// Clean up resources
const cleanup = () => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = 0;
  }

  if (renderer) {
    renderer.dispose();
  }

  // Clean up objects in the scene
  if (scene) {
    while (scene.children.length > 0) {
      scene.remove(scene.children[0]);
    }
  }
};

// Lifecycle hooks
onMounted(() => {
  initThree();
  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
  cleanup();
});
</script>

<style scoped>
.ocean-login {
  position: relative;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

#ocean-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.login-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

.login-card {
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  color: white;
}

h2 {
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  text-align: center;
  font-weight: 600;
}

.form-group {
  margin-bottom: 1.2rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1rem;
  transition: all 0.3s;
}

input[type="text"]::placeholder,
input[type="password"]::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

input[type="text"]:focus,
input[type="password"]:focus {
  outline: none;
  border-color: rgba(255, 255, 255, 0.5);
  background-color: rgba(255, 255, 255, 0.15);
}

.form-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  font-size: 0.85rem;
}

.remember-me {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.forgot-password {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
}

.forgot-password:hover {
  text-decoration: underline;
}

.login-button {
  width: 100%;
  padding: 0.75rem;
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.login-button:hover {
  background-color: rgba(255, 255, 255, 0.3);
}

.register-link {
  margin-top: 1.5rem;
  text-align: center;
  font-size: 0.9rem;
}

.register-link a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
}

.register-link a:hover {
  text-decoration: underline;
}
</style>
