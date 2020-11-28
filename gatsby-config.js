module.exports = {
  siteMetadata: {
    siteTitle: `The Elements of Style`,
    defaultTitle: `The Elements of Style`,
    siteTitleShort: `The Elements of Style`,
    siteDescription: `The Elements of Style is an American English writing style guide in numerous editions. This is the best Web edition of this instant classic.`,
    siteUrl: `https://elementsofstyle.surge.sh`,
    siteAuthor: `Luke Gwarda`,
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#8257E6`,
    basePath: `/`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        githubUrl: `https://github.com/lgwarda/the-elements-of-style`,
        baseDir: ``,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Elements of Style`,
        short_name: `The Elemnts of Style`,
        start_url: `/`,
        background_color: `#fff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: ``,
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://elementsofstyle.surge.sh`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
