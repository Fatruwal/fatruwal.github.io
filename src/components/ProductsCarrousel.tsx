import React from "react"

import ventosaEspeciais from "@/assets/ventosas-especiais.png"
import { Link } from "gatsby"

export default function ProductsCarrousel() {
  return (
    <section className="flex h-full justify-center bg-[#0E9CFE] p-4 py-12">
      <div className="flex w-full flex-col-reverse gap-0 md:grid md:grid-cols-12">
        <div className="sm:w-8/10 mx-auto flex w-10/12 flex-col gap-8 text-start md:col-span-4 md:w-full md:items-start md:py-8 md:pl-8 lg:col-span-5">
          <h1 className="text-wrap text-start text-3xl font-bold uppercase text-white sm:text-nowrap md:text-wrap md:text-h1">
            Ventosas especiais
          </h1>
          <span className="font-xl text-white">
            Oferecemos serviços de desenvolvimento de ventosas a partir de
            desenhos ou amostras, atendendo as necessidades espefícicas dos
            projetos. Fabricamos ventosas para máquinas com esteiras
            transportadoras, máquinas seladoras, máquinas embaladoras e outros
            equipamentos de processamento de materiais.
          </span>
          <Link
            to="/products/ventosas"
            className="w-fit rounded-sm bg-primary-900 px-6 py-2 font-bold uppercase text-white"
          >
            Confira agora
          </Link>
        </div>{" "}
        <div className="col-span-8 mx-auto flex h-full w-full items-center justify-center lg:col-span-7">
          <img
            src={ventosaEspeciais}
            className="max-h-full w-8/12 max-w-full object-contain md:w-full lg:h-full lg:w-full"
            alt="ventosa especiais"
          />
        </div>
      </div>
    </section>
  )
}
