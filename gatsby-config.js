/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `ash-and-the-invisibles`,
    siteUrl: `https://ash-invisibles.netlify.app`
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/'
      },
      __key: 'images'
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`playfair+display\:400`, `Courier+Prime\:400`],
        display: 'swap'
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Ash And The Invisibles',
        short_name: 'Ash &',
        background_color: '#3a3a3a',
        theme_color: '#1e1e1e',
        display: 'standalone',
        icon: 'src/images/logo.jpg'
      }
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`]
      }
    }
  ]
}
