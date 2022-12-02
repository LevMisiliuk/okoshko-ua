<template>
 <router-view></router-view>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  font-family: Lato, Arial, sans-serif;
  color: #fff;
  scroll-behavior: smooth;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

p {
  margin: 0;
  line-height: 150%;
}

a {
  text-decoration: none;
  color: #fff;
}

input {
  outline: none;
}

.container-xs {
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  overflow-x: hidden;
}


.container-xxl {
  max-width: 1250px;
  margin: 0 auto;
  padding: 20px;
  overflow-x: hidden;
}

.primary-button {
  width: 200px;
  padding: 12px 15px;
  position: relative;
  display: block;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    .wave {
      top: -120px;
    }
  }

  span {
    position: relative;
    z-index: 1;
    color: #fff;
    font-size: 14px;
  }
}
.wave {
  width: 200px;
  height: 200px;
  background-color: #444857;
  box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 0;
  top: -80px;
  transition: 0.4s;

  &::before,
  &::after {
    width: 200%;
    height: 200%;
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -75%);
  }

  &::before {
    border-radius: 45%;
    background-color: rgba(20, 20, 20, 1);
    animation: wave 5s linear infinite;
  }

  &::after {
    border-radius: 40%;
    background-color: rgba(20, 20, 20, 0.5);
    animation: wave 10s linear infinite;
  }
}

@keyframes wave {
  0% {
    transform: translate(-50%, -75%) rotate(0deg);
  }

  100% {
    transform: translate(-50%, -75%) rotate(360deg);
  }
}

.logo {
  width: 45px;
  height: 45px;
}

.loader {
  animation: rotate 3s infinite;
  height: 60px;
  width: 60px;
  background-color: #fff;
  border-radius: 10px;;
  z-index: 200;

  &:before,
  &:after {
    border-radius: 50%;
    content: "";
    display: block;
    height: 20px;
    width: 20px
  }

  &:before {
    animation: ball1 3s infinite;
    background-color: #000;
    box-shadow: 30px 0 0 #000;
    margin-bottom: 10px;
    margin-left: 4.5px;
    margin-top: 5px;
  }
  &:after {
     animation: ball2 3s infinite;
    background-color: #000;
    box-shadow: 30px 0 0 #000;
    margin-left: 4.5px;
  }
}

.loader-position {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.area-loader {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
  z-index: 100;
}

@keyframes rotate {
  0% { transform: rotate(0deg) scale(1) }
  50% { transform: rotate(360deg) scale(1) }
  100% { transform: rotate(720deg) scale(1) }
}

@keyframes ball1 {
  0% {
    box-shadow: 30px 0 0 #000;
  }
  50% {
    box-shadow: 0 0 0 #000;
    margin-bottom: 0;
    transform: translate(15px, 15px);
  }
  100% {
    box-shadow: 30px 0 0 #000;
    margin-bottom: 10px;
  }
}

@keyframes ball2 {
  0% {
    box-shadow: 30px 0 0 #000;
  }
  50% {
    box-shadow: 0 0 0 #000;
    margin-top: -20px;
    transform: translate(15px, 15px);
  }
  100% {
    box-shadow: 30px 0 0 #000;
    margin-top: 0;
  }
}
</style>
