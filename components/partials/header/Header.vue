<!-- HEALTH:UNKNOWN header -->
<template>
  <header id="header" class="header">
    <nav
      class="flex justify-between items-center whitespace-no-wrap leading-snug"
    >
      <div class="flex items-center">
        <nuxt-link to="/" class="inline-block mr-8">
          <logo-svg class="h-6 w-8" />
        </nuxt-link>
        <header-links :links="menu.header_links_left" class="hidden lg:flex" />
      </div>
      <div class="flex items-center">
        <header-links :links="menu.header_links_right" class="hidden lg:flex" />
        <a
          href="https://www.waze.com/en-GB/signin"
          class="hidden lg:inline-block button mx-8"
        >
          Log In
        </a>
        <a href="#" class="burger inline-block lg:hidden" />
      </div>
    </nav>
  </header>
</template>

<script>
import HeaderLinks from "~/components/partials/header/HeaderLinks.vue";

import LogoSvg from "~/assets/icons/logo.svg";

export default {
  components: {
    HeaderLinks,
    LogoSvg
  },
  async fetch() {
    this.menu = (await this.$prismic.api.getSingle("menu")).data;
  },
  data() {
    return {
      menu: {
        header_links_left: [],
        header_links_right: []
      }
    };
  }
};
</script>

<style lang="sass" scoped>
.header
  nav
    +fontsize(15)
    margin: 0 20px
    height: 68px

    @screen md
      height: 78px
      margin: 0 25px

    @screen lg
      +fontsize(17)

    @screen xl
      margin: 0 30px

  .button
    padding: 7px 18px
    @apply text-base bg-navy text-white rounded-full h-8 font-bold

    &:hover
      @apply text-cyan

  .burger
    @apply relative h-3 w-6

    &::before, &::after
      content: ""
      height: 2px
      left: 0
      @apply block bg-navy w-full absolute

    &::before
      top: 0

    &::after
      bottom: 0
</style>
