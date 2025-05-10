"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface User {
  name: string
  email: string
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  signIn: (email: string, password: string) => Promise<boolean>
  signUp: (name: string, email: string, password: string) => Promise<boolean>
  signOut: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Check if user is already logged in
  useEffect(() => {
    const storedUser = localStorage.getItem("pickfit_user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  // Mock sign in function
  const signIn = async (email: string, password: string) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // For demo purposes, any email/password combination works
    // In a real app, this would validate against a backend
    const mockUser = { name: "Demo User", email }
    setUser(mockUser)
    localStorage.setItem("pickfit_user", JSON.stringify(mockUser))
    return true
  }

  // Mock sign up function
  const signUp = async (name: string, email: string, password: string) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // For demo purposes, any valid input works
    const newUser = { name, email }
    setUser(newUser)
    localStorage.setItem("pickfit_user", JSON.stringify(newUser))
    return true
  }

  // Sign out function
  const signOut = () => {
    setUser(null)
    localStorage.removeItem("pickfit_user")
  }

  return <AuthContext.Provider value={{ user, isLoading, signIn, signUp, signOut }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
