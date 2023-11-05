<template>
  <div>
    <h2>Episodes</h2>
    <ul>
      <li
        v-for="edge in $static.episodes.edges"
        :key="edge.node.id"
      >
        <div>
          {{ edge.node.id }}
          <br>
          {{ edge.node.title }}
          <br>
          <div v-html="edge.node.description"></div>
          <br>
          {{ edge.node.subtitle }}
          <br>
          {{ edge.node.enclosure }}
          <br>
          {{ edge.node.acastLink }}
          <br>
          {{ edge.node.episodeSlug }}
          <hr>
        </div>
      </li>
    </ul>
  </div>  
</template>

<script>
import axios from 'axios'
import { XMLParser} from 'fast-xml-parser'

export default {
  name: 'EpisodesFeed',
}
</script>

<static-query>
  query {
    episodes: allEpisodes(sortBy: "pubDate", order: DESC) {
      edges {
        node {
          id
          title
          description
          subtitle
          enclosure
          acastLink
          episodeSlug
        }
      }
    }
  }
  </static-query>

<style>

</style>