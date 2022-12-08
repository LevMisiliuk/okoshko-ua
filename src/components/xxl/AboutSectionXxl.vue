<template>
  <div class="about">
    <p
      class="about__txt"
      v-motion
      :initial="{opacity: 0, y: 700, transition: {delay: 350} }"
      :enter="{opacity: 1, y: 0, transition: {delay: 500} }"
    >
    {{$t('about.about-text')}}
    </p>
    <div class="about__botton-position">
      <a href="#calculator_frame" v-smooth-scroll>
        <button
          class="primary-button"
          v-motion
          v-motion-roll-left
        >
          <span>{{ $t('about.button') }}</span>
          <div class="wave"></div>
        </button>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutSectionXxl'
}
</script>

<style lang="scss" scoped>
.about {
  margin-bottom: 40px;

  &__txt {
    font-size: 22px;
    line-height: 28px;
    margin-bottom: 16px;
  }

  &__botton-position {
    display: flex;
    justify-content: flex-end;
  }
}
</style>