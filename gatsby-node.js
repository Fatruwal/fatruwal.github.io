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
        "@/hooks": path.resolve(__dirname, "src/hooks"),
        "@/services": path.resolve(__dirname, "src/services"),
      },
    },
  })
}

/**
 * This function creates all the individual blog pages in this site
 */
exports.createPages = async ({ graphql, actions, reporter }) => {
  const headerMenu = await getHeaderMenu({ graphql, actions, reporter })
  const footerMenu = await getFooterMenu({ graphql, actions, reporter })
  await createWpPages({ graphql, actions, reporter }, headerMenu, footerMenu)
  await createArticlePage(
    { graphql, actions, reporter },
    headerMenu,
    footerMenu,
  )
  await createProductPages(
    { graphql, actions, reporter },
    headerMenu,
    footerMenu,
  )
  await createHomePage({ graphql, actions, reporter }, headerMenu, footerMenu)
}

async function getHeaderMenu({ graphql, actions, reporter }) {
  const { data, errors } = await graphql(`
    query {
      allWpMenuItem(
        filter: {
          menu: { node: { name: { eq: "header-menu" } } }
          parentId: { eq: null }
        }
        sort: { order: ASC }
      ) {
        nodes {
          label
          path
          childItems {
            nodes {
              label
              path
            }
          }
        }
      }
    }
  `)
  if (errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`, errors)
    return
  }
  const menuItems = data.allWpMenuItem.nodes.map(item => ({
    path: item.path || "/",
    title: item.label,
    childrens:
      item.childItems.nodes.length > 0
        ? item.childItems.nodes.map(child => ({
            path: child.path || "/",
            title: child.label,
          }))
        : undefined,
  }))
  return menuItems
}

async function getFooterMenu({ graphql, actions, reporter }) {
  const { data, errors } = await graphql(`
    query {
      allWpMenuItem(
        filter: {
          menu: { node: { name: { eq: "footer-menu" } } }
          parentId: { eq: null }
        }
        sort: { order: ASC }
      ) {
        nodes {
          label
          path
        }
      }
    }
  `)
  if (errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`, errors)
    return
  }

  const menuItems = data.allWpMenuItem.nodes.map(item => ({
    path: item.path || "/",
    title: item.label,
  }))
  return menuItems
}

