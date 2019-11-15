module.exports = {
  siteMetadata: {
    title: `Bismuth Web Wallet`,
    description: `A web wallet for Bismuth`,
    author: `@bismuth`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `bismuth-web-wallet`,
        short_name: `Wallet`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        importWorkboxFrom: `local`,
        globDirectory: "public",
        globPatterns: ["*/**"],
        cacheId: `gatsby-plugin-offline`,
        skipWaiting: true,
        clientsClaim: true,
        directoryIndex: "index.html",
      },
    },
  ],
}
