import React from "react"
import { PageProps } from "gatsby"
import Layout from "@/components/layout"
import Container from "@/components/Container"
import { FaWhatsapp } from "react-icons/fa"
import { IoDownloadOutline } from "react-icons/io5"
import GradientBar from "@/components/GradientBar"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { budget } from "@/components/budget-modal"
import { ProductCard } from "@/components/ProductCard"
import { CatalogDownload } from "@/components/CatalogDownload"
import { aboutCompany } from "@/components/AboutCompany"

interface RelatedProduct {
  name: string
  short_description: string
  path: string
  product: {
    image: string
    alt: string | undefined
  }
}

interface ProductPage {
  name: string
  category: string | undefined
  short_description: string
  description: string
  path: string
  download: string | undefined
  product: {
    url: string
    alt: string | undefined
  }
  related_products: RelatedProduct[]
}

interface PageTemplateProps {
  content: ProductPage
}

const ProductTemplate = (props: PageProps<unknown, PageTemplateProps>) => {
  const { content } = props.pageContext
  const {
    name,
    category,
    short_description,
    product,
    description,
    download,
    related_products,
  } = content
  return (
    <Layout className="bg-white">
      <div className="flex justify-center bg-secondary-foreground-100">
        <Container className="rounded-sm p-4">
          <section className="flex flex-col gap-5 lg:grid lg:grid-cols-6 xl:gap-10">
            <div className="col-span-2 flex h-full w-full items-center justify-center rounded-sm bg-white p-0">
              <img
                className="object-fill"
                src={product?.url}
                alt={product?.alt}
              />
            </div>
            <div className="flex flex-col justify-between lg:col-span-4 lg:min-h-96">
              <div>
                <span className="text-lg uppercase text-primary-foreground-400">
                  {category}
                </span>
                <h2 className="mb-4 font-bold uppercase text-primary-700">
                  {name}
                </h2>
              </div>
              <div
                className="text-sm text-primary-foreground-500"
                dangerouslySetInnerHTML={{ __html: short_description }}
              />
              <div className="my-2 flex flex-col gap-4 md:flex-row">
                <budget.Modal>
                  <budget.Trigger className="rounded-sm bg-primary-500 px-4 py-7 font-bold uppercase text-white transition-colors hover:bg-primary-300">
                    Solicitar orçamento
                  </budget.Trigger>
                </budget.Modal>
                <a
                  className="flex h-9 w-full items-center justify-center gap-2 rounded-sm bg-[#28A745] px-4 py-7 text-sm font-bold uppercase text-white transition-colors hover:bg-[#29b845]"
                  target="_blank"
                  rel="noreferrer"
                  href="https://api.whatsapp.com/send?phone=5511963014309&text=Ol%C3%A1%20gostaria%20de%20solicitar%20mais%20informa%C3%A7%C3%B5es"
                >
                  <FaWhatsapp className="mr-1 text-lg" />
                  Orçamento pelo WhatsApp
                </a>
                {download && (
                  <CatalogDownload.Modal link={download}>
                    <CatalogDownload.Trigger className="flex h-9 w-full items-center justify-center gap-2 rounded-sm bg-primary-900 px-4 py-7 text-sm font-bold uppercase text-white transition-colors hover:bg-primary-500">
                      <IoDownloadOutline className="mr-1 text-lg" />
                      Download do catalogo
                    </CatalogDownload.Trigger>
                  </CatalogDownload.Modal>
                )}
              </div>
              <div className="shadown-sm border-r-1 my-4 flex flex-col gap-4 border-primary-50 bg-white px-2 py-4 md:my-0 md:flex-row xl:p-6">
                <aboutCompany.CertificateCard className="border-primary-50 md:border-r-[1px]" />
                <aboutCompany.ExcellenceCard className="border-primary-50 md:border-r-[1px]" />
                <aboutCompany.SatisfactionCard />
              </div>
            </div>
          </section>

          {description && (
            <section className="mt-10 bg-white p-6">
              <h4 className="mb-4 text-2xl font-bold uppercase">Descrição</h4>
              <div dangerouslySetInnerHTML={{ __html: description }} />
            </section>
          )}
          {related_products?.length > 0 && (
            <section className="mt-10 w-full">
              <h2 className="font-bold">Outros modelos</h2>
              <GradientBar />
              <div className="px-10 lg:px-8">
                <Carousel
                  opts={{
                    align: "center",
                  }}
                  className="w-full"
                >
                  <CarouselContent className="w-full">
                    {related_products.map(row => (
                      <CarouselItem
                        key={row.name}
                        className="ml-1 md:basis-1/2 lg:ml-0 xl:basis-1/3 2xl:basis-1/4"
                      >
                        <ProductCard
                          html={row.short_description}
                          image={{
                            url: row.product.image,
                            alt: row.product.alt || "",
                          }}
                          path={row.path}
                          name={row.name}
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>

                  <CarouselPrevious
                    data-xl-hidden={related_products.length <= 4}
                    data-lg-hidden={related_products.length <= 3}
                    data-md-hidden={related_products.length <= 2}
                    className="hidden lg:flex"
                  />
                  <CarouselNext
                    data-xl-hidden={related_products.length <= 4}
                    data-lg-hidden={related_products.length <= 3}
                    data-md-hidden={related_products.length <= 2}
                    className="hidden lg:flex"
                  />
                </Carousel>
              </div>
            </section>
          )}
        </Container>
      </div>
    </Layout>
  )
}

export default ProductTemplate
