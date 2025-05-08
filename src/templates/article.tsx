import React from "react"
import Layout from "./layout"
import { PageProps } from "gatsby"
import Seo from "@/components/Seo"
import { BlogHighlight } from "@/components/BlogHighlight"
import { BlogCard } from "@/components/BlogCard"
import GradientBar from "@/components/GradientBar"
import Container from "@/components/Container"

interface ArticleTemplateProps {
  article: {
    banner: string
    title: string
    modified: string
    content: string
  }
  related: BlogCard[]
}

const ArticleTemplate = ({
  pageContext,
}: PageProps<unknown, ArticleTemplateProps>) => {
  const { article, related } = pageContext

  return (
    <Layout>
      <div className="bg-[#F3F3F3] pb-8">
        <article className="block bg-[#F3F3F3] pb-6">
          <div className="w-full">
            <img
              className="mb-8 h-96 w-full object-cover"
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
          <Container>
            <h2>Materiais relacionados</h2>

            <GradientBar className="mb-4 mt-2" />
            <div>
              <ul className="flex flex-col items-center justify-between gap-4 xl:flex-row xl:items-stretch">
                {related.map(p => (
                  <li
                    className="max-w-fit rounded-sm bg-white p-4"
                    key={p.title}
                  >
                    <BlogCard data={p} />
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
