<script setup>
import axios from "../api/axios";
import { ref } from "vue";
import sellHeader from "../components/homeComponent/sellHeader.vue";
import cardComponent from "../components/Card/Card.vue";

const information = ref([
  { name: "cardDos" },
  { name: "cardDos" },

  { name: "cardOne" },
  { name: "cardTres" },
  { name: "cardDos" },
  { name: "cardDos" },

  { name: "cardOne" },
  { name: "cardTres" },

  { name: "cardOne" },
  { name: "cardTres" },
  { name: "cardDos" },
  { name: "cardDos" },

  { name: "cardOne" },
  { name: "cardTres" },
  { name: "cardOne" },
  { name: "cardTres" },
]);
</script>

<template>
  <sellHeader></sellHeader>
  <div class="products">
    <div class="productos__cards">
      <cardComponent
        :information="item"
        v-for="(item, index) in information"
        :key="index"
      >
      </cardComponent>
    </div>
  </div>
</template>

<style>
body {
  background-color: #e5e6e8;
}
.products {
  display: flex;
  justify-content: center;
  width: 100%;
}
.productos__cards {
  display: flex;
  justify-content: center;
  width: 58%;
  flex-wrap: wrap;
  gap: 5px;
}
@media (max-width: 800px) {
  .productos__cards {
    width: 100%;
  }
}
@media (max-width: 300px) {
  .card {
    width: 126px;
    height: 215px;
  }
}
</style>
