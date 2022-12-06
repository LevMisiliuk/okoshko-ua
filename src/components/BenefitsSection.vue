<template>
  <div class="benefits">
    <div class="benefits__item">
      <h2
        v-motion
        :initial="{ opacity: 0, y: 700, transition: { delay: 400 } }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 750 } }"
        class="benefits__item-title"
      >
        {{ $t('benefits.net.title') }}
      </h2>
      <div
        v-motion
        :initial="{ opacity: 0, y: -700, transition: { delay: 400 } }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 750 } }"
        class="benefits__item-button"
      >
        <a href="#calculator_frame">
          <button class="primary-button" v-motion v-motion-roll-left>
            <span>{{ $t('benefits.net.button') }}</span>
            <div class="wave"></div>
          </button>
        </a>
      </div>
    </div>
    <div class="benefits__item">
      <h2 class="benefits__item-title">
        {{ $t('benefits.order-payment.title') }}
      </h2>
      <p class="benefits__item-txt">
        {{ $t('benefits.order-payment.text-1')
        }}{{ $t('benefits.order-payment.text-2') }}
      </p>
    </div>
    <div class="benefits__item">
      <h2 class="benefits__item-title">
        {{ $t('benefits.delivery.title') }}
      </h2>
      <p class="benefits__item-txt">
        {{ $t('benefits.delivery.text-1') }}{{ $t('benefits.delivery.text-2') }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.benefits {
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  &__img {
    width: 100px;
    height: 100px;
  }

  &__item {
    margin-bottom: 30px;

    &-title {
      font-size: 24px;
      margin-bottom: 8px;
    }

    &-img {
      display: flex;
      justify-content: center;
    }

    &-txt {
      font-size: 16px;
      line-height: 28px;
      padding: 0 8px;
    }

    &-button {
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>
