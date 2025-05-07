import Container from "@/components/Container"
import GradientBar from "@/components/GradientBar"
import { ProductCard } from "@/components/ProductCard"
import React from "react"

export interface CategoryProps {
  content: {
    title: string
    text: string
    content: {
      download?: string
      products: Array<{
        name: string
        text: string
        path: string
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
      <div className="flex justify-center bg-[#F3F3F3]">
        <Container className="rounded-sm p-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-bold">{content.title}</h1>
            </div>
            {content.content?.download && (
              <a
                href={content.content.download}
                className="text-md cursor-pointer bg-primary-700 p-3 px-6 text-center font-bold text-white hover:bg-primary-600"
                target="_blank"
              >
                Download do certificado
              </a>
            )}
          </div>
          <GradientBar className="my-4" />
        </Container>
      </div>
      <div className="flex justify-center bg-[#F3F3F3]">
        <Container>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {content.content?.products.map((product, index) => (
              <ProductCard
                key={index}
                html={product.text}
                image={product.image}
                path={product.path}
                name={product.name}
              />
            ))}
          </div>
        </Container>
      </div>
      <div className="flex justify-center bg-[#F3F3F3] pb-10">
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
