import React from "react"
import Layout from "@/components/layout"
import { PageProps } from "gatsby"
import { BlogCard } from "@/components/BlogCard"
import Seo from "@/components/Seo"
import Container from "@/components/Container"
import { HeaderMenuItem } from "@/components/header"
import { FooterMenuItem } from "@/components/footer"

interface BlogTemplateProps {
  page: {
    slug: string
    title: string
    content: string
  }
  articles: BlogCard[]
  headerMenu: HeaderMenuItem[]
  footerMenu: FooterMenuItem[]
}

const Blog = ({ pageContext }: PageProps<unknown, BlogTemplateProps>) => {
  const { page, articles, headerMenu, footerMenu } = pageContext
  return (
    <Layout headerMenu={headerMenu} footerMenu={footerMenu}>
      <section className="flex justify-center bg-[#F3F3F3]">
        <Container className="mx-8 mb-32 max-w-screen-2xl justify-start xl:w-10/12">
          <h2 className="mt-4 font-bold uppercase">{page.title}</h2>
          <span className="my-6 block h-1 w-48 bg-blue-gradient" />
          <p
            dangerouslySetInnerHTML={{ __html: page.content }}
            className="my-8 text-sm text-primary-foreground-400"
          />
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:mx-0 xl:grid-cols-4 xl:gap-4">
            {articles.map(p => (
              <li key={p.title}>
                <BlogCard className="h-full p-4" data={p} />
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="Blog" />

export default Blog
