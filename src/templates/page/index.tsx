import React from "react"
import Seo from "@/components/Seo"
import { PageProps } from "gatsby"
import Layout from "@/components/layout"
import Quality, { QualityComponent } from "./quality"
import WhoWeAre, { WhoWeAreProps } from "./who-we-are"
import Contacts, { ContactsProps } from "./contacts"
import { Category, CategoryProps } from "./Category"

interface PageBanner {
  alt: string
  url: string
}

type PageQualidadeTemplate = {
  name: "Qualidade"
  content: QualityComponent
}
type PageWhoWeAreTemplate = {
  name: "Quem Somos"
  content: WhoWeAreProps["content"]["content"]
}

type PageContactsTemplate = {
  name: "Contato"
  content: ContactsProps["content"]
}

type PageCategoryTemplate = {
  name: "Categoria"
  content: CategoryProps["content"]["content"]
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
      | PageCategoryTemplate
    path: string
  }
}
const Page = (props: PageProps<unknown, PageTemplateProps>) => {
  const { page } = props.pageContext
  const { title, content, banner, template } = page
  return (
    <Layout className="bg-white">
      <div className="2xl:flex 2xl:justify-center">
        {banner && (
          <img className="items-center" src={banner.url} alt={banner.alt} />
        )}
      </div>
      {template.name === "Categoria" && (
        <Category
          content={{
            text: content,
            title,
            content: template.content,
          }}
        />
      )}
      {template.name === "Contato" && <Contacts content={template.content} />}
      {template.name === "Qualidade" && (
        <Quality
          content={{ title, text: content, content: template.content }}
        />
      )}
      {template.name === "Quem Somos" && (
        <WhoWeAre
          content={{ title, text: content, content: template.content }}
        />
      )}
    </Layout>
  )
}

export const Head = () => <Seo />

export default Page
