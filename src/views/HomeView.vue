<script>
import MainCard from "../components/MainCard.vue";
import MainAnchor from "../components/MainAnchor.vue";
import MainButton from "../components/MainButton.vue";

export default {
  components: {
    MainCard,
    MainAnchor,
    MainButton,
  },
  data() {
    return {
      url: "https://google.com",
      anchorTitle: "testing",
      testData: "",
      isLoading: false,
    };
  },
  methods: {
    async fetchCrypto() {
      this.isLoading = true;
      const res = await fetch(
        "https://api.coindesk.com/v1/bpi/currentprice.json"
      );
      const data = await res.json();

      if (data) {
        this.testData = data;
        this.isLoading = false;
      }
    },
  },
};
</script>

<template>
  <main>
    <main-card>
      <template v-slot:card-header>
        <h1 class="text-3xl font-bold underline">Hello world!</h1>
      </template>
      <template v-slot:card-content>
        <p>Dit is de Card content</p>
      </template>
      <template v-slot:card-footer>
        <p class="text-center">Dit is de Card footer</p>
      </template>
    </main-card>
    <main-anchor :url="url" :anchor-title="anchorTitle"></main-anchor>
    <main-button
      @fetch-data="fetchCrypto"
      button-title="Click to fetch data"
    ></main-button>
    <p v-if="isLoading">Loading</p>
    <h1 v-if="testData">{{ testData.chartName }}</h1>
    <p>{{ testData.disclaimer }}</p>
    <h5 v-if="testData">{{ testData.bpi.EUR.rate }}</h5>
  </main>
</template>
