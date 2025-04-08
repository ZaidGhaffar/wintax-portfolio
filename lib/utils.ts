import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isMobileDevice() {
  if (typeof window === 'undefined') return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

export function enableSmoothScrolling() {
  if (typeof window === 'undefined') return;
  
  // Disable smooth scrolling on mobile devices
  if (isMobileDevice()) {
    document.documentElement.style.scrollBehavior = 'auto';
    return;
  }

  // Enable smooth scrolling with performance optimizations
  document.documentElement.style.scrollBehavior = 'smooth';
  
  // Add passive event listener for better scroll performance
  window.addEventListener('scroll', () => {}, { passive: true });
  
  // Optimize scroll performance
  document.documentElement.style.willChange = 'scroll-position';
  document.documentElement.style.backfaceVisibility = 'hidden';
  document.documentElement.style.transform = 'translateZ(0)';
}
