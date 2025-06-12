import React from "react"
import Layout from "@/components/layout"
import { PageProps } from "gatsby"
import Seo from "@/components/seo"
import { BlogCard } from "@/components/BlogCard"
import GradientBar from "@/components/GradientBar"
import Container from "@/components/Container"
import { HeaderMenuItem } from "@/components/header"
import { FooterMenuItem } from "@/components/footer"

interface ArticleTemplateProps {
  article: {
    banner: string
    title: string
    modified: string
    content: string
  }
  related: BlogCard[]
  headerMenu: HeaderMenuItem[]
  footerMenu: FooterMenuItem[]
}

const ArticleTemplate = ({
  pageContext,
}: PageProps<unknown, ArticleTemplateProps>) => {
  const { article, related, headerMenu, footerMenu } = pageContext

  return (
    <Layout headerMenu={headerMenu} footerMenu={footerMenu}>
      <div className="bg-[#F3F3F3] pb-8">
        <article className="block bg-[#F3F3F3] pb-6">
          <div className="w-full">
            <img
              className="mb-16 h-96 w-full object-cover"
              src={article.banner}
              alt={article.title}
            />
          </div>
          <div className="flex justify-center">
            <Container className="bg-white">
              <h2>{article.title}</h2>
              <div
                className="text-sm"
                dangerouslySetInnerHTML={{
                  __html: article.content, // don't sanitized because this is a trusted source and the content use sensitive html tags such as script for render images.
                }}
              />
            </Container>
          </div>
        </article>
        <div className="flex w-full justify-center">
          <Container className="md:pl-0 md:pr-0">
            <h2 className="font-bold uppercase">Materiais relacionadas</h2>

            <GradientBar className="mb-4 mt-2" />
            <div>
              <ul className="flex flex-col items-center justify-between gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-14 xl:items-stretch">
                {related.map(p => (
                  <li className="rounded-sm" key={p.title}>
                    <BlogCard className="max-w-full" data={p} />
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="artigos" />

export default ArticleTemplate
