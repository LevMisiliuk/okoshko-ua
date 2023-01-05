<template>
  <div class="footer-header">
    <div>
      <svg
        class="waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shape-rendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g class="footer-inner">
          <use
            xlink:href="#gentle-wave"
            x="48"
            y="0"
            fill="rgba(255,255,255,0.7"
          />
          <use
            xlink:href="#gentle-wave"
            x="48"
            y="3"
            fill="rgba(255,255,255,0.5)"
          />
          <use
            xlink:href="#gentle-wave"
            x="48"
            y="5"
            fill="rgba(255,255,255,0.3)"
          />
          <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
        </g>
      </svg>
    </div>
  </div>
  <div class="footer-content">
    <a class="footer-content__item" href="tel:+38(050) 342-94-60">
      +38(050)-342-94-60
    </a>
    <a href="mailto:roznica@okoshko.ua" class="footer-content__item">
      roznica@okoshko.ua
    </a>
    <img class="footer-content__img" src="../../assets/logo-with-tagline.png" alt="logo with tagline">
    <div class="footer-content__socials">
      <a target="_blank" href="https://www.instagram.com/okoshko2018/?igshid=MDM4ZDc5MmU%3D">
        <img src="../../assets/svg/instagram.svg" alt="instagram">
      </a>
      <img src="../../assets/svg/facebook.svg" alt="facebook">
    </div>
    <a href="https://www.linkedin.com/in/lev-misiliuk/" target="_blank" class="footer-content__author">
      Developed and Designed by Lev Misiliuk 2023
    </a>
  </div>
</template>

<script>
export default {
  name: 'FooterSectionXxl',
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.footer-header {
  position: relative;
  text-align: center;
  background: transparent;
  color: white;
}

.waves {
  position: relative;
  width: 100%;
  height: 15vh;
  margin-bottom: -7px; /*Fix for safari gap*/
  min-height: 100px;
  max-height: 150px;
}

.footer-content {
  background-color: white;
  color: #000;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  &__item {
    color: #000;
    margin-bottom: 16px;
  }

  &__author {
    font-size: 12px;
    color: #000;
    margin-top: 16px;
  }

  &__img {
    width: 150px;
    margin-bottom: 16px;
  }

  &__socials {
    widows: 100%;
    display: flex;
    justify-content: space-between;

    img {
      width: 30px;
      height: 30px;
    }
  }
}

/* Animation */

.footer-inner > use {
  animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
}
.footer-inner > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}
.footer-inner > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}
.footer-inner > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}
.footer-inner > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}
@keyframes move-forever {
  0% {
    transform: translate3d(-90px, 0, 0);
  }
  100% {
    transform: translate3d(85px, 0, 0);
  }
}
/*Shrinking for mobile*/
@media (max-width: 768px) {
  .waves {
    height: 40px;
    min-height: 40px;
  }
  .content {
    height: 30vh;
  }
  h1 {
    font-size: 24px;
  }
}
</style>