import React from "react"
import { Link } from "gatsby"
import { cn } from "@/lib/utils"
import { DateFormat } from "@/common/DateFormat"
import { HtmlFormat } from "@/common/HtmlFormat"

export type BlogCard = {
  banner: string
  title: string
  modified: string
  content: string
  path: string
}

export interface BlogCardProps extends React.ComponentProps<"div"> {
  data: BlogCard
}

export const BlogCard = ({ data, className, ...props }: BlogCardProps) => {
  return (
    <div
      {...props}
      className={cn(
        "flex h-full max-w-80 flex-col rounded-sm bg-white p-4 shadow-sm",
        className,
      )}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={data.banner}
          alt={data.title}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h5 className="mt-3 line-clamp-2 text-lg font-bold uppercase text-primary-foreground-500">
          {data.title}
        </h5>
        <span className="mb-1 text-xs text-primary-foreground-300">
          {DateFormat.isoDateToReadable(data.modified)}
        </span>
        <div className="mb-2 line-clamp-3 text-sm text-primary-foreground-400">
          {HtmlFormat.getFirstParagraph(data.content)}
        </div>
        <Link
          className="mt-auto self-start rounded-sm bg-primary-500 px-4 py-2 text-sm font-bold uppercase text-primary-foreground-100"
          to={data.path}
        >
          Veja mais
        </Link>
      </div>
    </div>
  )
}
