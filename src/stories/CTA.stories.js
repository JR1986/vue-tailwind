import CtaImageSide from "../components/cta/CtaImageSide.vue";
import CtaCenter from "../components/cta/CtaCenter.vue";

export default {
  title: "Example/CTA",
};

export const ImageSide = (args, { argTypes }) => ({
  title: "Example/CTA",
  components: { CtaImageSide },
  props: Object.keys(argTypes),
  template: '<cta-image-side v-bind="$props"></cta-image-side>',
});

export const ImageCenter = (args, { argTypes }) => ({
  title: "Example/CTA",
  components: { CtaCenter },
  props: Object.keys(argTypes),
  template: '<cta-center v-bind="$props"></cta-center>',
});
