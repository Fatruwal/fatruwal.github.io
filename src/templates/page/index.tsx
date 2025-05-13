import React from "react"
import Seo from "@/components/Seo"
import { PageProps } from "gatsby"
import Layout from "@/components/layout"
import Quality, { QualityComponent } from "./quality"
import WhoWeAre, { WhoWeAreProps } from "./who-we-are"
import Contacts, { ContactsProps } from "./contacts"
import { HeaderMenuItem } from "@/components/header"
import { FooterMenuItem } from "@/components/footer"

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
  headerMenu: HeaderMenuItem[]
  footerMenu: FooterMenuItem[]
}
const Page = (props: PageProps<unknown, PageTemplateProps>) => {
  const { page } = props.pageContext
  const { title, content, banner, template } = page
  return (
    <Layout
      headerMenu={props.pageContext.headerMenu}
      footerMenu={props.pageContext.footerMenu}
      className="bg-white"
    >
      <div className="2xl:flex 2xl:justify-center">
        {banner && (
          <img className="items-center" src={banner.url} alt={banner.alt} />
        )}
      </div>
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
