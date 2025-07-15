"use client"

import { useEffect, useState } from "react"

interface SplashScreenProps {
  onComplete: () => void
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [animationPhase, setAnimationPhase] = useState<"initial" | "collapse" | "rush" | "fade">("initial")

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setAnimationPhase("collapse")
    }, 2000)

    const timer2 = setTimeout(() => {
      setAnimationPhase("rush")
    }, 3000)

    const timer3 = setTimeout(() => {
      setAnimationPhase("fade")
    }, 3500)

    const timer4 = setTimeout(() => {
      onComplete()
    }, 4500)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
    }
  }, [onComplete])

  return (
    <div
      className={`fixed inset-0 bg-black z-50 flex items-center justify-center overflow-hidden transition-opacity duration-300 ${
        animationPhase === "fade" ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative flex items-center justify-center">
        {/* SOLVERS text */}
        <div
          className={`text-red-600 font-bold text-4xl sm:text-6xl md:text-8xl lg:text-9xl tracking-wider transition-all duration-10000 ease-in-out ${
            animationPhase === "initial"
              ? "transform translate-x-0 scale-100 opacity-100"
              : "transform translate-x-[200px] scale-0 opacity-0"
          }`}
          style={{
            transformOrigin: "right center",
          }}
        >
          SOLVERS
        </div>

        {/* Space between SOLVERS and CORNER */}
        <div
          className={`transition-all duration-10000 ease-in-out ${
            animationPhase === "collapse" ? "w-0" : "w-8 sm:w-12 md:w-16 lg:w-20"
          }`}
        ></div>

        {/* C letter that the others collapse into and centers */}
        <div
          className={`text-red-600 font-bold text-4xl sm:text-6xl md:text-8xl lg:text-9xl tracking-wider transition-all duration-2000 ease-in-out ${
            animationPhase === "rush"
              ? "transform translate-x-0 scale-[20] opacity-0"
              : animationPhase === "initial"
                ? "transform translate-x-0 scale-100 opacity-100"
                : "transform translate-x-[-100px] scale-110 opacity-100"
          }`}
          style={{
            transformOrigin: "center center",
            transitionDuration: animationPhase === "rush" ? "250ms" : "500ms",
            transitionTimingFunction: animationPhase === "rush" ? "ease-in" : "ease-in-out",
          }}
        >
          C
        </div>

        {/* ORNER text */}
        <div
          className={`text-red-600 font-bold text-4xl sm:text-6xl md:text-8xl lg:text-9xl tracking-wider transition-all duration-10000 ease-in-out ${
            animationPhase === "initial"
              ? "transform translate-x-0 scale-100 opacity-100"
              : "transform translate-x-[-200px] scale-0 opacity-0"
          }`}
          style={{
            transformOrigin: "left center",
          }}
        >
          ORNER
        </div>

        {/* Glow effect for the C during collapse */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-1500 ${
            animationPhase === "collapse" ? "opacity-20" : "opacity-0"
          }`}
        >
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-red-600 rounded-full blur-3xl animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}
