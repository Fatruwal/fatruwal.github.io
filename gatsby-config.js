/**
 * 👋 Hey there!
 * This file is the starting point for your new WordPress/Gatsby site! 🚀
 * For more information about what this file is and does, see
 * https://www.gatsbyjs.com/docs/gatsby-config/
 *
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Fatruwal - Fabricando Soluções`,
    description: `Soluções em borracha para indústria e serviços de fabricação de equipamentos.`,
    siteUrl: `https://www.fatruwal.com.br`, // Required for sitemap
    author: `@fatruwal`,
  },
  /**
   * Adding plugins to this array adds them to your Gatsby site.
   *
   * Gatsby has a rich ecosystem of plugins.
   * If you need any more you can search here: https://www.gatsbyjs.com/plugins/
   */
  plugins: [
    // {
    //   resolve: `gatsby-plugin-alias-imports`,
    //   options: {
    //     alias: {},
    //     extensions: [],
    //   },
    // },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Roboto`,
            file: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap",
          },
        ],
      },
    },
    {
      /**
       * First up is the WordPress source plugin that connects Gatsby
       * to your WordPress site.
       *
       * visit the plugin docs to learn more
       * https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-wordpress/README.md
       *
       */
      resolve: `gatsby-source-wordpress`,
      options: {
        // the only required plugin option for WordPress is the GraphQL url.
        url: process.env.WPGRAPHQL_URL,
        type: {
          Product: {
            limit: 1000,
          },
        },
        develop: {
          hardCacheMediaFiles: true,
        },
      },
    },
    {
      resolve: "@pasdo501/gatsby-source-woocommerce",
      options: {
        api: process.env.WOOCOMMERCE_URL || "fatruwal.5minds.com.br",
        https: true,
        api_keys: {
          consumer_key: process.env.CONSUMER_KEY,
          consumer_secret: process.env.CONSUMER_SECRET,
        },
        api_version: "wc/v3",
        wpAPIPrefix: "wp-json",
        fields: ["products", "products/categories", "products/attributes"],

        queryStringAuth: true,
        verboseOutput: true,

        perPage: 100,
        requestConcurrency: 5,
      },
    },

    /**
     * We need this plugin so that it adds the "File.publicURL" to our site
     * It will allow us to access static url's for assets like PDF's
     *
     * See https://www.gatsbyjs.org/packages/gatsby-source-filesystem/ for more info
     */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },

    /**
     * The following two plugins are required if you want to use Gatsby image
     * See https://www.gatsbyjs.com/docs/gatsby-image/#setting-up-gatsby-image
     * if you're curious about it.
     */
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    {
      // See https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/?=gatsby-plugin-manifest
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Fatruwal - Soluções em borracha`,
        short_name: `Fatruwal`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/favicon.png`,
      },
    },

    // See https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet/?=gatsby-plugin-react-helmet
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.fatruwal.com.br",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },

    /**
     * this (optional) plugin enables Progressive Web App + Offline functionality
     * To learn more, visit: https://gatsby.dev/offline
     */
    // `gatsby-plugin-offline`,
    //
    "gatsby-plugin-postcss",
  ],
}
