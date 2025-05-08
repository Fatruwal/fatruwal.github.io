import React from "react"
import Seo from "@/components/Seo"
import { PageProps } from "gatsby"
import Layout from "@/components/layout"
import Container from "@/components/Container"
import { FaWhatsapp } from "react-icons/fa"
import { IoDownloadOutline } from "react-icons/io5"
import Winner from "@/assets/Winner"
import { cn } from "@/lib/utils"
import IsoIcon from "@/assets/IsoIcon"
import StarIcon from "@/assets/Start"
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
  attributes: {
    name: string
    options: string[]
  }[]
  product: {
    image: string
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
    related_products,
    attributes,
  } = content
  const catalog = attributes.find(attr => attr.name === "catalogo")
  return (
    <Layout className="bg-white">
      <div className="flex justify-center bg-secondary-foreground-100">
        <Container className="rounded-sm p-4">
          <section className="flex flex-col gap-5 lg:grid lg:grid-cols-6 xl:gap-10">
            <div className="col-span-2 flex h-full w-full items-center justify-center rounded-sm bg-white p-0">
              <img
                className="object-fill"
                src={product.image}
                alt={product.alt}
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
                {catalog && catalog?.options.length > 0 && (
                  <CatalogDownload.Modal link={catalog.options[0]}>
                    <CatalogDownload.Trigger className="flex h-9 w-full items-center justify-center gap-2 rounded-sm bg-primary-900 px-4 py-7 text-sm font-bold uppercase text-white transition-colors hover:bg-primary-500">
                      <IoDownloadOutline className="mr-1 text-lg" />
                      Download do catalogo
                    </CatalogDownload.Trigger>
                  </CatalogDownload.Modal>
                )}
              </div>
              <div className="shadown-sm border-r-1 my-4 flex flex-col gap-4 border-primary-50 bg-white px-2 py-4 md:my-0 md:flex-row xl:p-6">
                <AboutCompanyCard
                  Icon={IsoIcon}
                  title="Certificado"
                  description="Somos certificados com o ISO 9001"
                  className="border-primary-50 md:border-r-[1px]"
                />
                <AboutCompanyCard
                  Icon={Winner}
                  title="Excelência"
                  description="Oferecemos produtos com excelência"
                  className="border-primary-50 md:border-r-[1px]"
                />
                <AboutCompanyCard
                  Icon={StarIcon}
                  title="SATISFAÇÃO"
                  description="Sua satisfação é nosso maior objetivo"
                />
              </div>
            </div>
          </section>

          {description && (
            <section className="mt-10 bg-white p-6">
              <h4 className="mb-4 text-2xl font-bold uppercase">Descrição</h4>
              <div dangerouslySetInnerHTML={{ __html: description }} />
            </section>
          )}
          {related_products.length > 0 && (
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
                    className="flex-initial md:data-[md-hidden=true]:hidden lg:data-[lg-hidden=true]:hidden xl:data-[xl-hidden=true]:hidden"
                  />
                  <CarouselNext
                    data-xl-hidden={related_products.length <= 4}
                    data-lg-hidden={related_products.length <= 3}
                    data-md-hidden={related_products.length <= 2}
                    className="flex-initial md:data-[md-hidden=true]:hidden lg:data-[lg-hidden=true]:hidden xl:data-[xl-hidden=true]:hidden"
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

const AboutCompanyCard = ({
  className,
  Icon,
  title,
  description,
  ...props
}: React.ComponentProps<"div"> & {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>
  title: string
  description: string
}) => {
  return (
    <div
      {...props}
      className={cn("flex items-center gap-1 px-2 lg:gap-2 lg:px-4", className)}
    >
      <Icon className="h-10 w-20" />
      <div className="flex flex-col space-y-1">
        <h5 className="leading-2 text-sm font-bold uppercase">{title}</h5>
        <span className="text-xs leading-[1.1] text-secondary-foreground-500">
          {description}
        </span>
      </div>
    </div>
  )
}

export const Head = () => <Seo title="products" />

export default ProductTemplate
