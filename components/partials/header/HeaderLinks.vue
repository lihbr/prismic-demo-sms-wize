<!-- HEALTH:UNKNOWN header-links -->
<template>
  <ul class="headerLinks flex items-center">
    <li v-for="(link, index) in links" :key="`${link.title}-${index}`">
      <prismic-link :field="link.link" class="inline-block hover:text-cyan">
        {{ link.title }}
      </prismic-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="sass" scoped>
.headerLinks
  margin: 0 -17.5px

  li
    padding: 0 17.5px
</style>
