const path = require("path")

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@/common": path.resolve(__dirname, "src/common"),
        "@/assets": path.resolve(__dirname, "src/assets"),
        "@/components": path.resolve(__dirname, "src/components"),
        "@/lib/utils": path.resolve(__dirname, "src/lib/utils"),
      },
    },
  })
}

/**
 * This function creates all the individual blog pages in this site
 */
 exports.createPages = async ({ graphql, actions, reporter }) => {
   const { createPage } = actions

   // Query for WordPress blog posts
   const result = await graphql(`
     query {
       allWpPost {
         nodes {
           id
           title
           slug
           modified
           content
           imagemBlogDestaque {
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

   if (result.errors) {
     reporter.panicOnBuild(`Error while running GraphQL query.`, result.errors)
     return
   }

   const posts = result.data.allWpPost.nodes.map(p => ({
      banner: p.imagemBlogDestaque?.imagemBlogDestaque?.node.sourceUrl,
      title: p.title,
      modified: p.modified,
      content: p.content,
      path: `/blog/${p.slug}`,
   }))

   posts.forEach((row) => {
     createPage({
       path: row.path,
       component: path.resolve("./src/templates/article.tsx"),
       context: {
         data: row,
       },
     })
   })
 }
