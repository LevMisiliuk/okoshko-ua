<template>
  <div class="lang-select">
    <div
      class="lang-select__title"
      @click="areOptionsVisible = !areOptionsVisible"
    >
      <div>
        {{ selected?.name ? selected?.name : selected }}
        <img class="lang-select__selected-flag" :src="selected?.flag" alt="" />
      </div>
      <img
        class="lang-select__dropdown-arrow"
        src="../../assets/svg/dropdown-arrow.svg"
        alt="dropdown arrow"
      />
    </div>
    <div v-if="areOptionsVisible" class="options">
      <p
        class="option"
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option)"
      >
        {{ option.name }}
        <img class="option-img" :src="option.flag" alt="cuntry flag" />
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
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
  setup(_, context) {
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
        areOptionsVisible.value = false
        return
      }
      context.emit('select', option)
      setLocale(option.value)
      areOptionsVisible.value = false
      localStorage.setItem('dark-calc', 'yes')
    }

    return {
      areOptionsVisible,
      selectOption,
      setLocale
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