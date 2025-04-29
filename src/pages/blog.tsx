import React from "react"
import Layout from "@/templates/layout"
import { graphql, useStaticQuery } from "gatsby"
import { BlogCard } from "@/components/BlogCard"
import Seo from "@/components/seo"

interface GraphqlBlogQuery {
  allWpPost: {
    nodes: Array<{
      id: string
      title: string
      modified: string
      content: string
      slug: string
      imagemBlogDestaque: {
        fieldGroupName: string
        imagemBlogDestaque: {
          node: {
            sourceUrl: string
          }
        }
      }
    }>
  }
}

const Blog = () => {
  const data = useStaticQuery<GraphqlBlogQuery>(graphql`
    query ListBlogQuery {
      allWpPost(limit: 1000, sort: { modified: DESC }) {
        nodes {
          id
          title
          modified
          slug
          content
          imagemBlogDestaque {
            fieldGroupName
            imagemBlogDestaque {
              node {
                sourceUrl
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
    banner: post.imagemBlogDestaque?.imagemBlogDestaque?.node.sourceUrl,
  }))

  return (
    <Layout>
      <Seo />
      <section className="flex justify-center bg-[#F3F3F3]">
        <div className="mx-8 mb-32 max-w-screen-2xl justify-start xl:w-10/12">
          <h2 className="mt-4 font-bold uppercase">Blog Fatruwal</h2>
          <span className="my-6 block h-1 w-48 bg-blue-gradient" />
          <p className="my-8 text-sm text-primary-foreground-400">
            Potencialize a produtividade da sua indústria com soluções em
            borracha de alta qualidade! Descubra como as aplicações em borracha
            podem revolucionar seus processos, garantindo maior eficiência,
            durabilidade e segurança. No Blog da Fatruwal, você encontrará
            insights e orientações especializadas sobre os mais diversos
            produtos e aplicações industriais, desde vedações e isolamentos até
            revestimentos e peças personalizadas. Aumente a qualidade dos seus
            produtos e otimize seus resultados com as soluções em borracha que
            você precisa. Explore nosso conteúdo exclusivo agora mesmo e
            impulsione o sucesso da sua indústria!
          </p>
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:mx-0 xl:grid-cols-4 xl:gap-4">
            {posts.map(p => (
              <li key={p.title} className="mx-auto max-w-96 xl:max-w-sm">
                <BlogCard className="p-4" data={p} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="Blog" />

export default Blog
