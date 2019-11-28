const path = require('path')
const fs = require('fs')

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query PagesQuery {
      allPage {
        nodes {
          name
          title
          homepage
          component
          path
          props
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic('No can do!')
  }

  const { nodes: pages } = result.data.allPage

  const getComponentImplementation = name => {
    const COMPONENTS_PATH = './src/components/'
    const ENDINGS = ['.js', '.jsx', '/index.js', '/index.jsx']
    for (const ending of ENDINGS) {
      const filePath = COMPONENTS_PATH + name + ending
      if (fs.existsSync(filePath)) return path.resolve(filePath)
      try {
        return require.resolve(COMPONENTS_PATH + name + ending)
      } catch (e) {
        continue
      }
    }
    throw new Error(`couldn't find ${name}'s implementation`)
  }

  pages.forEach(({ path, component, title, props = '{}' }) => {
    const componentProps = JSON.parse(props)
    actions.createPage({
      path,
      component: getComponentImplementation(component),
      context: {
        title,
        componentProps,
      },
    })
  })
}
