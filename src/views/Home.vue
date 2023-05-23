<script setup>
import axios from "../api/axios";
import { onMounted, ref } from "vue";
import sellHeader from "../components/homeComponent/sellHeader.vue";
import cardComponent from "../components/Card/Card.vue";

const information = ref([]);
const getProducts = async () => {};
const findProducts = async () => {
  const response = await axios.get("/productsModule");
  information.value = response.data.data;
};
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
  if (!editando.value) {
    const response = await axios.post("/productsModule", newProduct.value);
    if (!response.error) information.value.push({ ...newProduct.value });
    return;
  }
  const response = await axios.post("/productsModule/edit", newProduct.value);
};

let editando = ref(false);

const editarMetodo = async (info) => {
  console.log(info);
  newProduct.value.name = info.name;
  newProduct.value.talla = info.talla;
  newProduct.value.cod_reference = info.cod_reference;
  newProduct.value.price = info.price;
  newProduct.value.category = info.category;
  newProduct.value.pictures = info.pictures;
  newProduct.value._id = info._id;
  newProduct.value.count = info.count;

  editando.value = true;
};
function closeModal() {
  editando.value = false;
}
onMounted(async () => {
  findProducts();
  console.log("Component is now mounted.", findProducts.value);
});
</script>

<template>
  <sellHeader v-if="!editando"></sellHeader>
  <div v-if="editando" class="container__crud">
    <div class="edit__products">
      <div class="cont__input">
        <div class="container__close">
          <button class="btn__close" @click="closeModal()">X</button>
        </div>
        <div class="cont__input">
          <p class="cont__info">Nombre</p>
          <input
            class="edit__products-input"
            placeholder="Nombre"
            type="text"
            v-model="newProduct['name']"
          />
        </div>
      </div>
      <div class="cont__input">
        <p class="cont__info">talla</p>
        <input
          class="edit__products-input"
          placeholder="Talla"
          type="text"
          v-model="newProduct['talla']"
        />
      </div>
      <div class="cont__input">
        <p class="cont__info">Codigo de Referencia</p>
        <input
          class="edit__products-input"
          placeholder="Referencia"
          type="text"
          v-model="newProduct['cod_reference']"
        />
      </div>
      <div class="cont__input">
        <p class="cont__info">Precio</p>
        <input
          class="edit__products-input"
          placeholder="Precio"
          type="number"
          v-model="newProduct['price']"
        />
      </div>
      <div class="cont__input">
        <p class="cont__info">Categoria</p>
        <input
          class="edit__products-input"
          placeholder="Categoria"
          type="text"
          v-model="newProduct['category']"
        />
      </div>
      <div class="cont__input">
        <p class="cont__info">Imagen Presentación</p>
        <input
          class="edit__products-input"
          placeholder="Imagenes"
          type="text"
          v-model="newProduct['pictures'][0]"
        />
      </div>
      <div class="cont__input">
        <p class="cont__info">Cantidad</p>
        <input
          class="edit__products-input"
          placeholder="Cantidad"
          type="number"
          v-model="newProduct['count']"
        />
      </div>

      <button class="edit__btn-button" @click="createProcuct()">
        Confirmar
      </button>
    </div>
  </div>
  <div class="edit__inputs">
    <div class="products">
      <div class="productos__cards">
        <cardComponent
          @onEdit="editarMetodo($event)"
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
  background-color: #fff;
  width: 360px;
  gap: 5px;
  border-radius: 10px;
}
.edit__products-input {
  width: 300px;
  height: 30px;
  padding-left: 10px;
  border: 2px solid #000;
  border-radius: 10px;
  color: #000;
}
.edit__btn-button {
  cursor: pointer;
  margin-bottom: 10px;
  width: 100px;
  height: 30px;
  border-radius: 15px;
  background-color: #1b8fcd;
  color: #fff;
  border: none;
}
.edit__btn-button:hover {
  outline: #1b8fcd solid 3px;
}
.container__crud {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  // top: 50px;
  width: 100%;
  height: 100%;
  background-color: #000000b0;
  overflow-x: hidden;
  overflow-y: hidden;
  z-index: 11;
}
.btn__close {
  width: 40px;
  height: 20px;
  background-color: rgb(209, 77, 77);
  cursor: pointer;
  position: relative;
  right: 70px;
}
.cont__info {
  color: #000;
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
