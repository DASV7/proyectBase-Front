<template>
  <header class="header1">
    <div class="header__banner">
      <div class="header__img-banner">
        <img
          class="header__img"
          src="https://pousta.com/wp-content/uploads/2021/08/Banner_Capibara-1-800x427.jpg"
          alt=""
        />
      </div>
      <div class="header__img-logo">
        <img
          class="header__logo"
          src="https://animalia-bio.us-east-1.linodeobjects.com/animals/photos/full/1.25x1/capybara-sitting-sideways-18114724916jpg.webp"
          alt=""
        />
        <div class="header__logo-text">
          <h2 class="header__text">Tienda oficial</h2>
          <a
            target="_blanck"
            href="https://wa.me/+573008355178"
            class="header__button"
            >Ir a whatsapp</a
          >
        </div>
      </div>
    </div>
    <!-- <div class="header__info"></div> -->
  </header>
</template>

<script setup></script>

<style>
.header1 {
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  height: 100%;
}
.header__banner {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 50%;
}
.header__img-banner {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.header__img-logo {
  display: flex;
  width: 74%;
  position: relative;
  top: -50px;
  left: -30px;
}
.header__img {
  width: 100%;
  height: 200px;
}
.header__logo {
  width: 100px;
  height: 100px;
  border-radius: 100%;
  border: solid 5px #000;
}
.header__logo-text {
  display: flex;
  flex-direction: column;
  padding: 60px 0px 0px 20px;
  width: 300px;
  gap: 10px;
}
.header__text {
  color: #000;
  font-size: 25px;
}
.header__button {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 150px;
  height: 25px;
  text-decoration: none;
  color: #000;
  background-color: #fff;
  border: solid 5px #ff0000;
  border-radius: 30px;
  font-size: 20px;
  transition: 0.5s;
}
.header__button:hover {
  background-color: #000;
  border: solid 5px #ff0000;
  color: #fff;
  transition: 0.5s;
}
.header__info {
  width: 46%;
  height: 100%;
  background-color: #e9e9e9;
  padding: 20px;
}

@media (max-width: 800px) {
  .header__banner {
    width: 100%;
    min-width: 300px;
  }
  .header__logo-text {
    width: 100%;
  }
  .header__img-logo {
    width: 65%;
  }
  .header__logo {
    width: 80px;
    height: 80px;
  }
 
}
@media (max-width: 500px) {
  .header__text {
    text-align: center;
  }
}
</style>

https://pousta.com/wp-content/uploads/2021/08/Banner_Capibara-1-800x427.jpg
https://animalia-bio.us-east-1.linodeobjects.com/animals/photos/full/1.25x1/capybara-sitting-sideways-18114724916jpg.webp
