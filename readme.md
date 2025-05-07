# Ocean Login - 动态海洋和天空效果登录页面

一个使用 Next.js 和 Three.js 创建的动态海洋和天空效果登录页面。这个项目展示了如何将高级 3D 图形与现代 React 应用程序集成，创建引人注目的用户界面。

## 目录

- [项目概述](#项目概述)
- [功能特点](#功能特点)
- [技术栈](#技术栈)
- [项目结构](#项目结构)
- [源码详解](#源码详解)
- [部署指南](#部署指南)
- [常见问题](#常见问题)
- [自定义和扩展](#自定义和扩展)
- [贡献指南](#贡献指南)
- [许可证](#许可证)

## 项目概述

Ocean Login 是一个现代化的登录页面，使用 Three.js 创建了逼真的海洋和天空背景效果。这个项目展示了如何将复杂的 3D 图形与 React 和 Next.js 集成，创建引人注目的用户界面。

## 功能特点

- 动态海洋波浪效果，随时间变化
- 逼真的天空渲染，带有大气散射效果
- 响应式设计，适应各种屏幕尺寸
- 现代化的玻璃态登录表单
- 优化的性能和资源管理

## 技术栈

- **前端框架**: [Next.js](https://nextjs.org/) (React 框架)
- **3D 图形**: [Three.js](https://threejs.org/)
- **样式**: [Tailwind CSS](https://tailwindcss.com/)
- **UI 组件**: [shadcn/ui](https://ui.shadcn.com/)
- **部署**: [GitHub Pages](https://pages.github.com/)

## 项目结构

```
ocean-login/
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions 部署工作流
├── app/
│   ├── globals.css         # 全局样式
│   ├── not-found.js        # 自定义 404 页面
│   └── page.tsx            # 主页面组件
├── components/
│   ├── login-form.tsx      # 登录表单组件
│   ├── ocean-background.tsx # 海洋背景组件
│   └── ui/                 # shadcn/ui 组件
├── public/
│   └── .nojekyll           # 防止 GitHub Pages 使用 Jekyll
├── .gitignore              # Git 忽略文件
├── .nojekyll               # 防止 GitHub Pages 使用 Jekyll
├── next.config.js          # Next.js 配置
├── package.json            # 项目依赖和脚本
├── README.md               # 项目文档
└── tailwind.config.js      # Tailwind CSS 配置
```

## 源码详解

### 主页面组件 (app/page.tsx)

```tsx
"use client"
import OceanBackground from "@/components/ocean-background"
import LoginForm from "@/components/login-form"

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden">
      <OceanBackground />
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <LoginForm />
      </div>
    </main>
  )
}
```

这个组件是应用的入口点，它:

- 使用 `"use client"` 指令标记为客户端组件
- 导入并渲染 `OceanBackground` 和 `LoginForm` 组件
- 使用相对定位和 z-index 将登录表单叠加在海洋背景上


### 海洋背景组件 (components/ocean-background.tsx)

这个组件是项目的核心，负责创建 3D 海洋和天空效果:

```typescriptreact
"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import { Water } from "three/examples/jsm/objects/Water.js"
import { Sky } from "three/examples/jsm/objects/Sky.js"

export default function OceanBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    // Three.js 初始化和清理代码
    // ...
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}
```

关键实现细节:

1. **场景初始化**:

1. 创建 Three.js 场景、相机和渲染器
2. 设置相机位置和渲染器参数



2. **水面创建**:

1. 使用 `PlaneGeometry` 创建水面几何体
2. 应用 Water 着色器创建逼真的水面效果
3. 配置水面颜色、波纹和反射



3. **天空创建**:

1. 使用 Sky 对象创建大气散射效果
2. 配置天空参数如浑浊度、散射系数等
3. 设置太阳位置影响天空颜色和水面反射



4. **动画循环**:

1. 使用 `requestAnimationFrame` 创建平滑动画
2. 更新水面时间值产生波动效果
3. 渲染场景到 canvas 元素



5. **资源管理**:

1. 监听窗口大小变化，调整渲染尺寸
2. 在组件卸载时清理资源，防止内存泄漏





### 登录表单组件 (components/login-form.tsx)

```typescriptreact
"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function LoginForm() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("登录尝试:", { username, password, rememberMe })
    // 在这里添加您的认证逻辑
  }

  return (
    <div className="w-full max-w-md p-8 rounded-lg bg-white/15 backdrop-blur-md shadow-lg text-white">
      {/* 表单内容 */}
    </div>
  )
}
```

这个组件创建了一个现代化的登录表单:

- 使用 React 状态管理表单字段
- 使用 shadcn/ui 组件创建表单元素
- 应用玻璃态设计，带有背景模糊效果
- 包含用户名、密码、记住我选项和登录按钮


## 部署指南

### 部署到 GitHub Pages

这个项目配置为使用 GitHub Actions 自动部署到 GitHub Pages。以下是详细的部署步骤:

#### 1. 准备工作

1. 在 GitHub 上创建一个新仓库 (例如 `ocean-login`)
2. 确保仓库是公开的 (对于免费版 GitHub Pages)


#### 2. 配置项目

确保您的项目包含以下关键文件:

##### next.config.js

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // 启用静态导出
  images: {
    unoptimized: true,  // GitHub Pages 不支持 Next.js 的图像优化
  },
  basePath: process.env.NODE_ENV === 'production' ? '/ocean-login' : '',  // 替换为您的仓库名
  trailingSlash: true,  // 添加尾部斜杠，有助于 GitHub Pages 路由
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // 重要：添加这个配置以处理静态资源
  assetPrefix: process.env.NODE_ENV === 'production' ? '/ocean-login' : '',
}

module.exports = nextConfig
```

> **重要**: 将 `ocean-login` 替换为您的实际仓库名称。



##### .github/workflows/deploy.yml

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]  # 当推送到 main 分支时触发

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout 🛎️
        uses: actions/checkout@v3

      - name: Setup Node.js ⚙️
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: 'npm'

      - name: Install dependencies 📦
        run: npm install --legacy-peer-deps # 解决依赖冲突

      - name: Build 🔧
        run: npm run build
        env:
          NODE_ENV: production  # 确保设置生产环境

      - name: Add .nojekyll file 📄
        run: touch out/.nojekyll  # 在输出目录也添加 .nojekyll 文件

      - name: Deploy 🚀
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: out  # Next.js 静态导出的文件夹
          branch: gh-pages  # 部署到 gh-pages 分支
```

##### .nojekyll 文件

在项目根目录和 public 目录中添加空的 `.nojekyll` 文件:

```shellscript
touch .nojekyll
touch public/.nojekyll
```

> **重要**: 这些文件防止 GitHub Pages 使用 Jekyll 处理站点，确保 `_next` 目录中的静态资源可以正确加载。



##### 自定义 404 页面 (app/not-found.js)

```javascriptreact
export default function Custom404() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - 页面未找到</h1>
        <p className="mb-4">抱歉，您请求的页面不存在。</p>
        <a href="/" className="text-blue-500 hover:underline">
          返回首页
        </a>
      </div>
    </div>
  );
}
```

#### 3. 部署步骤

1. **初始化 Git 并推送代码**:


```shellscript
# 初始化 Git 仓库
git init
git add .
git commit -m "Initial commit"

# 添加远程仓库
git remote add origin https://github.com/您的用户名/ocean-login.git

# 推送代码
git branch -M main
git push -u origin main
```

2. **等待 GitHub Actions 完成**:

1. 推送代码后，GitHub Actions 会自动运行部署工作流
2. 您可以在仓库的 "Actions" 选项卡中查看进度
3. 工作流成功完成后，您的网站将部署到 `gh-pages` 分支



3. **配置 GitHub Pages**:

1. 前往仓库设置 -> Pages
2. 在 "Source" 部分，选择 "Deploy from a branch"
3. 在 "Branch" 下拉菜单中，选择 "gh-pages" 分支和 "/ (root)" 文件夹
4. 点击 "Save"



4. **访问您的网站**:

1. 部署完成后，您的网站将在以下地址可用:


```plaintext
https://您的用户名.github.io/ocean-login/
```




#### 4. 部署检查清单

确保您已完成以下所有步骤:

- 正确配置 `next.config.js`，包括 `output`, `basePath` 和 `assetPrefix`
- 添加 `.nojekyll` 文件到项目根目录和 public 目录
- 创建 GitHub Actions 工作流文件 (`.github/workflows/deploy.yml`)
- 添加自定义 404 页面
- 推送代码到 GitHub 仓库的 main 分支
- 确认 GitHub Actions 工作流成功完成
- 配置 GitHub Pages 使用 gh-pages 分支
- 测试网站是否可以正常访问和使用


## 常见问题

### 1. 静态资源 404 错误

**问题**: 部署后，控制台显示 `_next/static/chunks/...` 的 404 错误。

**解决方案**:

- 确保项目根目录和 public 目录中都有 `.nojekyll` 文件
- 确保 GitHub Actions 工作流中包含 `touch out/.nojekyll` 步骤
- 检查 `next.config.js` 中的 `basePath` 和 `assetPrefix` 是否与仓库名匹配


### 2. 页面显示空白或 404

**问题**: 部署后，网站显示空白页面或 GitHub 的 404 页面。

**解决方案**:

- 确保 GitHub Pages 设置为从 `gh-pages` 分支部署
- 检查 GitHub Actions 工作流是否成功完成
- 确认访问的 URL 是否正确 (`https://您的用户名.github.io/ocean-login/`)


### 3. Three.js 资源加载失败

**问题**: Three.js 纹理或模型加载失败。

**解决方案**:

- 确保所有 URL 使用 HTTPS
- 考虑将外部资源下载到项目中，而不是使用外部链接
- 检查浏览器控制台是否有 CORS 错误


### 4. 移动设备性能问题

**问题**: 在移动设备上，3D 效果可能导致性能下降。

**解决方案**:

- 在 `ocean-background.tsx` 中添加设备检测，为移动设备降低渲染质量
- 减少水面几何体的复杂度
- 考虑在移动设备上使用静态背景图像


## 自定义和扩展

### 修改水面颜色

在 `ocean-background.tsx` 中，找到 Water 对象的创建部分，修改 `waterColor` 参数:

```typescriptreact
water = new Water(waterGeometry, {
  // ...其他参数
  waterColor: 0x001e0f,  // 修改为您喜欢的颜色代码
  // ...
});
```

### 添加昼夜循环

您可以添加一个随时间变化的昼夜循环效果:

```typescriptreact
// 在 ocean-background.tsx 的 useEffect 中添加
const updateDayNightCycle = () => {
  const time = Date.now() * 0.0001;
  const elevation = Math.sin(time) * 45 + 45;  // 0 到 90 度
  const phi = THREE.MathUtils.degToRad(90 - elevation);
  const theta = THREE.MathUtils.degToRad(180);
  
  sun.setFromSphericalCoords(1, phi, theta);
  sky.material.uniforms["sunPosition"].value.copy(sun);
  water.material.uniforms["sunDirection"].value.copy(sun).normalize();
  
  // 更新环境贴图
  const renderTarget = pmremGenerator.fromScene(sky);
  scene.environment = renderTarget.texture;
};

// 在动画循环中调用
const animate = () => {
  // ...
  updateDayNightCycle();
  // ...
};
```

### 添加鼠标交互

您可以添加鼠标交互，让水面对鼠标移动做出反应:

```typescriptreact
// 在 ocean-background.tsx 中添加
const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

useEffect(() => {
  const handleMouseMove = (event) => {
    setMousePosition({
      x: (event.clientX / window.innerWidth) * 2 - 1,
      y: -(event.clientY / window.innerHeight) * 2 + 1
    });
  };
  
  window.addEventListener('mousemove', handleMouseMove);
  return () => {
    window.removeEventListener('mousemove', handleMouseMove);
  };
}, []);

// 在动画循环中使用鼠标位置
const animate = () => {
  // ...
  water.material.uniforms["distortionScale"].value = 3.7 + mousePosition.x * 0.5;
  // ...
};
```

## 贡献指南

欢迎贡献代码、报告问题或提出改进建议！请按照以下步骤:

1. Fork 这个仓库
2. 创建您的特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交您的更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 打开一个 Pull Request


## 许可证

本项目采用 MIT 许可证 - 详情请参阅 [LICENSE](LICENSE) 文件。

---

**注意**: 这个项目是一个演示，展示了如何将 Three.js 与 React 和 Next.js 集成。它不包含实际的认证逻辑，仅用于学习和展示目的。

---

如果您有任何问题或需要帮助，请随时开 issue 或联系项目维护者。

祝您使用愉快！

```plaintext


```

