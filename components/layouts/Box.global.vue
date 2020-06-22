<!-- HEALTH:UNKNOWN layout-block -->
<template>
  <div class="layoutBlock">
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
.layoutBlock
  border-radius: 10px
  margin-bottom: 30px

  @screen md
    min-height: 100%
    width: calc((100% - 25px) / 2)

  @screen lg
    min-height: auto
    max-height: 650px
    width: calc((100% - 30px) / 2)

  @screen xl
    height: 42.5vw
</style>
