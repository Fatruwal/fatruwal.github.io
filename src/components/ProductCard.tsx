import React from "react"
import BudgetModal from "./budget-modal"
import { Button } from "./ui/button"
import { Link } from "gatsby"

export type ProductCardProps = {
  image: {
    url: string
    alt: string
  }
  html: string
  path: string
  name: string
}

export const ProductCard = ({ html, image, path, name }: ProductCardProps) => {
  return (
    <div className="h-fit w-full rounded-sm border-none bg-white shadow-none">
      <div className="h-fit w-full">
        <div className="mx-auto flex h-[140px] w-40 items-center justify-center rounded-sm lg:h-[200px] lg:w-10/12">
          <img
            className="max-h-full max-w-full object-contain"
            src={image.url}
            alt={image.alt}
          />
        </div>
        <span className="px-4 text-start text-xl font-bold">{name}</span>
        <div className="mt-4 border-t-[1px] border-light-support-300 px-4 pt-4">
          <div
            className="text-xs text-primary-foreground-400"
            dangerouslySetInnerHTML={{
              __html: html.substring(0, 120).trim().concat("..."),
            }}
          />
        </div>
        <div className="flex flex-col items-stretch justify-between gap-4 p-4 sm:flex-row">
          <Link
            to={path}
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
  )
}
