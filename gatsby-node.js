/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            fallback: {
                stream: require.resolve("stream-browserify")
            }
        }
    })
}

// Need to make the create pages for guide sections and guides
const path = require(`path`)
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const response = await graphql(`
      query MyQuery{
        guides: allContentfulGuide {
          edges {
            node {
              linkslug
            }
          }
        }
        resources: allContentfulResourceSections {
            edges {
                node {
                  linkslug
                }
            }
          }
      }
    `)
    response.data.guides.edges.forEach(edge => {
      createPage({
        path: `/guides/${edge.node.linkslug}`,
        component: path.resolve(`src/templates/tguide.jsx`),
        context: {
            linkslug: edge.node.linkslug,
        },
      })
    })
    response.data.resources.edges.forEach(edge => {
        createPage({
            path: `/resources/${edge.node.linkslug}`,
            component: path.resolve(`src/templates/tresource.jsx`),
            context: {
                linkslug: edge.node.linkslug,
            },
        })
    })
  }
