<!-- HEALTH:UNKNOWN __page__home -->
<template>
  <div class="__page__home">
    <div class="content">
      <container>
        <slice-zone
          :slices="data.body"
          class="flex flex-wrap justify-between"
        />
      </container>
    </div>
  </div>
</template>

<script>
import SliceZone from "vue-slicezone";

export default {
  components: {
    SliceZone
  },
  async asyncData(context) {
    const data = (await context.$prismic.api.getByUID("page", "home")).data;

    return { data };
  },
  mounted() {
    this.$store.dispatch("pageChanged");
  },
  head() {
    const { meta_title, meta_description, meta_image } = this.data;
    return this.$buildHead({
      title: meta_title || "💐",
      description: meta_description,
      metaImage: {
        og: meta_image.url,
        tw: meta_image.twitter_variant.url
      },
      path: this.$route.path
    });
  }
};
</script>

<style lang="sass" scoped>
// .__page__home
</style>
