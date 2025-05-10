import { CatalogDownload } from "@/components/CatalogDownload"
import Container from "@/components/Container"
import GradientBar from "@/components/GradientBar"
import Layout from "@/components/layout"
import { ProductCard } from "@/components/ProductCard"
import { PageProps } from "gatsby"
import React from "react"

interface PageBanner {
  alt: string
  url: string
}

type PageCategoryTemplate = {
  content: {
    slug: string
    title: string
    banner?: PageBanner
    description: string
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

const Category = ({
  pageContext,
}: PageProps<unknown, PageCategoryTemplate>) => {
  const { content } = pageContext
  const { description, products, title, download, banner } = content
  return (
    <Layout className="bg-white">
      <div className="2xl:flex 2xl:justify-center">
        {banner && (
          <img className="items-center" src={banner.url} alt={banner.alt} />
        )}
      </div>
      <div className="flex justify-center bg-[#F3F3F3]">
        <Container className="rounded-sm p-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-bold">{title}</h1>
            </div>
            {download && (
              <CatalogDownload.Modal link={download}>
                <CatalogDownload.Trigger className="text-md lg:text-md mt-2 cursor-pointer rounded border-0 bg-primary-700 p-3 py-2 text-center text-sm font-bold uppercase text-primary-foreground-100 hover:bg-blue-700 hover:bg-primary-600 lg:px-6 lg:py-4">
                  Download do catálogo
                </CatalogDownload.Trigger>
              </CatalogDownload.Modal>
            )}
          </div>
          <GradientBar className="my-4" />
        </Container>
      </div>
      <div className="flex justify-center bg-[#F3F3F3]">
        <Container>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product, index) => (
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
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </Container>
      </div>
    </Layout>
  )
}

export default Category
