import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

interface SeoQuery {
  wp: {
    generalSettings: {
      title: string
      description: string
      language: string
    }
  }
}

interface SeoProps {
  title?: string
}

const Seo = ({ title: overrideTitle }: SeoProps) => {
  const title = overrideTitle || `Fatruwal - Borracharia e Indústria`
  const description = `A Fatruwal é uma empresa especializada na fabricação de coxins, retentores, anéis de vedação, diafragmas, juntas, ventosas, peças, arruelas e buchas.`
  const language = `pt-BR`

  const metaDescription = description
  const socialMedia = {
    instagram: `https://www.instagram.com/fatruwal/`,
    facebook: `https://www.facebook.com/fatruwal`,
    youtube: `https://www.youtube.com/channel/UCZl4Cc307IZNlMhmQLayWyw`,
    linkedin: `https://www.linkedin.com/company/fatruwalfabricandosolucoes/`,
  }
  return (
    <Helmet
      htmlAttributes={{
        lang: language || `pt`,
      }}
      title={title}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: `fatruwal, borracharia, indústria, serviços, fabricação, equipamentos, coxins, retentores, anéis de vedação, diafragmas, juntas, ventosas, peças, arruelas, buchas`,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:locale`,
          content: language || `pt_BR`,
        },
        {
          property: `og:url`,
          content: `https://www.fatruwal.com.br/`,
        },
        {
          property: `og:see_also`,
          content: socialMedia.instagram,
        },
        {
          property: `og:see_also`,
          content: socialMedia.facebook,
        },

        {
          property: `og:see_also`,
          content: socialMedia.youtube,
        },
        {
          property: `og:see_also`,
          content: socialMedia.linkedin,
        },
      ]}
    />
  )
}

export default Seo
