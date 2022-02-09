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
const {readString} = require("react-papaparse");
const axios = require("axios");
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
                  popularSheet {
                      csvlink
                      optionvalue
                    }
                  resourceSubsections {
                      resourceSheets {
                        csvlink
                        optionvalue
                      }
                    }
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
        let resourceMap1 = new Map();
        if(edge.node.popularSheet != null) {
            resourceMap1.set(edge.node.popularSheet.optionvalue, edge.node.popularSheet.csvlink);
        }
        edge.node.resourceSubsections.map(resourceSubsection => {
            resourceSubsection.resourceSheets.map(resourceSheet => {
                resourceMap1.set(resourceSheet.optionvalue, resourceSheet.csvlink);
            });
        });
        //console.log(resourceMap1);
        createPage({
            path: `/resources/${edge.node.linkslug}`,
            component: path.resolve(`src/templates/tresource.jsx`),
            context: {
                linkslug: edge.node.linkslug,
                resourceMap: Object.fromEntries(resourceMap1),
            },
        })
    })
  }
