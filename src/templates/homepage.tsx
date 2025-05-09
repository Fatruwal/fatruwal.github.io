import React from "react"
import Layout from "@/components/layout"
import Seo from "@/components/Seo"
import { Link, PageProps } from "gatsby"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Container from "@/components/Container"
import GradientBar from "@/components/GradientBar"
import { BlogCard } from "@/components/BlogCard"
import armac from "@/assets/armac.png"
import astec from "@/assets/astec.png"
import baxter from "@/assets/baxter.png"
import weg from "@/assets/weg.png"
import sabesp from "@/assets/sabesp.png"
import prata from "@/assets/prata.png"
import ferrero from "@/assets/ferrero.png"
import fabercastel from "@/assets/fabercastel.png"
import caraiba from "@/assets/caraiba.png"
import intertank from "@/assets/intertank.png"
import panco from "@/assets/panco.png"
import petrobras from "@/assets/petrobras.png"

interface HomePageProps {
  articles: Array<{
    title: string
    modified: string
    content: string
    path: string
    banner: string
  }>
  products: Array<{
    name: string
    image: string
    alt: string
    short_description: string
    path: string
  }>
}

const logos = [
  { alt: "armac", src: armac },
  { alt: "astec", src: astec },
  { alt: "prata", src: prata },
  { alt: "ferrero", src: ferrero },
  { alt: "fabercastel", src: fabercastel },
  { alt: "caraiba", src: caraiba },
  { alt: "intertank", src: intertank },
  { alt: "weg", src: weg },
  { alt: "baxter", src: baxter },
  { alt: "sabesp", src: sabesp },
  { alt: "panco", src: panco },
  { alt: "petrobras", src: petrobras },
]

const Home = ({ pageContext }: PageProps<unknown, HomePageProps>) => {
  const { articles, products } = pageContext

  return (
    <Layout>
      <div>
        <ProductHighlight products={products} />
        <section className="mb-24 mt-8 flex w-full flex-col items-center justify-center gap-2 bg-[#80B6E710] py-10">
          <h3 className="text-center font-bold uppercase">
            EMPRESAS QUE CONFIAM EM NOSSOS PRODUTOS
          </h3>
          <GradientBar className="mb-4" />
          <ul className="grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-6">
            {logos.map(logo => (
              <li
                key={logo.alt}
                className="flex h-24 w-40 items-center justify-center rounded-sm bg-white p-2 shadow-md"
              >
                <img
                  className="max-h-full max-w-full object-contain"
                  src={logo.src}
                  alt={logo.alt}
                />
              </li>
            ))}
          </ul>
        </section>
        <section className="flex flex-col items-center justify-center gap-2 bg-primary-700 py-10">
          <h3 className="my-2 text-center font-bold text-primary-foreground-100">
            Blog fatruwal
          </h3>
          <GradientBar className="mb-4" />
          <ul
            className={
              "grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-5 xl:grid-cols-3"
            }
          >
            {articles.map(p => (
              <li className="flex flex-col" key={p.title}>
                <BlogCard data={p} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="homepage" />

export default Home
const ProductHighlight = ({
  products,
}: {
  products: Array<{
    name: string
    image: string
    alt: string
    short_description: string
    path: string
  }>
}) => {
  return (
    <section className="flex justify-center">
      <Container className="flex justify-center">
        <Carousel
          opts={{
            align: "center",
          }}
          className="w-10/12 md:w-full"
        >
          <h3 className="text-center font-bold uppercase">Nossos produtos</h3>
          <GradientBar className="mx-auto mb-6 mt-6" />
          <CarouselContent className="w-full p-1">
            {products.map(row => (
              <CarouselItem
                key={row.name}
                className="ml-1 md:basis-1/2 lg:ml-0 xl:basis-1/3 2xl:basis-1/4"
              >
                {/* Container principal com altura fixa */}
                <div className="shadow-full flex h-[400px] w-full flex-col overflow-hidden rounded-sm border-none bg-white">
                  {/* Área da imagem com altura fixa */}
                  <div className="flex h-[140px] w-full items-center justify-center bg-white p-2 lg:h-[200px]">
                    <div className="flex h-full w-40 items-center justify-center lg:w-10/12">
                      <img
                        className="max-h-full max-w-full object-contain"
                        src={row.image}
                        alt={row.alt}
                      />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col overflow-hidden rounded-b-sm bg-primary-500">
                    <h3 className="line-clamp-1 px-4 py-3 text-xl font-bold text-primary-foreground-100">
                      {row.name}
                    </h3>

                    <div className="flex-1 overflow-hidden px-4">
                      <div
                        className="line-clamp-3 overflow-hidden text-xs text-primary-foreground-100"
                        dangerouslySetInnerHTML={{
                          __html: row.short_description,
                        }}
                      />
                    </div>

                    <div className="mt-auto px-4 pb-4 pt-2">
                      <Link
                        to={row.path}
                        className="inline-flex items-center justify-center rounded-sm bg-primary-900 px-4 py-2 text-xs font-bold uppercase text-primary-foreground-100 transition-colors hover:bg-primary-700"
                      >
                        Veja mais
                      </Link>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            data-xl-hidden={products.length <= 4}
            data-lg-hidden={products.length <= 3}
            data-md-hidden={products.length <= 2}
            className="flex-initial md:data-[md-hidden=true]:hidden lg:data-[lg-hidden=true]:hidden xl:data-[xl-hidden=true]:hidden"
          />
          <CarouselNext
            data-xl-hidden={products.length <= 4}
            data-lg-hidden={products.length <= 3}
            data-md-hidden={products.length <= 2}
            className="flex-initial md:data-[md-hidden=true]:hidden lg:data-[lg-hidden=true]:hidden xl:data-[xl-hidden=true]:hidden"
          />
        </Carousel>
      </Container>
    </section>
  )
}
