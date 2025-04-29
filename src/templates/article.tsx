import React from "react"
import Layout from "./layout"
import { PageProps } from "gatsby"
import Seo from "@/components/seo"
import { BlogHighlight } from "@/components/BlogHighlight"
import { BlogCard } from "@/components/BlogCard"

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
      <div className="bg-[#F3F3F3] py-8">
        <article className="block bg-[#F3F3F3] pb-6">
          <div className="w-full">
            <img
              className="mb-8 h-96 w-full object-cover"
              src={article.banner}
              alt={article.title}
            />
          </div>
          <div className="flex justify-center">
            <div className="mx-4 rounded-sm bg-white p-4 shadow-sm sm:w-9/12 lg:max-w-screen-sm xl:max-w-screen-2xl">
              <h2>{article.title}</h2>
              <div
                className="text-sm"
                dangerouslySetInnerHTML={{
                  __html: article.content, // don't sanitized because this is a trusted source and the content use sensitive html tags such as script for render images.
                }}
              />
            </div>
          </div>
        </article>
        <div className="flex justify-center">
          <div className="mx-4 rounded-sm sm:w-9/12 lg:max-w-screen-sm xl:max-w-screen-2xl">
            <h2>Materiais relacionados</h2>
            <span className="mb-4 mt-2 block h-1 w-40 bg-blue-gradient" />
            <BlogHighlight.List
              className="flex w-full justify-between"
              data={related}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="artigos" />

export default ArticleTemplate
