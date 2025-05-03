import React, { JSX, ReactNode } from "react"
import Seo from "@/components/Seo"
import { Link, PageProps } from "gatsby"
import Layout from "./layout"
import Container from "@/components/Container"
import { Button } from "@/components/ui/button"
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
import { Card, CardContent } from "@/components/ui/card"
import BudgetModal from "@/components/budget-modal"

interface RelatedProduct {
  name: string
  short_description: string
  path: string
  product_image: string
  product_image_alt: string | undefined
}

interface ProductPage {
  name: string
  category: string | undefined
  short_description: string
  description: string
  path: string
  product_image: string
  product_image_alt: string | undefined
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
    product_image,
    product_image_alt,
    description,
    related_products,
  } = content
  return (
    <Layout className="bg-white">
      <div className="flex justify-center bg-secondary-foreground-100">
        <Container className="rounded-sm p-4">
          <section className="flex flex-col gap-10 lg:grid lg:grid-cols-5">
            <div className="col-span-2 flex h-full w-full items-center justify-center rounded-sm bg-white p-0">
              <img
                className="object-fill"
                src={product_image}
                alt={product_image_alt}
              />
            </div>
            <div className="col-span-3">
              <span className="text-lg uppercase text-primary-foreground-400">
                {category}
              </span>
              <h2 className="mb-4 font-bold uppercase text-primary-700">
                {name}
              </h2>
              <div
                className="text-sm text-primary-foreground-500"
                dangerouslySetInnerHTML={{ __html: short_description }}
              />
              <div className="my-6 flex flex-col gap-4 md:flex-row">
                <BudgetModal>
                  <Button
                    variant="outline"
                    className="rounded-sm bg-primary-500 py-6 font-bold uppercase text-white transition-colors hover:bg-primary-300"
                  >
                    Solicitar orçamento
                  </Button>
                </BudgetModal>
                <a
                  className="flex items-center gap-2 rounded-sm bg-[#28A745] px-4 py-2 text-sm font-bold uppercase text-white transition-colors hover:bg-[#29b845]"
                  target="_blank"
                  rel="noreferrer"
                  href="https://api.whatsapp.com/send?phone=5511963014309&text=Ol%C3%A1%20gostaria%20de%20solicitar%20mais%20informa%C3%A7%C3%B5es"
                >
                  <FaWhatsapp className="mr-1" />
                  Orçamento pelo WhatsApp
                </a>
                <Button
                  variant="outline"
                  className="rounded-sm bg-primary-700 py-6 font-bold uppercase text-white transition-colors hover:bg-primary-500"
                >
                  <IoDownloadOutline className="mr-1" />
                  Download do catalogo
                </Button>
              </div>
              <div className="shadown-sm border-r-1 flex flex-col gap-4 border-primary-50 bg-white p-6 md:flex-row">
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
                        <div className="h-fit w-full rounded-sm border-none bg-white shadow-none">
                          <div className="h-fit w-full">
                            <div className="mx-auto flex h-[140px] w-40 items-center justify-center rounded-sm lg:h-[200px] lg:w-10/12">
                              <img
                                src={row.product_image}
                                alt={row.product_image_alt}
                              />
                            </div>
                            <span className="px-4 text-start text-xl font-bold">
                              {row.name}
                            </span>
                            <div className="mt-4 border-t-[1px] border-light-support-300 px-4 pt-4">
                              <div
                                className="text-xs text-primary-foreground-400"
                                dangerouslySetInnerHTML={{
                                  __html: row.short_description
                                    .substring(0, 120)
                                    .trim()
                                    .concat("..."),
                                }}
                              />
                            </div>
                            <div className="flex flex-col items-stretch justify-between gap-4 p-4 sm:flex-row">
                              <Link
                                to={row.path}
                                className="flex w-full items-center justify-center rounded-sm bg-primary-500 p-2 text-xs font-bold uppercase text-primary-foreground-100"
                              >
                                Saiba mais
                              </Link>
                              <BudgetModal>
                                <Button className="w-full rounded-sm bg-primary-900 p-4 px-6 text-xs uppercase text-primary-foreground-100">
                                  Orçar agora
                                </Button>
                              </BudgetModal>
                            </div>
                          </div>
                        </div>
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
    <div {...props} className={cn("flex items-center gap-2 px-4", className)}>
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
