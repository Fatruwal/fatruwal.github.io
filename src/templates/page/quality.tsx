import Container from "@/components/Container"
import GradientBar from "@/components/GradientBar"
import { Link } from "gatsby"
import React from "react"

export interface QualityComponent {
  certificate?: {
    header?: string
    image?: {
      altText: string
      publicUrl: string
    }
  }
  guarantee?: {
    header?: string
    image?: {
      altText: string
      publicUrl: string
    }
  }
  download?: {
    file?: string
  }
  table?: {
    file?: string
  }
}

export interface QualityProps {
  content: {
    title: string
    text: string
    content: QualityComponent
  }
}

export default function Quality({ content }: QualityProps) {
  console.log(content)
  return (
    <>
      <div className="flex justify-center bg-[#f1f1f1]">
        <Container className="rounded-sm p-4">
          <h1 className="font-bold uppercase">{content.title}</h1>
          <GradientBar className="my-6" />
          <div dangerouslySetInnerHTML={{ __html: content.text }} />
        </Container>
      </div>
      <div className="flex flex-col items-center justify-center bg-primary-25">
        <div className="w-full px-8 sm:w-11/12 xl:max-w-screen-2xl">
          <div className="flex flex-col gap-4 rounded-sm p-4 px-8 sm:px-0 md:flex-row md:items-center md:justify-between lg:gap-20">
            <div className="">
              <h2 className="my-4 text-lg font-bold">
                {content.content.certificate?.header}
              </h2>
              {content.content.certificate?.image && (
                <img
                  className="h-96 min-h-20 md:h-auto md:min-h-96 lg:min-h-96"
                  src={content.content.certificate?.image.publicUrl}
                  alt={content.content.certificate?.image.altText}
                />
              )}
            </div>
            <div className="">
              <h2 className="my-4 text-lg font-bold">
                {content.content.guarantee?.header}
              </h2>
              {content.content.guarantee?.image && (
                <img
                  className="min-h-20 md:min-h-96 lg:min-h-96"
                  src={content.content.guarantee?.image.publicUrl}
                  alt={content.content.guarantee?.image.altText}
                />
              )}
            </div>
          </div>
          <div className="flex flex-col gap-2 px-8 md:flex-row md:px-0">
            {content.content.download && (
              <div className="mb-8 mt-2">
                <a
                  href={content.content.download?.file}
                  className="md:text-md cursor-pointer rounded-sm bg-primary-900 p-4 px-6 text-center text-sm font-bold uppercase text-white transition-colors hover:bg-primary-600"
                  target="_blank"
                >
                  Download do certificado
                </a>
              </div>
            )}
            {content.content.table && (
              <div className="mb-8 mt-2">
                <a
                  href={content.content.table?.file}
                  className="md:text-md cursor-pointer rounded-sm bg-primary-900 p-4 px-6 text-center text-sm font-bold uppercase text-white transition-colors hover:bg-primary-600"
                  target="_blank"
                >
                  tabela de compatibilidade
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
