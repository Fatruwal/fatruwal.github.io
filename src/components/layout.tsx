import React, { PropsWithChildren, ReactHTMLElement } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import { cn } from "@/lib/utils"

const Layout = ({
  children,
  className,
  ...props
}: PropsWithChildren<React.ComponentProps<"div">>) => {
  return (
    <div {...props} className={cn("", className)}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
