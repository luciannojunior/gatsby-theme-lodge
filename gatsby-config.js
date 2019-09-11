module.exports = ({
  basePath = '/',
  contentPath = 'data',
  siteMetadata = {},
}) => ({
  siteMetadata: {
    title: 'Loja Maçônica "Acácia da Borborema" nº 41',
    titleTemplate: 'Loja Maçônica "Acácia da Borborema" nº 41 | %s',
    description:
      'Loja Maçônica da cidade de Campina Grande - PB. Filiada à Grande Loja Maçônica do Estado da Paraíba',
    url: 'https://www.acaciadaborborema.org.br',
    image: '/images/snape.jpg',
    ...siteMetadata,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve(`./src/layouts/index.js`),
      },
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: contentPath,
      },
    },
    'gatsby-transformer-json',
    '@luciannojunior/gatsby-transformer-pages-json',
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Barlow`,
            variants: [`200`],
          },
          {
            family: `Montserrat`,
            variants: [`300`],
          },
        ],
      },
    },
  ],
})
