import { cn } from "@/lib/utils"
import React from "react"

export default function Container({
  className,
  children,
  ...props
}: React.PropsWithChildren<React.ComponentProps<"div">>) {
  return (
    <div
      {...props}
      className={cn(
        "mx-4 w-full gap-10 rounded-sm p-4 px-4 md:mx-8 md:px-6 lg:w-11/12 xl:max-w-screen-2xl xl:gap-20",
        className,
      )}
    >
      {children}
    </div>
  )
}
