<script setup>
import { computed, ref } from "vue";
import axios from "../api/axios";
const sendForm = async (event) => {
  event.preventDefault();
  const form = document.getElementById("formLogin");
  const formInfo = new FormData(form);
  const datos = {};
  for (let [clave, valor] of formInfo.entries()) {
    datos[clave] = valor;
  }

  const data = await axios.post(
    "http://localhost:3001/api/v1/usersmodule",
    datos || {}
  );
  console.log(data.data);
};

const infoInputs = [
  { name: "surname", visualName: "Nombre", type: "text" },
  { name: "email", visualName: "Correo", type: "email" },
  { name: "password", visualName: "Contraseña", type: "password" },
];

let login = ref(true);

function changeMenu(e) {
  e.preventDefault();
  console.log("asdasd", !login);
  login.value = !login.value;
}
</script>

<template>
  <div class="Login">
    <form id="formLogin">
      <div id="formLogins" v-if="login">
        <h2 class="tittle__login">Iniciar sesión</h2>
        <input
          class="info__Form"
          type="email"
          placeholder="E-mail"
          name="email"
        />
        <input
          class="info__Form"
          type="password"
          placeholder="Password"
          name="password"
        />
        <input
          class="button__Form"
          @click="sendForm($event), $router.push('/menuPrincipal')"
          type="submit"
          value="Iniciar sesión"
        />
        <div class="register">
          <p>¿No tienes cuenta?</p>
          <button
            @click="changeMenu($event)"
            class="register__btn"
          >
            {{ !login ? "Iniciar sesión" : "Registrate" }}
          </button>
        </div>
      </div>

      <div id="formLogins" v-if="!login">
        <h2 class="tittle__login">Registrate</h2>
        <input
          v-for="(item, idx) in infoInputs"
          :key="idx"
          class="info__Form"
          :type="item.type"
          :placeholder="item.visualName"
          :name="item.name"
        />
        <input
          class="button__Form"
          @click="sendForm($event), $router.push('/menuPrincipal')"
          type="submit"
          value="Registrarse"
        />
        <div class="register">
          <p>¿Ya tienes cuenta?</p>
          <button
            @click="changeMenu($event), $router.push('/menuPrincipal')"
            class="register__btn"
          >
            {{ !login ? "Iniciar sesión" : "Registrarse  " }}
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<style>
* {
  padding: 0%;
  margin: 0%;
  color: #fff;
  font-family: monospace;
}
body {
  background-color: #222121;
}
/* .formLogins {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 35%;
  height: 80%;
  border: solid 2px #fff;
  gap: 20px;
  min-width: 300px;
} */
#formLogin {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.Login {
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
}
#formLogins {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25%;
  height: 60%;
  border: solid 2px #fff;
  gap: 30px;
  min-width: 300px;
}
.tittle__login {
  color: #fff;
  font-size: 20px;
}
.info__Form {
  width: 90%;
  height: 35px;
  outline: none;
  border: none;
  padding-left: 10px;
  border-radius: 20px;
  background-color: #5e5b5b;
  color: #fff;
}
.info__Form::placeholder {
  color: #ffffffa9;
}
.info__Form:focus {
  outline: #959191 2px solid;
  transition: 0.7s;
}
.button__Form {
  width: 70%;
  height: 35px;
  background-color: #3e3d3d;
  border: none;
  cursor: pointer;
  outline: none;
  border-radius: 30px;
}
.button__Form::placeholder {
  color: #fff;
}
.button__Form:hover {
  background-color: #959191;
  transition: 0.7s;
  color: #fff;
}
.register {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.register__btn {
  widows: 30px;
  height: 40px;
  border: none;
  background-color: #3e3d3d;
  outline: none;
  cursor: pointer;
  border-radius: 20px;
}
.register__btn:hover {
  transition: 0.7s;
  background-color: #959191;
}
</style>
