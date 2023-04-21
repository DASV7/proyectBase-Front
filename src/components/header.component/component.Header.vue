<script setup>
import { ref } from "vue";
import { useCounterStore } from "../../store/e-commerce";

const counterStore = useCounterStore();

function changeView() {}
const show = ref(false);

function openCar() {
  show.value = !show.value;
}
</script>
<template>
  <header class="header-">
    <div class="header__logo-">
      <img
        @click="changeView(), $router.push('/home')"
        class="header__logo-img"
        src="src\img\capybara-sitting-sideways-18114724916jpg.webp"
        alt=""
      />
    </div>
    <div class="search">
      <div class="search__input">
        <input
          class="search__input-text"
          type="text"
          placeholder="Filtrar Productos"
        />
      </div>
      <div class="carrito">
        <button @click="openCar(true)" class="carrito__btn">
          Car {{ counterStore.count }}
        </button>
        <div
          class="dropDown slide-top"
          v-if="show"
          @mouseleave="openCar(false)"
        >
          <div class="dropDown__btn">
            <p class="dropDown__btn-txt">CARRITO DE COMPRAS</p>
            <button class="dropDown__btn-vaciar">Vaciar</button>
          </div>
          <div class="dropDown__items"></div>
          <div class="dropDown__items-view">
            <button
              @click="changeView(), $router.push('/carritoDeCompras')"
              class="dropDown__items-btn"
            >
              Ver Carrito ->
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<style>
* {
  font-family: monospace;
}
.header- {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 10;
  background-color: #ffffff;
  width: 100%;
  height: 50px;
}
.header__logo- {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100%;
}
.header__logo-img {
  width: 45px;
  height: 45px;
  border-radius: 100%;
  cursor: pointer;
}
.search {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 100%;
}
.search__input {
  width: 70%;
}
.search__input-text {
  width: 60%;
  height: 30px;
  border-radius: 10px;
  padding-left: 20px;
  color: #000;
  outline: none;
}

.carrito {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100%;
}
.carrito__btn {
  width: 90px;
  height: 40px;
  color: #000;
  outline: none;
  cursor: pointer;
  border: solid 5px #a7a5a5;
  transition: 0.5s;
}
.carrito__btn:hover {
  border: 5px solid #767575;
}
.dropDown {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 75px;
  width: 240px;
  height: 150px;
  background-color: #fff;
  padding: 5px;
}
.dropDown__btn {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  width: 100%;
  height: 20%;
  padding: 10px;
}
.dropDown__btn-txt {
  color: #000;
  font-size: 12px;
}
.dropDown__btn-vaciar {
  background-color: #fff;
  border: none;
  color: #000;
  width: 50px;
  height: 30px;
  border-radius: 5px;
  background-color: #eae4e4;
  cursor: pointer;
}
.dropDown__items {
  width: 100%;
  height: 100%;
  background-color: #000;
}
.dropDown__items-view {
  width: 100%;
  height: 100%;
}
.dropDown__items-btn {
  width: 100%;
  height: 100%;
  color: #4375f1;
  cursor: pointer;
  border: none;
  font-weight: 500;
  background-color: #fff;
}
.dropDown__items-btn:hover {
  background-color: #f7f7f7;
}
.slide-top {
  -webkit-animation: slide-top 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-top 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
@-webkit-keyframes slide-top {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(-20px);
    transform: translateY(-20px);
  }
}
@keyframes slide-top {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(-20px);
    transform: translateY(-20px);
  }
}

@media (max-width: 600px) {
  .header__logo- {
    width: 55px;
  }
  .search {
    width: 80%;
  }
  .search__input-text {
    width: 80%;
  }
}
</style>
