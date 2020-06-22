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
    console.log(data.body[2]);

    return { data };
  },
  mounted() {
    this.$store.dispatch("pageChanged");
  },
  head() {
    const { meta_title, meta_description, social_cards } = this.data;
    return this.$buildHead({
      title: meta_title || "Home",
      description: meta_description,
      metaImage: {
        og: social_cards.length
          ? social_cards[0].social_card_image.url
          : undefined,
        tw: social_cards.length
          ? social_cards[0].social_card_image.url
          : undefined
      },
      path: this.$route.path
    });
  }
};
</script>

<style lang="sass" scoped>
// .__page__home
</style>
