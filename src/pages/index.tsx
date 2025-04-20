import React from "react"
import Layout from "../components/layout"
import { BlogHighligth } from "@/components/BlogHighlight"
const Home = () => {
  return (
    <Layout>
      <div className="min-h-dvh">
        <BlogHighligth />
      </div>
    </Layout>
  )
}

export default Home
