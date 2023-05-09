<script setup>
import axios from "../api/axios";
import { onMounted, ref } from "vue";
import sellHeader from "../components/homeComponent/sellHeader.vue";
import cardComponent from "../components/Card/Card.vue";

const information = ref([]);
const getProducts = async () => {};
let newProduct = ref({
  name: "",
  talla: "",
  cod_reference: "",
  price: null,
  category: "",
  pictures: [""],
  count: null,
});
const createProcuct = async () => {
  const response = await axios.post("/productsModule", newProduct.value);
  if (!response.error) information.value.push({ ...newProduct.value });
};
const findProducts = async () => {
  const response = await axios.get("/productsModule");
  information.value = response.data.data;
};

onMounted(async () => {
  findProducts();
  console.log("Component is now mounted.", findProducts.value);
});
</script>

<template>
  <sellHeader></sellHeader>

  <div class="edit__inputs">
    <div class="edit__products">
      <input class="edit__products-input" placeholder="Nombre" type="text" v-model="newProduct['name']" />
      <input class="edit__products-input" placeholder="Talla" type="text" v-model="newProduct['talla']" />
      <input class="edit__products-input"
        placeholder="Referencia"
        type="text"
        v-model="newProduct['cod_reference']"
      />
      <input class="edit__products-input" placeholder="Precio" type="number" v-model="newProduct['price']" />
      <input class="edit__products-input"
        placeholder="Categoria"
        type="text"
        v-model="newProduct['category']"
      />
      <input class="edit__products-input"
        placeholder="Imagenes"
        type="text"
        v-model="newProduct['pictures'][0]"
      /> 
      <input class="edit__products-input"
        placeholder="Cantidad"
        type="number"
        v-model="newProduct['count']"
      />
      <button class="edit__btn-button" add @click="createProcuct()">
        <i class="fa-solid fa-plus"></i>
      </button>
    </div>
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
  </div>
</template>

<style lang="scss">
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
.edit__inputs {
  justify-content: center;
}
.edit__products {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}
.edit__products-input {
    width: 300px;
    height: 30px;
    padding-left: 10px;
    border: 2px solid #000;
    color: #000;
}
.edit__btn-button {
  cursor: pointer;
  margin-bottom: 10px;
  width: 50px;
  height: 50px;
}
.edit__btn-button:hover {
  border: #1b8fcd solid 5px;
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
