<template>
  <a
    class="block overflow-hidden border border-gray-100 rounded-lg shadow-sm"
    href=""
  >
    <img
      class="object-cover w-full h-56"
      src="https://www.hyperui.dev/photos/team-1.jpeg"
      alt=""
    />

    <div class="p-6">
      <h5 class="text-xl font-bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h5>

      <p class="mt-2 text-sm text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <div
        class="inline-block pb-1 mt-4 font-medium text-blue-600 border-b border-blue-500"
      >
        Find out more
        <span aria-hidden="true">&rarr;</span>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    cardHeader: String,
  },
};
</script>
