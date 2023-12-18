<template>
  <div class="lang-select" @click="toggleOptionsVisibility">
    <div class="lang-select__title">
      <div>
        {{ selected?.name ? selected?.name : selected }}
        <img class="lang-select__selected-flag" :src="selected?.flag" alt="" />
      </div>
      <img class="lang-select__dropdown-arrow" src="../../assets/svg/dropdown-arrow.svg" alt="dropdown arrow" />
    </div>
    <div v-if="areOptionsVisible" class="options">
      <div
        class="option"
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option)"
      >
        <span>{{ option.name }}</span>
        <img class="option-img" :src="option.flag" alt="country flag" />
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import i18n from '@/i18n'
import router from '../../router'

export default {
  name: 'LangSelect',
  props: {
    options: {
      type: Array,
      default: () => []
    },
    selected: {
      type: Object,
      default: () => {
        'Язык'
      }
    }
  },
  emits: ['select'],
  setup(props, context) {
    const areOptionsVisible = ref(false)

    function setLocale(locale) {
      localStorage.setItem('lang', locale)
      i18n.global.locale.value = locale
      router.push({
        params: { lang: locale }
      })
    }

    function selectOption(option) {
      if (option.name === 'ENG') {
        localStorage.setItem('dark-calc', 'no')
        context.emit('select', option)
        setLocale(option.value)
        return
      }
      context.emit('select', option)
      setLocale(option.value)
      localStorage.setItem('dark-calc', 'yes')
    }

    function toggleOptionsVisibility () {
      areOptionsVisible.value = !areOptionsVisible.value;
    }

    onMounted(() => {
      let initialLocale;

      const savedLanguage = localStorage.getItem('lang')
      if (savedLanguage) {
        initialLocale = savedLanguage;
      } else {
        const browserLanguage = navigator.language.slice(0, 2);
        initialLocale = ['uk', 'ru', 'en'].includes(browserLanguage) ? browserLanguage : 'en';
        localStorage.setItem('lang', initialLocale);
      }

      const option = props.options.find(option => option.value === initialLocale);
      if (option) selectOption(option);
    })

    return {
      areOptionsVisible,
      selectOption,
      setLocale,
      toggleOptionsVisibility
    }
  }
}
</script>

<style lang="scss" scoped>
.lang-select {
  &__title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #000;
  }
  position: relative;
  display: flex;
  align-self: center;
  align-items: center;
  padding: 16px 14px;
  width: 120px;
  height: 48px;
  background-color: #fff;
  border-radius: 8px;
  cursor: pointer;

  .options {
    background-color: #fff;
    color: #000;
    position: absolute;
    top: 40px;
    right: 0;
    width: 100%;

    z-index: 100;

    &:last-child {
      border-radius: 8px;
    }
  }

  &__selected-flag {
    margin-left: 4px;
  }

  .option {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 14px;

    &:hover {
      background: rgba(0, 174, 239, 0.25);
      &:last-child {
        border-radius: 8px;
      }
    }
    justify-content: space-between;
  }

  .option-img {
    width: 20px;
    height: 15px;
  }
}
</style>