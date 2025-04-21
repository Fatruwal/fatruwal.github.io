import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { BlogCard } from "./BlogCard"

interface GraphqlBlogQuery {
  allWpPost: {
    nodes: Array<{
      title: string
      modified: string
      content: string
      slug: string
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
    query BlogHighlightQuery {
      allWpPost(limit: 3, sort: { modified: DESC }) {
        nodes {
          title
          modified
          slug
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
    path: `/blog/${post.slug}`,
    modified: post.modified,
    content: post.content,
    banner: post.imagemBlogDestaque?.imagemBlogDestaque?.node.sourceUrl,
  }))

  return (
    <div className="flex flex-col items-center justify-center gap-2 bg-primary-700 py-10">
      <h3 className="my-2 text-center font-bold text-primary-foreground-100">
        Blog fatruwal
      </h3>
      <span className="mb-4 h-1 w-40 bg-blue-gradient" />
      <ul className="flex w-10/12 max-w-80 flex-col gap-4 md:max-w-screen-lg md:flex-row">
        {posts.map(p => (
          <li
            className="flex w-fit flex-col rounded-sm bg-white p-4"
            key={p.title}
          >
            <BlogCard data={p} />
          </li>
        ))}
      </ul>
    </div>
  )
}
