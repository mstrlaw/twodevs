<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <!-- <g-image alt="Example image" src="~/favicon.png" width="135" /> -->

    <h1>Two Devs Online</h1>

    <p>
      Homepage of the Two Devs Online podcas
    </p>

    <!-- <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p> -->

    <EpisodesFeed />

  </Layout>
</template>

<script>
import EpisodesFeed from '@/components/EpisodesFeed.vue'

export default {
  metaInfo: {
    title: ''
  },
  components: {
    EpisodesFeed,
  } 
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
