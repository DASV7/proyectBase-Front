<script setup>
import axios from "../api/axios";
import { ref } from "vue";

let showToolTip = ref(false);
let showModal = ref(false);

function openModal(modal) {
  if (modal === 0) showModal.value = true;
  else showModal.value = false;
}

const optionsDrop = [
  { text: "Mi perfil" },
  { text: "configuracion" },
  { text: "cerrar sección" },
];

const infoCompany = [
  { name: "surname", visualName: "Nombre", type: "text" },
  { name: "nameCompany", visualName: "Nombre de la Empresa", type: "text" },
  { name: "number", visualName: "Numero de contacto", type: "number" },
  { name: "email", visualName: "Correo", type: "email" },
  { name: "password", visualName: "Contraseña", type: "password" },
  {
    name: "password confirmation",
    visualName: "Confirmar contraseña",
    type: "password",
  },
];
function displayFlex(leave) {
  if (!leave) showToolTip.value = false;
  else showToolTip.value = true;
}
</script>

<template>
  <header class="header">
    <div class="crear__empresa">
      <button @click="openModal(0)" class="crear__btn">Crear Empresa</button>
    </div>
    <div class="container_dropdown">
      <div
        class="button__dropdown"
        @mouseleave="displayFlex(0)"
        @mouseover="displayFlex(1)"
      >
        <p>Over</p>
        <div class="dropdown" v-if="showToolTip">
          <p
            class="options__dropdown"
            v-for="(item, idx) in optionsDrop"
            :key="idx"
          >
            {{ item.text }}
          </p>
        </div>
      </div>
    </div>
  </header>
  <div class="modal" v-if="showModal">
    <form id="formCreateCompany">
      <div class="container__form">
        <h2 class="tittle__form">Creacion</h2>
      <input
        class="info__company"
        :type="item.type"
        :placeholder="item.visualName"
        :name="item.name"
        v-for="(item, idx) in infoCompany"
        :key="idx"
      />
      <button @click="openModal(1)" class="crear__btn">Crear</button>
    </div>
    </form>
  </div>
</template>

<style>
* {
  font-family: monospace;
  padding: 0%;
  margin: 0%;
}
.header {
  width: 100%;
  height: 50px;
  background-color: #5e5b5b;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.button__dropdown {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3d3c3c;
  width: 100px;
  height: 42px;
  cursor: pointer;
  border: solid 5px #3d3c3c;
  margin-right: 20px;
}
.dropdown {
  display: flex;
  flex-direction: column;
  background-color: rgb(164, 157, 157);
  position: absolute;
  top: 45px;
  height: 200px;
  width: 100px;
  gap: 10px;
}
.options__dropdown {
  color: #000;
  font-family: monospace;
}
.crear__empresa {
  width: 10%;
  height: 100%;
}
.crear__btn {
  width: 120px;
  height: 50px;
  cursor: pointer;
  color: #fff;
  background-color: #a33030;
  border: solid 5px #b974745f;
  margin-left: 10px;
  transition: 0.7s;
}
.crear__btn:hover {
  background-color: #db3737;
  border: solid 5px #a33030;
  transition: 0.7s;
}
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100vw;
  height: 100vh;
  overflow-x: none;
  overflow-y: none;
  background-color: #00000095;
  z-index: 2;
  top: -10px;
}
#formCreateCompany {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.info__company {
  color: #000000;
  width: 60%;
  height: 6%;
  padding-left: 2%;
  outline: none;
  background-color: #ffffff;
  border: solid 5px #7c7c7c;
  font-size: 16px;
  font-weight: 600;
}
.info__company::placeholder {
  color: #555353;
  font-weight: inherit;
}
.container__form {
  display: flex;
  width: 50%;
  height: 50%;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  border: solid 5px #7c7c7c;
  gap: 15px;
  padding: 20px;
  background-color: #000;
}
.tittle__form {
  color: #fff;
}
</style>
