require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    siteName: 'Cards by Emily',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-datocms`,
      options: { apiToken: process.env.DATO_API_TOKEN },
    },
    {
      resolve: 'gatsby-plugin-snipcart',
      options: {
        apiKey: process.env.SNIPCART_API_KEY,
        autopop: true
      }
    },
  ],
}
