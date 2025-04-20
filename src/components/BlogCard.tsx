import React from "react"
import { DateFormat } from "@/common/DateFormat"
import { HtmlFormat } from "@/common/HtmlString"
import { Link } from "gatsby"
interface BlogCardProps extends React.ComponentProps<"div"> {
  data: {
    banner: string
    title: string
    modified: string
    content: string
    path: string
  }
}

export const BlogCard = ({ data, ...props }: BlogCardProps) => {
  return (
    <div
      {...props}
      className="flex h-full w-fit flex-col rounded-sm bg-white p-4"
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
        className="mt-auto h-fit w-fit rounded-sm bg-primary-500 px-4 py-2 text-sm font-bold text-primary-foreground-100 md:px-2 md:py-1 md:text-xs"
        to={data.path}
      >
        Veja mais
      </Link>
    </div>
  )
}
