<script setup>
import axios from "../api/axios";
import { onMounted, ref } from "vue";
import targeta from "./targeta.vue";

const information = ref([]);
const openModal_ = ref();
const findUser = async () => {
  const response = await axios.get("/prueba");
  information.value = response.data.data;
};
onMounted(async () => {
  findUser();
  console.log("Component is now mounted.", findUser.value);
});

// async function deleteInfo() {
//   const id = props.information._id;
//   const response = await axios.delete(`/productsModule?_id=${id}`);
//   if (!response.error) information.value.push({ ...newProduct.value });
// }

let item = ref({
  id: "",
  name: "",
  email: "",
});
function SendForm() {
  axios
    .post("/prueba", item.value)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => console.error(error));
}
// const filterUsers = async ()=> {
//   const response = await axios.get('/prueba')

// }
const filterUsers = async () => {
  try {
    const { busqueda } = data.value;
    const response = await axios.get(`/prueba/find?busqueda=${busqueda}`);
    const { data: result } = response;
    data.value.result = { result };
    information.value = result.data;
  } catch (error) {
    console.error(error);
  }
};

let data = ref({
  busqueda: "",
  result: "",
});

let abrirModal = ref(false);
function openModal(info) {
  // info.value = info
  abrirModal.value = info;

  console.log(info);
}
let cerrar = ref(false)

</script>
<template>
  <div id="student__list">
    <p>Registrar estudiante</p>
    <div class="input__list">
      <input v-model="item.id" placeholder="Id" type="text" />
    </div>
    <div class="input__list">
      <input v-model="item.name" id="name" placeholder="Nombre" type="text" />
    </div>
    <div class="input__list">
      <input v-model="item.email" id="email" placeholder="Emai" type="email" />
    </div>
    <div class="input__list">
      <button @click="SendForm(e)">enviar</button>
    </div>
    <div>
      <p>Filtrar Estudiantes</p>
      <input v-model="data.busqueda" type="text" />
      <button @click="filterUsers()">Filtrar</button>
      <div class="student">
        <div
          class="student__result"
          :data.result="item"
          v-for="(item, index) in data.result"
          :key="index"
        >
          {{ item.id }}
          {{ item.name || item.surname }}
          {{ item.email }}
        </div>
      </div>
    </div>
    <div v-if="!abrirModal" class="modal__">
      <button v-if="abrirModal">Cerrar</button>
      <div  v-if="abrirModal" class="modal__ipt"></div>
    </div>
  </div>
  <div class="container__list">
    <targeta
      @onOpenModal="openModal($event)"
      class="list-"
      :information="item"
      v-for="(item, index) in information"
      :key="index"
    >
    </targeta>
  </div>
</template>

<style>
body {
  background-color: rgb(162, 162, 162);
}
.StudentList {
  width: 300px;
  height: 10px;
}
.modal__ {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45%;
  height: 50%;
  position: absolute;
  left: 460px;
  background-color: black;
}
.modal__ipt {
  width: 60%;
  height: 90%;
  background-color: #fff;
}
</style>
