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
