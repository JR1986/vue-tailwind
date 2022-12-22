<template>
  <button @click="$emit('fetchData')" class="btn">
    <span>{{ buttonTitle }}</span>
  </button>
</template>

<script>
export default {
  emits: ["fetchData"],
  data() {
    return {};
  },
  props: {
    buttonTitle: {
      type: String,
      required: true,
    },
    fetchData: {
      type: Function,
    },
  },
};
</script>

<style lang="scss">
.btn {
  background-color: peru;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;

  span {
    text-decoration: underline;
  }
}
</style>
