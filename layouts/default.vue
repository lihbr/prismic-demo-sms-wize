<!-- HEALTH:UNKNOWN __layout__default -->
<template>
  <div class="__layout__default">
    <app-header />
    <main class="main">
      <nuxt />
    </main>
  </div>
</template>

<script>
import objectFitImages from "object-fit-images";

import AppHeader from "~/components/partials/header/Header.vue";

export default {
  components: {
    AppHeader
  },
  computed: {
    detect() {
      return this.$store.state.detect;
    }
  },
  created() {
    this.$store.dispatch("init");
  },
  mounted() {
    /**
     * Default operations
     */
    this.$store.dispatch("detect/detect");
    // Object fit polyfill
    objectFitImages();
    // Force add classes once
    document.documentElement.classList.add(...this.getHtmlClass());
    /**
     * End of default operations
     */
  },
  methods: {
    getHtmlClass() {
      const htmlClass = [];

      this.detect.browser && htmlClass.push(this.detect.browser);
      this.detect.isMobile && htmlClass.push("isMobile");
      this.detect.isTouch && htmlClass.push("isTouch");

      return htmlClass;
    }
  },
  head() {
    return {
      htmlAttrs: {
        class: this.getHtmlClass().join(" ")
      }
    };
  }
};
</script>

<style lang="sass">
html
  font-size: 16px // don't change this!
  word-spacing: 1px
  -ms-text-size-adjust: 100%
  -webkit-text-size-adjust: 100%
  -moz-osx-font-smoothing: grayscale
  -webkit-font-smoothing: antialiased
  box-sizing: border-box
  @apply font-main font-medium text-navy bg-cream
</style>
