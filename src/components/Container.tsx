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
        "mx-10 w-full gap-10 rounded-sm p-4 md:mx-4 lg:w-10/12 lg:gap-20 xl:max-w-screen-2xl",
        className,
      )}
    >
      {children}
    </div>
  )
}
