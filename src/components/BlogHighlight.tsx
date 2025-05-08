import React from "react"
import { BlogCard } from "./BlogCard"
import { cn } from "@/lib/utils"
import GradientBar from "./GradientBar"

const Container = ({ children }: React.PropsWithChildren) => {
  return (
    <section className="flex flex-col items-center justify-center gap-2 bg-primary-700 py-10">
      <h3 className="my-2 text-center font-bold text-primary-foreground-100">
        Blog fatruwal
      </h3>
      <GradientBar className="mb-4" />
      {children}
    </section>
  )
}
interface BlogCardListProps extends React.ComponentProps<"ul"> {
  data: BlogCard[]
}

const List = ({ data, className, ...props }: BlogCardListProps) => {
  return (
    <ul
      {...props}
      className={cn(
        "grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 xl:grid-cols-3",
        className,
      )}
    >
      {data.map(p => (
        <li
          className="flex w-fit flex-col rounded-sm bg-white p-4"
          key={p.title}
        >
          <BlogCard data={p} />
        </li>
      ))}
    </ul>
  )
}

export const BlogHighlight = {
  Container,
  List,
}
