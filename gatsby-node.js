const path = require("path")

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@/common": path.resolve(__dirname, "src/common"),
        "@/assets": path.resolve(__dirname, "src/assets"),
        "@/components": path.resolve(__dirname, "src/components"),
        "@/lib/utils": path.resolve(__dirname, "src/lib/utils"),
        "@/templates": path.resolve(__dirname, "src/templates"),
      },
    },
  })
}

/**
 * This function creates all the individual blog pages in this site
 */
exports.createPages = async ({ graphql, actions, reporter }) => {
  await CreateWpPages({ graphql, actions, reporter })
  await CreateArticlePage({ graphql, actions, reporter })
  await CreateProductPages({ graphql, actions, reporter })
}

async function CreateWpPages({ graphql, actions, reporter }) {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allWpPage {
        nodes {
          slug
          title
          content
          template {
            templateName
            ... on WpTemplate_Categoria {
              templateName
              categorias {
                catalogo {
                  node {
                    altText
                    publicUrl
                  }
                }
              }
            }
            ... on WpTemplate_Qualidade {
              templateName
              certificadosNaTelaDeQualidade {
                headerOfCertificate
                headerQualityAndGuarantee
                imageOfCertificate {
                  node {
                    altText
                    publicUrl
                  }
                }
                imageOfQualityAndGuarantee {
                  node {
                    altText
                    publicUrl
                  }
                }
                downloadCertificate {
                  node {
                    altText
                    publicUrl
                  }
                }
              }
            }
            ... on WpTemplate_QuemSomos {
              quemSomosConteudo {
                quemSomosConteudo {
                  description
                  icon {
                    node {
                      publicUrl
                      altText
                    }
                  }
                  title
                }
                segundaColuna {
                  description
                  title
                  icon {
                    node {
                      altText
                      publicUrl
                    }
                  }
                }
                terceiraColuna {
                  title
                  description
                  icon {
                    node {
                      altText
                      publicUrl
                    }
                  }
                }
              }
              templateName
            }
            ... on WpTemplate_Contato {
              templateName
              camposNaTelaDeContatos {
                location {
                  location {
                    longitude
                    latitude
                    zoom
                  }
                  title
                }
              }
            }
          }
          featuredImage {
            node {
              publicUrl
              altText
            }
          }
        }
      }
      allWcProducts {
        nodes {
          name
          slug
          categories {
            name
          }
          short_description
          description
          images {
            name
            alt
            localFile {
              publicURL
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

  const products = result.data.allWcProducts.nodes.map(r => ({
    name: r.name,
    category: r.categories[0]?.name,
    text: r.short_description || r.description || "",
    path: `/product/${r.slug}`,
    image: {
      url: r.images[0]?.localFile?.publicURL || "",
      alt: r.images[0]?.alt || r.images[0]?.name,
    },
  }))

  const pages = result.data.allWpPage.nodes.map(p => {
    let content
    let banner

    if (p.template?.templateName === "Qualidade") {
      content = {
        certificate: {
          header: p.template.certificadosNaTelaDeQualidade?.headerOfCertificate,
          image:
            p.template.certificadosNaTelaDeQualidade?.imageOfCertificate?.node,
        },
        guarantee: {
          header:
            p.template.certificadosNaTelaDeQualidade?.headerQualityAndGuarantee,
          image:
            p.template.certificadosNaTelaDeQualidade?.imageOfQualityAndGuarantee
              ?.node,
        },
        download: {
          file: p.template.certificadosNaTelaDeQualidade?.downloadCertificate
            ?.node?.publicUrl,
        },
      }
    }

    if (p.template?.templateName === "Quem Somos") {
      content = {
        firstColumn: {
          title: p.template.quemSomosConteudo?.quemSomosConteudo.title,
          description:
            p.template.quemSomosConteudo?.quemSomosConteudo.description,
          icon: p.template.quemSomosConteudo?.quemSomosConteudo.icon.node,
        },
        secondColumn: {
          title: p.template.quemSomosConteudo?.segundaColuna.title,
          description: p.template.quemSomosConteudo?.segundaColuna.description,
          icon: p.template.quemSomosConteudo?.segundaColuna.icon.node,
        },
        thirdColumn: {
          title: p.template.quemSomosConteudo?.terceiraColuna.title,
          description: p.template.quemSomosConteudo?.terceiraColuna.description,
          icon: p.template.quemSomosConteudo?.terceiraColuna.icon.node,
        },
      }
    }
    if (p.template?.templateName === "Contato") {
      content = {
        title: p.template.camposNaTelaDeContatos?.location.title,
        location: {
          longitude:
            p.template.camposNaTelaDeContatos?.location?.location?.longitude,
          latitude:
            p.template.camposNaTelaDeContatos?.location?.location?.latitude,
          zoom: p.template.camposNaTelaDeContatos?.location?.location?.zoom,
        },
      }
    }

    if (p.template?.templateName === "Categoria") {
      content = {
        download: p.template?.categorias?.catalogo?.node?.publicUrl,
        products: products.filter(r => r.category === p.title),
      }
    }

    if (p.featuredImage?.node) {
      banner = {
        alt: p.featuredImage.node.altText,
        url: p.featuredImage.node.publicUrl,
      }
    }

    return {
      slug: p.slug,
      title: p.title,
      content: p.content,
      banner,
      template: {
        name: p.template?.templateName,
        content,
      },
      path: `/${p.slug}`,
    }
  })

  pages.forEach(page => {
    createPage({
      path: page.path,
      component: path.resolve("./src/templates/page/index.tsx"),
      context: {
        page: page,
      },
    })
  })
}

async function CreateArticlePage({ graphql, actions, reporter }) {
  const { createPage } = actions

  const article = await graphql(`
    query {
      allWpPost {
        nodes {
          id
          title
          slug
          modified
          content
          featuredImage {
            node {
              publicUrl
            }
          }
        }
      }
    }
  `)

  if (article.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`, article.errors)
    return
  }

  const posts = article.data.allWpPost.nodes.map(p => ({
    banner: p.featuredImage?.node.publicUrl,
    title: p.title,
    modified: p.modified,
    content: p.content,
    path: `/blog/${p.slug}`,
  }))

  const relatedArticles = await graphql(`
    query {
      allWpPost(limit: 3, sort: { modified: DESC }) {
        nodes {
          title
          modified
          slug
          content
          imagemBlogDestaque {
            imagemBlogDestaque {
              node {
                publicUrl
              }
            }
          }
        }
      }
    }
  `)
  if (relatedArticles.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`, relatedArticles)
    return
  }

  const related = relatedArticles.data.allWpPost.nodes.map(r => ({
    title: r.title,
    path: `/blog/${r.slug}`,
    modified: r.modified,
    content: r.content,
    banner: r.imagemBlogDestaque?.imagemBlogDestaque?.node.publicUrl,
  }))

  posts.forEach(row => {
    createPage({
      path: row.path,
      component: path.resolve("./src/templates/article.tsx"),
      context: {
        article: row,
        related: related,
      },
    })
  })
}

async function CreateProductPages({ graphql, actions, reporter }) {
  const { createPage } = actions

  const products = await graphql(`
    query {
      allWcProducts {
        nodes {
          name
          slug
          attributes {
            name
            options
          }
          categories {
            name
          }
          short_description
          description
          images {
            name
            alt
            localFile {
              publicURL
            }
          }
          related_products {
            name
            images {
              alt
              name
              localFile {
                publicURL
              }
            }
            slug
            short_description
          }
        }
      }
    }
  `)
  if (products.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`, products)
    return
  }

  const pages = products.data.allWcProducts.nodes.map(r => ({
    name: r.name,
    category: r.categories[0]?.name,
    short_description: r.short_description,
    description: r.description,
    path: `/product/${r.slug}`,
    product: {
      image: r.images[0]?.localFile?.publicURL || "",
      alt: r.images[0]?.alt || r.images[0]?.name,
    },
    attributes: r.attributes.map(a => ({
      name: a.name,
      options: a.options,
    })),
    related_products: r.related_products.map(p => ({
      name: p.name,
      short_description: p.short_description,
      path: `/product/${p.slug}`,
      product: {
        image: p.images[0]?.localFile?.publicURL || "",
        alt: p.images[0]?.alt || p.images[0]?.name,
      },
    })),
  }))

  pages.forEach(row => {
    createPage({
      path: row.path,
      component: path.resolve("./src/templates/product.tsx"),
      context: {
        content: row,
      },
    })
  })
}
