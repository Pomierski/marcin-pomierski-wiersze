const apiUrl = require('./apiUrl.json');

module.exports = {
  siteMetadata: {
    title: `Marcin Pomierski - wiersze`,
    description: `Strona poświęcona wierszom Marcina Pomierskieggo`,
    author: `@Pomierski`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-layout`,
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Inria Serif', 'Lato']
        }
      }
    },
    {
      resolve: "gatsby-source-graphql",
          options: {
          typeName: "GCMS",
          fieldName: "gcms",
          url: apiUrl
      },
    },
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `marcin-pomierski-wiersze`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#0f4c5c`,
        theme_color: `#0f4c5c`,
        display: `minimal-ui`,
        icon: `src/assets/icons/favicon.png`
      },
    },
  ],
}
