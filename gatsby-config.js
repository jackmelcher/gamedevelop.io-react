module.exports = {
  siteMetadata: {
    title: `Game Dev Nexus`,
    description: `Everything You Need for Game Development.`,
    author: `@Jack_Melcher`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Game Dev Nexus`,
        short_name: `GD Nexus`,
        description: `The Game Development Resource Database`,
        lang: `en`,
        start_url: `/`,
        background_color: `#32323b`,
        theme_color: `#008fee`,
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST,
        useNameForId: false,
      },
    },
    {
      resolve: `gatsby-plugin-compile-es6-packages`,
      options: {
        modules: [`react-table`]
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
