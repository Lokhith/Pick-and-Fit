"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      })
      setEmail("")
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <div className="flex flex-col gap-6 text-center">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Stay Updated</h2>
        <p className="mt-2 text-muted-foreground">Subscribe to our newsletter for exclusive offers and updates</p>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto flex w-full max-w-md flex-col gap-2 sm:flex-row">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="h-12"
        />
        <Button type="submit" disabled={isSubmitting} className="h-12">
          {isSubmitting ? "Subscribing..." : "Subscribe"}
        </Button>
      </form>
    </div>
  )
}
