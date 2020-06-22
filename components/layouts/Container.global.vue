<!-- HEALTH:UNKNOWN layout-container -->
<template>
  <div class="layoutContainer mx-auto">
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
.layoutContainer
  width: calc(100% - 40px)
  max-width: 1440px

  @screen md
    width: calc(100% - 50px)

  @screen xl
    width: calc(100% - 60px)
</style>
