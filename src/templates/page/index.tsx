import React from "react"
import Seo from "@/components/seo"
import { PageProps } from "gatsby"
import Layout from "../layout"
import Quality, { QualityProps } from "./quality"
import WhoWeAre, { WhoWeAreProps } from "./who-we-are"

interface PageBanner {
  alt: string
  url: string
}

type PageQualidadeTemplate = {
  name: "Qualidade"
  content: QualityProps["content"]
}
type PageWhoWeAreTemplate = {
  name: "Quem Somos"
  content: WhoWeAreProps["content"]
}
interface PageTemplateProps {
  page: {
    slug: string
    title: string
    content: string
    banner?: PageBanner
    template: PageQualidadeTemplate | PageWhoWeAreTemplate
    path: string
  }
}
const Page = (props: PageProps<unknown, PageTemplateProps>) => {
  const { page } = props.pageContext
  const { title, content, slug, banner, template } = page
  return (
    <Layout className="bg-white">
      <div className="2xl:flex 2xl:justify-center">
        {banner && (
          <img className="items-center" src={banner.url} alt={banner.alt} />
        )}
      </div>
      <div className="flex justify-center">
        <div className="mx-4 rounded-sm p-4 sm:w-10/12 xl:max-w-screen-2xl">
          <h1 className="font-bold">{title}</h1>
          <span className="mb-8 mt-2 block h-1 w-40 bg-blue-gradient text-lg" />
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
      {["qualidade", "quem-somos"].includes(slug) && (
        <div className="flex flex-col items-center justify-center bg-primary-25">
          {template.name === "Qualidade" && (
            <Quality content={template.content} />
          )}
          {template.name === "Quem Somos" && (
            <WhoWeAre content={template.content} />
          )}
        </div>
      )}
    </Layout>
  )
}

export const Head = () => <Seo />

export default Page
