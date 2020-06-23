import TitleImage from "./index.vue";
import mock from "./mock.json";

export default {
  title: "TitleImage"
};

export const __DefaultSlice = () => ({
  components: { TitleImage },
  data() {
    return {
      mock
    };
  },
  // eslint-disable-next-line
  template: "<TitleImage :slice=\"mock\" />"
});
