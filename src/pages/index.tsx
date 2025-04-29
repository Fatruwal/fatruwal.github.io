import React from "react"
import Layout from "@/templates/layout"
import { BlogHighlight } from "@/components/BlogHighlight"
import Seo from "@/components/seo"
import { graphql, useStaticQuery } from "gatsby"
interface GraphqlBlogQuery {
  allWpPost: {
    nodes: Array<{
      title: string
      modified: string
      content: string
      slug: string
      imagemBlogDestaque: {
        fieldGroupName: string
        imagemBlogDestaque: {
          node: {
            publicUrl: string
          }
        }
      }
    }>
  }
}

const Home = () => {
  const data = useStaticQuery<GraphqlBlogQuery>(graphql`
    query BlogHighlightQuery {
      allWpPost(limit: 3, sort: { modified: DESC }) {
        nodes {
          title
          modified
          slug
          content
          imagemBlogDestaque {
            imagemBlogDestaque {
              node {
                publicUrl
              }
            }
          }
        }
      }
    }
  `)

  const posts = data.allWpPost.nodes.map(post => ({
    title: post.title,
    path: `/blog/${post.slug}`,
    modified: post.modified,
    content: post.content,
    banner: post.imagemBlogDestaque?.imagemBlogDestaque?.node.publicUrl,
  }))
  return (
    <Layout>
      <Seo />
      <div className="min-h-dvh">
        <BlogHighlight.Container>
          <BlogHighlight.List data={posts} />
        </BlogHighlight.Container>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo />

export default Home
