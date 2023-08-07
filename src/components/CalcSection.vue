<template>
  <section class="calc">
    <h2 class="calc__title" style="padding: 20px;">{{ $t('calc.title') }}</h2>
    <div id="my-element" class="calc__application" ref="calcApp">
      <iframe
        v-if="isDark()"
        title="calculator application"
        allow="autoplay"
        width="110%"
        id="calculator_frame"
        height="100%"
        class="dark-calc"
        style="border: none; min-height: 90vh;"
        src="https://okoshko.ua/dark-calc/#/"
      ></iframe>
      <iframe
        v-if="!isDark()"
        title="calculator application"
        allow="autoplay"
        id="calculator_frame"
        width="100%"
        height="100%"
        style="border: none; min-height: 620px; border-radius: 30px;"
        src="https://okoshko.ua/calculators/#/"
      ></iframe>
    </div>
    <div class="calc__button-position">
      <button
        class="primary-button"
        v-motion
        v-motion-roll-left
        @click="showModal = true"
      >
        <span>{{ $t('calc.button') }}</span>
        <div class="wave"></div>
      </button>
    </div>
    <Teleport to="body">
      <ModalComponent :show="showModal" @close="showModal = false" />
    </Teleport>
  </section>
</template>

<script>
import ModalComponent from './ModalComponent.vue'
import ScrollMagic from 'scrollmagic';

export default {
  components: {
    ModalComponent
  },
  data() {
    return {
      showModal: false
    }
  },
  methods: {
    isDark () {
      if (localStorage.getItem('dark-calc') === 'yes') {
        return true
      } else {
        return false
      }
    }
  },
  mounted () {
    const controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
      triggerElement: '#my-element', // элемент, который запускает анимацию при прокрутке
      duration: 1000, // продолжительность анимации (в пикселях прокрутки)
      triggerHook: 0, // срабатывание триггера на высоте 25% вьюпорта
    })
    .setPin('#my-element') // зафиксировать элемент на месте во время анимации
    .addTo(controller);
  }
}
</script>

<style lang="scss" scoped>
.calc {
  margin-bottom: 40px;

  &__title {
    font-size: 24px;
    margin-bottom: 8px;
  }

  &__application {
    width: 100%;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }

  &__button-position {
    display: flex;
    justify-content: center;
  }

  .dark-calc {
    box-shadow: 0 5px 10px rgba(255, 255, 255, 0.3);
    margin-bottom: 20px;
  }
}
</style>