import React from "react"
import Layout from "@/templates/layout"
import { BlogHighligth } from "@/components/BlogHighlight"
import Seo from "@/components/seo"
const Home = () => {
  return (
    <Layout>
      <Seo />
      <div className="min-h-dvh">
        <BlogHighligth />
      </div>
    </Layout>
  )
}

export const Head = () => <Seo />

export default Home
