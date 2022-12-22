import SlimFooter from "../components/footer/SlimFooter.vue";
import LargeFooter from "../components/footer/LargeFooter.vue";
import CenterFooter from "../components/footer/CenterFooter.vue";

export default {
  title: "Example/Footer",
};

export const Slim = (args, { argTypes }) => ({
  title: "Example/Footer",
  components: { SlimFooter },
  props: Object.keys(argTypes),
  template: '<slim-footer v-bind="$props"></slim-footer>',
});

export const Large = (args, { argTypes }) => ({
  title: "Example/Footer",
  components: { LargeFooter },
  props: Object.keys(argTypes),
  template: '<large-footer v-bind="$props"></large-footer>',
});

export const Center = (args, { argTypes }) => ({
  title: "Example/Footer",
  components: { CenterFooter },
  props: Object.keys(argTypes),
  template: '<center-footer v-bind="$props"></center-footer>',
});
