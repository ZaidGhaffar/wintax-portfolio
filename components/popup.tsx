"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface PopupProps {
  isOpen?: boolean
  onClose?: () => void
  title?: string
  children: React.ReactNode
  className?: string
}

export function Popup({ isOpen = false, onClose, title, children, className }: PopupProps) {
  const [isVisible, setIsVisible] = useState(isOpen)

  useEffect(() => {
    setIsVisible(isOpen)
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isVisible) {
        handleClose()
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isVisible])

  const handleClose = () => {
    setIsVisible(false)
    onClose?.()
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div
        className={cn(
          "relative max-h-[90vh] w-full max-w-md overflow-auto rounded-lg bg-white p-6 shadow-lg animate-in fade-in zoom-in duration-300",
          className,
        )}
      >
        <Button variant="ghost" size="icon" className="absolute right-2 top-2" onClick={handleClose} aria-label="Close">
          <X className="h-4 w-4" />
        </Button>

        {title && <h2 className="mb-4 text-xl font-semibold">{title}</h2>}

        <div className="mt-2">{children}</div>
      </div>
    </div>
  )
}

