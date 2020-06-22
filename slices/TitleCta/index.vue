<!-- HEALTH:UNKNOWN title-cta -->
<template>
  <box class="titleCta flex flex-col justify-center">
    <prismic-rich-text
      :field="slice.primary.brow"
      class="brow heading-h3 mb-4 lg:mb-5"
    />
    <prismic-rich-text
      :field="slice.primary.title"
      class="title heading-h1 leading-none mb-4 lg:mb-6"
    />
    <ul class="flex flex-wrap">
      <li v-for="(cta, index) in slice.items" :key="`${cta.title}-${index}`">
        <prismic-link
          class="inline-block button"
          :field="cta.link"
          :class="cta.style.toLowerCase()"
        >
          {{ cta.title }}
        </prismic-link>
      </li>
    </ul>
    <a
      v-if="slice.slice_label === 'with_scrolldown_arrow'"
      href="#"
      class="scrolldown"
    >
      <arrow-down-svg />
    </a>
  </box>
</template>

<script>
import ArrowDownSvg from "~/assets/icons/arrowDown.svg";

export default {
  components: {
    ArrowDownSvg
  },
  props: {
    slice: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="sass" scoped>
.titleCta
  @screen md
    padding: 0 25px

  @screen lg
    padding-left: 72px
    padding-right: 55px

  ul
    margin: -7.5px

    @screen lg
      margin: -10px

  li
    padding: 7.5px

    @screen lg
      padding: 10px

  .button
    height: 36px
    @apply rounded-full flex items-center text-sm px-5

    @screen lg
      height: 52px
      padding: 0 30px
      @apply text-xl

    &.filled
      @apply bg-navy text-white

    &.outlined
      border-width: 3px
      @apply border-navy

  .scrolldown
    margin-top: 25px
    animation: scrolldown 1s linear 2.5s infinite

    @screen lg
      margin-top: 50px

    svg
      width: 18px
      height: 10px

      @screen lg
        width: 36px
        height: 20px

@keyframes scrolldown
  0%
    transform: translate3d(0, 0, 0)
  25%
    transform: translate3d(0, 5px, 0)
  50%
    transform: translate3d(0, 0, 0)
  75%
    transform: translate3d(0, -5px, 0)
  100%
    transform: translate3d(0, 0, 0)
</style>
