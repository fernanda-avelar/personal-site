module.exports = {
  siteMetadata: {
    title: `Fernanda Avelar Gonçalves`,
    description: `Frontend Engineer + UI designer`,
    author: `@ferdiavelar`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          precision: 6,
        },
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -70
      }
    }
  ],
}
