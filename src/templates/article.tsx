import React from "react"
import Layout from "../components/layout"
import { PageProps } from "gatsby"
import { Card } from "@/components/ui/card"
import { HtmlFormat } from "@/common/HtmlString"

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
      <article style={{ paddingBottom: 24 }} className="block bg-[#F3F3F3]">
        <div className="w-full">
          <img
            className="mb-8 w-full object-cover"
            height={360}
            style={{ maxHeight: "360px", objectFit: "cover" }}
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
                __html: HtmlFormat.sanitaze(data.content),
              }}
            />
          </div>
        </div>
      </article>
    </Layout>
  )
}
export default ArticleTemplate
