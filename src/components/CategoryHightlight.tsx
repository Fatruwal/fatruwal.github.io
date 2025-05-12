import React from "react"
import { Link } from "gatsby"
import { aboutCompany } from "@/components/AboutCompany"
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel"
import ventosasEspeciais from "@/assets/ventosas-especiais.png"

const aboutCompanyItems = [
  aboutCompany.CertificateCard,
  aboutCompany.ExcellenceCard,
  aboutCompany.SatisfactionCard,
  aboutCompany.QualityCard,
]

export type CategoryHighlight = {
  title: string
  description: string
  path: string
  image: {
    url: string
    alt: string
  }
}

const categories: CategoryHighlight[] = [
  {
    title: "ventosas especiais",
    description:
      "Oferecemos serviços de desenvolvimento de ventosas a partir de desenhos ou amostras, atendendo as necessidades espefícicas dos projetos. Fabricamos ventosas para máquinas com esteiras transportadoras, máquinas seladoras, máquinas embaladoras e outros equipamentos de processamento de materiais. ",
    path: "/category/pecas-especiais",
    image: {
      url: ventosasEspeciais,
      alt: "Ventosas Especiais",
    },
  },
]

export default function CategoriesHighlight() {
  return (
    <section className="h-full w-full">
      <div className="relative bg-[#0E9CFE] py-12">
        <div className="flex flex-col items-center justify-center">
          <Carousel>
            <CarouselContent>
              {categories.map((category, index) => (
                <CarouselItem
                  key={`carousel-item-${index}`}
                  className="lg-container flex h-full flex-col items-center justify-center px-2 py-4"
                >
                  <div className="lg:container">
                    <div className="flex w-full flex-col-reverse gap-0 pb-8 md:grid md:grid-cols-12">
                      <div className="sm:w-8/10 mx-auto flex w-10/12 flex-col gap-8 text-start md:col-span-4 md:w-full md:items-start md:py-8 md:pl-8 lg:col-span-5">
                        <h1 className="text-wrap text-start text-3xl font-bold uppercase text-white sm:text-nowrap md:text-wrap md:text-h1">
                          {category.title}
                        </h1>
                        <span className="font-xl text-white">
                          {category.description}
                        </span>
                        <Link
                          to={category.path}
                          className="w-fit rounded-sm bg-primary-900 px-6 py-2 font-bold uppercase text-white"
                        >
                          Confira agora
                        </Link>
                      </div>{" "}
                      <div className="col-span-8 mx-auto flex h-full w-full items-center justify-center lg:col-span-7">
                        <img
                          src={category.image.url}
                          className="max-h-full w-8/12 max-w-full object-contain md:w-full lg:h-full lg:w-full"
                          alt={category.image.alt}
                        />
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <div className="flex justify-center">
          <div className="border-r-1 absolute -bottom-12 my-4 hidden max-w-screen-2xl flex-row gap-4 border-primary-50 bg-white px-2 py-4 shadow-level-7 md:my-0 lg:flex lg:w-11/12 xl:p-6">
            {aboutCompanyItems.map((Card, index) => (
              <Card
                key={index}
                data-border={index !== aboutCompanyItems.length - 1}
                className="border-primary-50 data-[border=true]:md:border-r-[1px]"
              />
            ))}
          </div>
          <Carousel className="absolute -bottom-12 my-4 flex w-11/12 bg-white shadow-level-7 lg:hidden">
            <CarouselContent>
              {aboutCompanyItems.map((Card, index) => (
                <CarouselItem
                  key={`carousel-item-${index}`} // Better key
                  className="relative ml-1 px-2 py-4 sm:basis-1/2 lg:ml-0 xl:basis-1/2 2xl:basis-1/4"
                >
                  <div className="h-full w-full">
                    {" "}
                    {/* Wrapper to maintain context */}
                    <Card
                      data-border={index !== aboutCompanyItems.length - 1}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  )
}
