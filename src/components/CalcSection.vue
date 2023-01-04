<template>
  <section class="calc">
    <h2 class="calc__title">{{ $t('calc.title') }}</h2>
    <div class="calc__application" ref="calcApp">
      <iframe
        allow="autoplay"
        id="calculator_frame"
        width="100%"
        height="100%"
        style="border: none; min-height: 825px; border-radius: 30px;"
        src="https://okoshko.ua/calculators/#/?autologin=69575b5cd56c63b0c21f2b64238d103c"
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

export default {
  components: {
    ModalComponent
  },
  data() {
    return {
      showModal: false
    }
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
}
</style>