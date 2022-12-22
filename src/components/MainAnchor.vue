<template>
  <a :href="url">{{ anchorTitle }}</a>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
    anchorTitle: {
      type: String,
      required: true,
    },
  },
};
</script>
