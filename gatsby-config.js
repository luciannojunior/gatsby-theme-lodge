module.exports = ({
  basePath = '/',
  contentPath = 'data',
  siteMetadata = {},
  prismic = {},
}) => ({
  siteMetadata: {
    title: 'Início',
    titleTemplate: '%s | Loja Maçônica "Acácia da Borborema" nº 41',
    description:
      'Loja Maçônica da cidade de Campina Grande - PB. Filiada à Grande Loja Maçônica do Estado da Paraíba',
    url: 'https://www.acaciadaborborema.org.br',
    siteUrl: 'https://www.acaciadaborborema.com.br',
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
    '@lucis/gatsby-transformer-pages-json',
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: prismic.repo,
        accessToken: prismic.key,
        linkResolver: ({ node, key, value }) => post => `/${post.uid}`,
      },
    },
    `gatsby-plugin-sitemap`,
  ],
})
