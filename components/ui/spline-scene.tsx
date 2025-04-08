"use client"

import { useEffect, useState } from "react"
import Spline from "@splinetool/react-spline"
import { Application } from "@splinetool/runtime"
import React from "react"
import { cn, isMobileDevice } from "@/lib/utils"

interface SplineSceneProps {
  scene: string
  className?: string
  onLoadComplete?: () => void
}

// Preload the scene
const preloadScene = (url: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const scene = new Application(document.createElement('canvas'))
    scene.load(url).then(() => {
      resolve(true)
    }).catch(() => {
      resolve(false)
    })
  })
}

let preloadedScenes = new Set<string>()
let preloadPromises = new Map<string, Promise<boolean>>()

export function SplineScene({ scene, className, onLoadComplete }: SplineSceneProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(isMobileDevice())
  }, [])

  useEffect(() => {
    if (isMobile) {
      setIsLoading(false)
      onLoadComplete?.()
      return
    }

    if (!preloadedScenes.has(scene)) {
      if (!preloadPromises.has(scene)) {
        const promise = preloadScene(scene).then((success) => {
          if (success) {
            preloadedScenes.add(scene)
          }
          setIsLoading(false)
          onLoadComplete?.()
        })
        preloadPromises.set(scene, promise)
      } else {
        preloadPromises.get(scene)?.then(() => {
          setIsLoading(false)
          onLoadComplete?.()
        })
      }
    } else {
      setIsLoading(false)
      onLoadComplete?.()
    }
  }, [scene, onLoadComplete, isMobile])

  if (isMobile) {
    return (
      <div className={cn("relative", className)}>
        <div className="absolute inset-0 flex items-center justify-center bg-black/5">
          <div className="text-center p-4">
            <p className="text-muted-foreground">3D Model disabled on mobile for better performance</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={cn("relative", className)}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/5">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        </div>
      )}
      <Spline 
        scene={scene} 
        onLoad={() => {
          // Optimize performance after load
          const canvas = document.querySelector('canvas')
          if (canvas) {
            canvas.style.willChange = 'transform'
            canvas.style.transform = 'translateZ(0)'
          }
        }}
      />
    </div>
  )
}

