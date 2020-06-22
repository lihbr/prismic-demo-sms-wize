<!-- HEALTH:UNKNOWN single-image -->
<template>
  <box class="singleImage overflow-hidden">
    <prismic-image
      :field="slice.primary.image"
      class="w-full h-full object-cover"
    />
  </box>
</template>

<script>
export default {
  props: {
    slice: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="sass" scoped></style>
