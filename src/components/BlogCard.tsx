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
        "flex h-full w-fit flex-col rounded-sm bg-white p-1",
        className,
      )}
    >
      <img src={data.banner} alt={data.title} className="h-48 w-[367px]" />
      <h5 className="mt-4 text-wrap text-lg font-bold text-primary-foreground-500">
        {data.title}
      </h5>
      <span className="mb-2 text-xs text-primary-foreground-300">
        {DateFormat.isoDateToReadable(data.modified)}
      </span>
      <div className="mb-2 w-fit text-sm text-primary-foreground-400">
        {HtmlFormat.getFirstParagraph(data.content)}
      </div>
      <Link
        className="mt-auto h-fit w-fit rounded-sm bg-primary-500 px-4 py-2 text-sm font-bold text-primary-foreground-100 md:px-2 md:py-1 md:text-sm"
        to={data.path}
      >
        Veja mais
      </Link>
    </div>
  )
}
