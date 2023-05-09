<template>
  <div class="container">
    <div class="ecommers">
      <div class="ecommers__btn">
        <button
          @click="changeView(), $router.push('/home')"
          class="ecommers__btn-back"
        >
          Regresa
        </button>
      </div>
      <div class="ecommers__container-marca">
        <h1 class="ecommers__marca">Jordan</h1>
        <a class="ecommers__marca-btn" href="#">Producto > Jordan</a>
      </div>
      <div class="informacion">
        <div class="producto">
          <div class="producto__img">
            <img
              id="product"
              class="producto__img-first"
              src="src\img\zapatos.jpg"
            />
          </div>
          <div class="producto__change">
            <div class="producto__change-img">
              <img
                @click="changeImg(0)"
                class="producto__change-first"
                src="src\img\zapatos.jpg"
              />
            </div>
            <div class="producto__change-img">
              <img
                @click="changeImg(1)"
                class="producto__change-first"
                src="src\img\redShoes.jfif"
              />
            </div>
          </div>
        </div>
        <div class="info">
          <div class="info__container">
            <div>
              <a class="info__producto-link" href="#">JORDAN</a>
              <p class="info__producto">EL CALZADO ES NACIONAL.</p>
            </div>
            <span class="info__producto-price">Precio: $999.999</span>
            <div>
              <p class="info__producto-shipment">
                ENVIOS TOTALMENTE GRATIS, MANEJAMOS CONTRA ENTREGA
              </p>
            </div>
            <P class="info__producto-shipment"
              >FABRICADO POR NOSOTROS MISMOS 100% GARANTIZADO</P
            >
            <P class="info__producto-shipment">DESDE LA TALLA 37 HASTA LA 40</P>
            <div class="info__characteristics">
              <div class="info__characteristics-box1">
                <p class="info__characteristics-txt">& Alto: 20 Centimetros</p>
                <p class="info__characteristics-txt">& Largo: 10 Centimetros</p>
                <p class="info__characteristics-txt">& Ancho: 20 Centimetros</p>
              </div>
              <div class="info__characteristics-box1">
                <p class="info__characteristics-txt">& Largo: 10 Centimetros</p>
                <p class="info__characteristics-txt">& Ancho: 20 Centimetros</p>
              </div>
            </div>
            <div class="container-btn">
              <button @click="addValue()" class="btn-carrito">
                Añadir al carrito
              </button>
              <!-- <div @click="changeView(), $router.push('/carritoDeCompras')"></div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useCounterStore } from "../../store/e-commerce";

const counterStore = useCounterStore();

const addValue = (e) => {
  counterStore.increment();
};

setTimeout(() => {
  console.log(counterStore.count);
}, 5000);

function changeView() {}
function changeImg(index) {
  let img = document.querySelectorAll(".producto__change-img");
  let change = document.querySelector("#product");
  for (let i = 0; i < img.length; i++) {
    img[i].classList.remove("img__focus");
  }
  img[index].classList.add("img__focus");

  if (index === 0) {
    change.src = "src/img/zapatos.jpg";
    console.log(change.src);
  } else change.src = "src/img/redShoes.jfif";
}
</script>

<style>
* {
  font-family: sans-serif;
  transition: 0.1s;
}
.img__focus {
  outline: solid 3px #000;
}

.container {
  display: flex;
  /* align-items: center; */
  justify-content: center;
  position: absolute;
  top: 50px;
  width: 100%;
  /* height: 100%; */
  margin-top: 20px;
  overflow: hidden;

}
.ecommers {
  /* display: flex;
  flex-direction: column;
  align-items: start; */
  background-color: #fff;
  height: 80%;
  width: 45%;
  padding: 20px 20px 30px 20px;
  /* outline: solid 1px #000; */
  border-radius: 20px;
  /* border: solid 4px #d1d0d0; */
  margin-bottom: 30px;
}
.ecommers__btn-back {
  background-color: #6c757d;
  width: 70px;
  height: 30px;
  cursor: pointer;
  transition: 0.7s;
}
.ecommers__btn-back:hover {
  background-color: #434345;
  border-radius: 3px;
  transition: 0.7s;
}
.ecommers__container-marca {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 5px 0px 5px 0px;
}
.ecommers__marca {
  color: #000;
}
.ecommers__marca-btn {
  color: #000;
  text-decoration: none;
  font-size: 10px;
}
.producto {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  /* height: 50%; */
  /* border: solid 1px #000; */
  gap: 5px;
  min-width: 200px;
}
.producto__img-first {
  width: 100%;
  border-radius: 10px;
}
.producto__change {
  display: flex;
  width: 100%;
  /* height: 35%; */
  gap: 3px;
}
.producto__change-img {
  width: 50%;
  height: 96%;
}
.producto__change-first {
  width: 100%;
  height: 100%;
  /* border-radius: 5px; */
}
.informacion {
  display: flex;
  width: 100%;
  height: 90%;
  gap: 10px;
}
.info {
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 100%;
  padding-left: 0px;
}
.info__container {
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  height: 100%;
  /* background-color: #000; */
  padding-left: 20px;
}
.info__producto {
  font-size: 17px;
  color: #000;
}
.info__producto-shipment {
  font-size: 14px;
  color: #000;
  opacity: 0.7;
}
.info__producto-price {
  font-size: 18px;
  color: #000;
}
.info__producto-link {
  color: #5671f0;
  text-decoration: none;
}
.info__characteristics {
  display: flex;
  width: 100%;
  height: 17%;
}
.info__characteristics-box1 {
  display: flex;
  flex-direction: column;
  gap: 19px;
  width: 50%;
  height: 47%;
  color: #000;
}
.info__characteristics-txt {
  opacity: 0.9;
  font-size: 12px;
  color: #000;
}
.btn-carrito {
  width: 100%;
  height: 100%;
  color: #fff;
  border: solid 3px #17e47d;
  background-color: #11ca6d;
  cursor: pointer;
}
.btn-carrito:hover {
  background-color: #249b5f;
}
.container-btn {
  width: 180px;
  height: 50px;
  background-color: #000;
  margin-top: 20px;
}
@media (max-width: 900px) {
  .info__container {
    padding-left: 0px;
  }
  .producto {
    width: 100%;
  }
  .informacion {
    flex-direction: column;
    align-items: center;
  }
  .ecommers {
    width: 95%;
    height: 255%;
  }
  .info {
    width: 100%;
  }
  .container-btn {
    margin-top: 0px;
  }
  .info__characteristics {
    height: 13%;
  }
}
@media (max-width: 1000px) {
  .info__container {
    padding-left: 0px;
  }
}
</style>
