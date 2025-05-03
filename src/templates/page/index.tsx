import React from "react"
import Seo from "@/components/Seo"
import { PageProps } from "gatsby"
import Layout from "../layout"
import Quality, { QualityProps } from "./quality"
import WhoWeAre, { WhoWeAreProps } from "./who-we-are"
import Contacts, { ContactsProps } from "./contacts"
import GradientBar from "@/components/GradientBar"
import Container from "@/components/Container"

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

type PageContactsTemplate = {
  name: "Contato"
  content: ContactsProps["content"]
}

interface PageTemplateProps {
  page: {
    slug: string
    title: string
    content: string
    banner?: PageBanner
    template:
      | PageQualidadeTemplate
      | PageWhoWeAreTemplate
      | PageContactsTemplate
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
        <Container className="rounded-sm p-4">
          <h1 className="font-bold">{title}</h1>
          <GradientBar className="my-6" />
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </Container>
      </div>
      {template.name === "Contato" && <Contacts content={template.content} />}
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
