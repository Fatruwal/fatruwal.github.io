import { cn } from "@/lib/utils"
import React from "react"

export default function GradientBar({
  className,
  ...props
}: React.HTMLProps<HTMLSpanElement>) {
  return (
    <span
      {...props}
      className={cn("my-4 block w-40 bg-blue-gradient p-0.5", className)}
    />
  )
}
