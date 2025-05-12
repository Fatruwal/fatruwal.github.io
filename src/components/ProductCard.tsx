import React from "react"
import { budget } from "./budget-modal"
import { Link } from "gatsby"
import { cn } from "@/lib/utils"

export type ProductCardProps = {
  image: {
    url: string
    alt: string
  }
  html: string
  path: string
  name: string
} & React.ComponentProps<"div">

export const ProductCard = ({
  html,
  image,
  path,
  name,
  className,
  ...props
}: ProductCardProps) => {
  return (
    <div
      className={cn(
        "flex h-full w-full flex-col rounded-sm border-none bg-white shadow-none",
        className,
      )}
      {...props}
    >
      <div className="flex h-full flex-col">
        {" "}
        {/* Alterado para flex-col e h-full */}
        <div className="mx-auto flex h-[140px] w-40 items-center justify-center rounded-sm lg:h-[200px] lg:w-10/12">
          <img
            className="max-h-full max-w-full object-contain"
            src={image.url}
            alt={image.alt}
          />
        </div>
        <span className="flex-wrap px-4 text-start text-xl font-bold">
          {name}
        </span>
        <div className="mt-4 border-t-[1px] border-light-support-300 px-4 pt-4">
          <div
            className="text-xs text-primary-foreground-400"
            dangerouslySetInnerHTML={{
              __html: html.substring(0, 130).trim().concat("..."),
            }}
          />
        </div>
        <div className="mt-auto flex flex-col gap-4 p-4 sm:flex-row">
          {" "}
          {/* mt-auto funciona somente em flex containers */}
          <Link
            to={path}
            className="flex w-full items-center justify-center text-nowrap rounded-sm bg-primary-500 p-2 text-xs font-bold uppercase text-primary-foreground-100"
          >
            Saiba mais
          </Link>
          <budget.Modal>
            <budget.Trigger className="w-full text-nowrap rounded-sm bg-primary-900 px-6 py-2 text-xs uppercase text-primary-foreground-100 lg:py-4">
              Orçar agora
            </budget.Trigger>
          </budget.Modal>
        </div>
      </div>
    </div>
  )
}