async function createWpPages(
  { graphql, actions, reporter },
  headerMenu,
  footerMenu,
) {
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
              taxonomyTerm {
                linkParaOCatalogo
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
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`, result.errors)
    return
  }

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
        download: p.template?.taxonomyTerm?.linkParaOCatalogo,
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
        headerMenu,
        footerMenu,
        page: page,
      },
    })
  })
}

async function createArticlePage(
  { graphql, actions, reporter },
  headerMenu,
  footerMenu,
) {
  const { createPage } = actions

  const results = await graphql(`
    query {
      allWpPage(filter: { template: { templateName: { eq: "Blog" } } }) {
        nodes {
          slug
          title
          content
        }
      }
      allWpPost(sort: { modified: DESC }) {
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

  if (results.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`, results.errors)
    return
  }

  const blogPages = results.data.allWpPage.nodes.map(p => ({
    slug: p.slug,
    title: p.title,
    content: p.content,
    path: `/${p.slug}`,
  }))

  const posts = results.data.allWpPost.nodes.map(p => ({
    banner: p.featuredImage?.node.publicUrl,
    title: p.title,
    modified: p.modified,
    content: p.content,
    path: `/blog/${p.slug}`,
  }))

  const related = results.data.allWpPost.nodes.splice(0, 5).map(r => ({
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
        headerMenu,
        footerMenu,
        article: row,
        related: related,
      },
    })
  })
  blogPages.forEach(row => {
    createPage({
      path: row.path,
      component: path.resolve("./src/templates/blog.tsx"),
      context: {
        headerMenu,
        footerMenu,
        page: row,
        articles: posts,
      },
    })
  })
}

async function createProductPages(
  { graphql, actions, reporter },
  headerMenu,
  footerMenu,
) {
  const { createPage } = actions

  const results = await graphql(`
    query {
      wpGraphql {
        categoriasProduto {
          nodes {
            id
            name
            slug
            description
            categorias {
              catalogo {
                node {
                  title
                  link
                }
              }
              imagemBannerDaCategoria {
                node {
                  title
                  link
                }
              }
            }
            produtos {
              nodes {
                content(format: RENDERED)
                slug
                title
                excerpt
                featuredImage {
                  node {
                    title
                    sourceUrl
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  if (results.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`, results.errors)
    return
  }

  const categories = results.data.wpGraphql.categoriasProduto.nodes.map(r => ({
    title: r.name,
    slug: r.slug,
    description: r.description,
    banner: {
      url: r.categorias?.imagemBannerDaCategoria?.node?.link || "",
      alt: r.categorias?.imagemBannerDaCategoria?.node?.title || "",
    },
    download: r.categorias?.catalogo?.node?.link,
    products: r.produtos.nodes.map(p => ({
      name: p.title,
      text: p.excerpt || "",
      path: `/product/${p.slug}`,
      image: {
        url: p.featuredImage?.node?.sourceUrl || "",
        alt: p.featuredImage?.node?.title || "",
      },
    })),
    path: `/category/${r.slug}`,
  }))

  categories.forEach(row => {
    createPage({
      path: row.path,
      component: path.resolve("./src/templates/category.tsx"),
      context: {
        headerMenu,
        footerMenu,
        content: row,
      },
    })
  })

  let products = []

  for (
    let index = 0;
    index < results.data.wpGraphql.categoriasProduto.nodes.length;
    index++
  ) {
    const productsCategories =
      results.data.wpGraphql.categoriasProduto.nodes[index]

    const related_products = productsCategories.produtos.nodes.map(r => ({
      name: r.title,
      path: `/product/${r.slug}`,
      short_description: r.excerpt || "",
      product: {
        image: r.featuredImage?.node?.sourceUrl || "",
        alt: r.featuredImage?.node?.title || "",
      },
    }))

    const product = productsCategories.produtos.nodes.map(p => ({
      name: p.title,
      short_description: p.excerpt || "",
      description: p.content,
      download: productsCategories.categorias?.catalogo?.node?.link,
      product: {
        url: p.featuredImage?.node?.sourceUrl || "",
        alt: p.featuredImage?.node?.title || "",
      },
      path: `/product/${p.slug}`,
      related_products,
    }))
    products = [...products, ...product]
  }

  products.forEach(row => {
    createPage({
      path: row.path,
      component: path.resolve("./src/templates/product.tsx"),
      context: {
        headerMenu,
        footerMenu,
        content: row,
      },
    })
  })
}
async function createHomePage(
  { graphql, actions, reporter },
  headerMenu,
  footerMenu,
) {
  const { createPage } = actions

  const result = await graphql(`
    query {
      wpGraphql {
        categoriasProduto {
          nodes {
            categorias {
              imagemDeDestaqueHome {
                node {
                  title
                  sourceUrl
                }
              }
            }
            description
            name
            slug
          }
        }
      }
      allWpPost {
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

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`, result.errors)
    return
  }

  const posts = result.data.allWpPost.nodes.slice(0, 3).map(post => ({
    title: post.title,
    path: `/blog/${post.slug}`,
    modified: post.modified,
    content: post.content,
    banner: post.imagemBlogDestaque?.imagemBlogDestaque?.node.publicUrl,
  }))

  const categories = result.data.wpGraphql.categoriasProduto.nodes
    .slice(0, 20)
    .map(r => ({
      name: r.name,
      short_description: r.description,
      image: r.categorias?.imagemDeDestaqueHome?.node?.sourceUrl || "",
      alt: r.categorias?.imagemDeDestaqueHome?.node?.title || "",
      path: `/category/${r.slug}`,
    }))

  createPage({
    path: "/",
    component: path.resolve("./src/templates/homepage.tsx"),
    context: {
      categories: categories,
      headerMenu,
      footerMenu,
      articles: posts,
    },
  })
}
