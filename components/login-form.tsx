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
    console.log("登录尝试:", {
      username,
      password,
      rememberMe,
    })
    // 在这里添加您的认证逻辑
  }

  return (
    <div className="w-full max-w-md p-8 rounded-lg bg-white/15 backdrop-blur-md shadow-lg text-white">
      <h2 className="text-2xl font-bold text-center mb-6">欢迎回来</h2>

      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">用户名</Label>
            <Input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="请输入用户名"
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/15 focus:border-white/50"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">密码</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="请输入密码"
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/15 focus:border-white/50"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember"
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked as boolean)}
              />
              <label
                htmlFor="remember"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                记住我
              </label>
            </div>

            <a href="#" className="text-sm text-white/80 hover:underline">
              忘记密码?
            </a>
          </div>

          <Button type="submit" className="w-full bg-white/20 hover:bg-white/30">
            登录
          </Button>
        </div>
      </form>

      <div className="mt-6 text-center text-sm">
        还没有账号?{" "}
        <a href="#" className="text-white/80 hover:underline">
          立即注册
        </a>
      </div>
    </div>
  )
}
