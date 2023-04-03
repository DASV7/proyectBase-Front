<script setup>
import axios from "../api/axios";
import { ref } from "vue";

const sendDataToback = async (event) => {
  event.preventDefault();
  const form = document.getElementById("information");
  const formInfo = new FormData(form);
  const datos = {};
  for (let [clave, valor] of formInfo.entries()) {
    datos[clave] = valor;
  }

  const data = await axios.post("/usersmodule", datos || {});
};
</script>

<template>
  <div class="homeComponent">
    <form id="information">
      <input type="text" name="surname" />
      <input type="text" name="email" />
      <input type="text" name="password" />
      <input type="submit" @click="sendDataToback($event)" />
    </form>
  </div>
</template>

<style></style>
