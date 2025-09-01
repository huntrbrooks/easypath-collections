"use client"

import type React from "react"

import { createContext, useContext, useState } from "react"

type NavigationContextType = {
  currentPage: string
  setCurrentPage: (page: string) => void
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined)

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const [currentPage, setCurrentPage] = useState("home")

  return <NavigationContext.Provider value={{ currentPage, setCurrentPage }}>{children}</NavigationContext.Provider>
}

export function useNavigation() {
  const context = useContext(NavigationContext)
  if (!context) {
    throw new Error("useNavigation must be used within NavigationProvider")
  }
  return context
}
