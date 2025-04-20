import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import { DateFormat } from "@/common/DateFormat"
import { HtmlFormat } from "@/common/HtmlString"
import { Button } from "./ui/button"

interface GraphqlBlogQuery {
  allWpPost: {
    nodes: Array<{
      title: string
      modified: string
      content: string
      link: string
      imagemBlogDestaque: {
        fieldGroupName: string
        imagemBlogDestaque: {
          node: {
            sourceUrl: string
          }
        }
      }
    }>
  }
}

export const BlogHighligth = () => {
  const data = useStaticQuery<GraphqlBlogQuery>(graphql`
    query CarrouselBlogQuery {
      allWpPost(limit: 3, sort: { modified: DESC }) {
        nodes {
          title
          modified
          link
          content
          imagemBlogDestaque {
            fieldGroupName
            imagemBlogDestaque {
              node {
                sourceUrl
              }
            }
          }
        }
      }
    }
  `)

  const posts = data.allWpPost.nodes.map(post => ({
    title: post.title,
    path: post.link,
    modified: post.modified,
    content: post.content,
    banner: post.imagemBlogDestaque?.imagemBlogDestaque?.node.sourceUrl,
  }))

  return (
    <div className="flex flex-col items-center justify-center gap-2 bg-primary-700 py-10">
      <h3 className="my-2 text-center font-bold text-primary-foreground-100">
        Blog fatruwal
      </h3>
      <span className="h-1 w-40 bg-blue-gradient" />
      <ul className="flex w-10/12 max-w-80 flex-col gap-4 md:max-w-screen-lg md:flex-row">
        {posts.map(p => (
          <li
            className="flex w-fit flex-col rounded-sm bg-white p-4"
            key={p.title}
          >
            <img src={p.banner} alt={p.title} className="h-48 w-[367px]" />
            <h5 className="mt-4 text-wrap text-lg font-bold text-primary-foreground-500">
              {p.title}
            </h5>
            <span className="mb-2 text-xs text-primary-foreground-300">
              {DateFormat.isoDateToReadable(p.modified)}
            </span>
            <div className="mb-2 w-fit text-sm text-primary-foreground-400">
              {HtmlFormat.getFirstParagraph(p.content)}
            </div>
            <Link
              className="mt-auto h-fit w-fit rounded-sm bg-primary-500 px-4 py-2 text-sm font-bold text-primary-foreground-100 md:px-2 md:py-1 md:text-xs"
              to={p.path}
            >
              Veja mais
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
