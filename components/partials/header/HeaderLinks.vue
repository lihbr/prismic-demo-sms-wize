<!-- HEALTH:UNKNOWN header-links -->
<template>
  <ul class="headerLinks flex items-center -mx-4">
    <li
      v-for="(link, index) in links"
      :key="`${link.title}-${index}`"
      class="px-4"
    >
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
