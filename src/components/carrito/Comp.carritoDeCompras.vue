<template>
  <div class="allPage">
    <div class="shoppingCart">
      <div class="product">
        <div class="infor">
          <p class="infor__txt">Producto</p>
          <p class="infor__txt">Precio</p>
          <p class="infor__txt">Cantidad</p>
          <p class="infor__txt">Total</p>
        </div>
        <div class="shoppingCart__product-item"></div>
      </div>
      <div class="data">
        <div class="data__select"><select name="city" id="ciudad">
          <option value="Medellin">Medellin</option>
          <option value="Bogota">Bogota</option>
          <option value="Cali">Cali</option>
        </select> </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style>
.allPage {
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 100vh;
}
.shoppingCart {
  width: 50%;
  height: 80%;
  padding: 20px;
  background-color: #fff;
  margin-top: 80px;
  border-radius: 20px;
}
.product {
  width: 100%;
  height: 20%;
}
.infor {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 97%;
  height: 25%;
  background-color: #eff2f4;
  padding: 10px;
}
.infor__txt {
  color: #000;
}
.shoppingCart__product-item {
  width: 100%;
  height: 60%;
}
.data {
  width: 93%;
  height: 70%;
  background-color: #e4e6e8;
  margin-top: 20px;
  padding: 20px;
}
</style>
@click="changeView(), $router.push('/home')"
