import React, { PropsWithChildren } from "react"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
