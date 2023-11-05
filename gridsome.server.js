// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require('axios')
const { XMLParser} = require('fast-xml-parser')

module.exports = function (api) {
  api.loadSource(async (actions) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    // Episodes
    actions.addSchemaTypes(`
      type Episode implements Node {
        id: ID!
        title: String
        description: String
        subtitle: String
        pubDate: String
        enclosure: String
        acastLink: String
        episodeSlug: String
      }
    `)

    const {
      data: {
        contents
      }
    } = await axios.get(`https://api.allorigins.win/get?url=${encodeURIComponent('https://feeds.acast.com/public/shows/653f96f604ed950012cde83d')}`)

    const parser = new XMLParser({
      attributeNamePrefix: '@_',
      ignoreAttributes: false,
    })
    
    const feedObject = parser.parse(contents)
    
    const episodes = feedObject.rss.channel.item

    const collection = actions.addCollection({
      typeName: 'Episodes'
    })

    for (const ep of episodes) {
      collection.addNode({
        id: ep['acast:episodeId'],
        title: ep.title,
        description: ep.description,
        subtitle: ep['itunes:subtitle'],
        pubDate: ep.pubDate,
        enclosure: ep.enclosure['@_url'],
        acastLink: ep.link,
        episodeSlug: ep['acast:episodeUrl'],
      })
    }
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
