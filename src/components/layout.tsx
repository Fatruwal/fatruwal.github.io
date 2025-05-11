import React, { PropsWithChildren } from "react"
import Header, { HeaderMenuItem } from "../components/header"
import Footer, { FooterMenuItem } from "../components/footer"
import { cn } from "@/lib/utils"
import { Toaster } from "./Toaster"

const Layout = ({
  children,
  className,
  headerMenu,
  footerMenu,
  ...props
}: PropsWithChildren<React.ComponentProps<"div">> & {
  headerMenu: HeaderMenuItem[]
  footerMenu: FooterMenuItem[]
}) => {
  return (
    <div {...props} className={cn("", className)}>
      <Header menuItems={headerMenu} />
      <main>{children}</main>
      <Footer menuItems={footerMenu} />
      <Toaster />
    </div>
  )
}

export default Layout
