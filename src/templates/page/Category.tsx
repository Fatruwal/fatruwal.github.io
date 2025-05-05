import Container from "@/components/Container"
import GradientBar from "@/components/GradientBar"
import React from "react"

export interface CategoryProps {
  content: {
    title: string
    text: string
    content: {
      download?: string
      products: Array<{
        title: string
        text: string
        image: {
          alt: string
          url: string
        }
      }>
    }
  }
}

export const Category = ({ content }: CategoryProps) => {
  return (
    <>
      <div className="flex justify-center">
        <Container className="rounded-sm p-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-bold">{content.title}</h1>
            </div>
            {content.content?.download && (
              <a
                href={content.content.download}
                className="cursor-pointer bg-primary-700 p-3 px-6 text-center text-xs font-bold text-white hover:bg-primary-600"
                target="_blank"
              >
                Download do certificado
              </a>
            )}
          </div>
          <GradientBar className="my-6" />
        </Container>
      </div>
      <div>
        {content.content?.products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-4 py-4"
          >
            <img
              src={product.image.url}
              alt={product.image.alt}
              className="h-[200px] w-[200px] object-cover"
            />
            <h2 className="text-lg font-bold">{product.title}</h2>
            <p className="text-sm text-primary-foreground-400">
              {product.text}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <Container>
          <div
            className="text-sm text-primary-foreground-400"
            dangerouslySetInnerHTML={{ __html: content.text }}
          />
        </Container>
      </div>
    </>
  )
}
