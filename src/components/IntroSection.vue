<template>
  <div class="header">
    <img v-motion v-motion-roll-right class="logo" src="../assets/svg/logo.svg" alt="logo">
    <LangSelect
      :options="options"
      @select="optionSelect"
      :selected="selected"
    />
  </div>

  <section
    v-motion
    v-motion-roll-left
    class="intro"
  >
    <h1
      class="intro__title"
    >
      {{ $t('intro.intro-title-1') }}<br />
      <span>{{ $t('intro.intro-title-2') }}</span>
    </h1>
  </section>
</template>

<script>
import { ref } from 'vue'
import LangSelect from './auxiliaryComponents/LangSelect.vue'

export default {
  components: {
    LangSelect
  },
  name: 'IntroSection',
  setup () {
    const options = ref([
      { name: 'УКР', value: 'ua', flag: require('../assets/ua-flag.png') },
      { name: 'ENG', value: 'en', flag: require('../assets/en-flag.png') },
    ])
    const selected = ref(
      localStorage.getItem('lang') === 'ua'
        ? options.value[0]
        : localStorage.getItem('lang') === 'en'
        ? options.value[1] : options.value[0]
    )

    function optionSelect(option) {
      selected.value = option
    }

    return {
      options,
      selected,
      optionSelect
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
}
.intro {
  display: flex;
  justify-content: space-between;
  height: 250px;
  width: 100%;

  &__title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-size: 26px;
    text-transform: uppercase;
    letter-spacing: 6px;
    border: 1px solid #fff;
    padding: 8px 18px;
  }
}
</style>
