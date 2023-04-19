<script setup>
function changeView() {}
function openCar() {}
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
        <button @click="openCar()" class="carrito__btn">Car {{ suma }} </button>
        <!-- <div class="dropDown">
      </div> -->
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
  position: absolute;
  top: 45px;
  width: 200px;
  height: 400px;
  background-color: #000;
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
