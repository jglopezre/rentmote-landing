import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Rentmote`,
    description: `Rentmote app presentation page`,
    siteUrl: `https://rentmote.pages.dev/`,
    image: `/rentmote-logo.png`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-json",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/rentmote-logo.png",
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: [
            'Lexend:300,400,700',
            'Roboto Mono:300,400,700',
            'Barlow Condensed:400,700',
            'Rubik:200',
          ],
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `md-en`,
        path: `./src/data/md/en`,
      },
      __key: "md-en"
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `md-es`,
        path: `./src/data/md/es`,
      },
      __key: "md-es"
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/json`,
      },
    },
  ]
};

export default config;
