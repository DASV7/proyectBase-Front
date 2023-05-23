<script setup>
import { onMounted, ref } from "vue";
const abrirModal__ = ref(true);
const props = defineProps(["information"]);


</script>
<template>
  <div class="list-">
    <div>
      {{ props.information.id }}
      {{ props.information.name }}
      {{ props.information.email }}
    </div>
    <div class="container-btn-">
      <button class="btn-info" @click="$emit('onOpenModal', abrirModal__)">
        <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
      </button>
      <!-- <div class="modal-">HOLA</div> -->
    </div>
  </div>
</template>

<style>
.list- {
  display: flex;
  justify-content: space-between;
  width: 100%;  
  height: 20px;
  background-color: rgb(255, 255, 255);
  color: #000000;
}
.container__list {
  display: flex;
  flex-direction: column;
  width: 28%;
  gap: 5px;
  padding: 5px;
}
.btn-info {
  background-color: #ffffff;
  color: #007bff;
  border: none;
  cursor: pointer;
}
.modal- {
  width: 700px;
  height: 500px;
  position: absolute;
  background-color: #000000;
}
</style>
