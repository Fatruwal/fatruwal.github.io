import React from "react"
import Layout from "./layout"
import { PageProps } from "gatsby"
import Seo from "@/components/seo"

interface ArticleTemplateProps {
  data: {
    banner: string
    title: string
    modified: string
    content: string
  }
}

const ArticleTemplate = ({
  pageContext,
}: PageProps<unknown, ArticleTemplateProps>) => {
  const { data } = pageContext

  return (
    <Layout>
      <article className="block bg-[#F3F3F3] pb-6">
        <div className="w-full">
          <img
            className="mb-8 h-96 w-full object-cover"
            src={data.banner}
            alt={data.title}
          />
        </div>
        <div className="flex justify-center">
          <div className="mx-4 rounded-sm bg-white p-4 shadow-sm sm:w-10/12 lg:max-w-screen-sm xl:max-w-screen-2xl">
            <h2>{data.title}</h2>
            <div
              className="text-sm"
              dangerouslySetInnerHTML={{
                __html: data.content, // don't sanitized because this is a trusted source and the content use sensitive html tags such as script for render images.
              }}
            />
          </div>
        </div>
      </article>
    </Layout>
  )
}

export const Head = () => <Seo title="artigos" />

export default ArticleTemplate
