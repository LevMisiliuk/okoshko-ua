<template>
  <div class="benefits">
    <div class="benefits__item">
      <h2
        v-motion
        :initial="{opacity: 0, y: 700, transition: {delay: 400} }"
        :enter="{opacity: 1, y: 0, transition: {delay: 750} }"
        class="benefits__item-title"
      >
        {{ $t('benefits.net.title') }}
      </h2>
      <div
        v-motion
        :initial="{opacity: 0, y: -700, transition: {delay: 400} }"
        :enter="{opacity: 1, y: 0, transition: {delay: 750} }"
        class="benefits__item-img"
      >
        <img class="benefits__img" src="../../assets/okoshko-ua-qr.png" alt="qr code">
          <div class="benefits__item-flex">
            <div class="benefits__item-txt">{{ $t('benefits.net.subtitle') }}</div>
            <div class="benefits__items-txt">
              <div class="benefits__item-txt">{{ $t('benefits.net.rule-1') }}</div>
              <div class="benefits__item-txt">{{ $t('benefits.net.rule-2') }}</div>
              <div class="benefits__item-txt">{{ $t('benefits.net.rule-3') }}</div>
              <div class="benefits__item-txt">{{ $t('benefits.net.rule-4') }} </div>
              <div class="benefits__item-txt">{{ $t('benefits.net.rule-5') }}</div>
            </div>
          </div>
      </div>
    </div>
    <div class="benefits__item">
      <h2
        class="benefits__item-title">
        {{ $t('benefits.order-payment.title') }}
      </h2>
      <p
        class="benefits__item-txt"
      >
        {{ $t('benefits.order-payment.text-1') }} {{ $t('benefits.order-payment.text-2') }}
      </p>
    </div>
    <div class="benefits__item">
      <h2
        class="benefits__item-title">
        {{ $t('benefits.delivery.title') }}
      </h2>
      <p
        class="benefits__item-txt">
       {{ $t('benefits.delivery.text-1') }} {{ $t('benefits.delivery.text-2') }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BenefitsSectionXxl',
  setup () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.benefits {
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  &__img {
    width: 200px;
    height: 200px;
  }

  &__img {
    margin-right: 80px;
  }

  &__items-txt {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__item {
    margin-bottom: 40px;

    &-title {
      font-size: 30px;
      margin-bottom: 24px;
    }

    &-img {
      display: flex;
      justify-content: space-evenly;
    }

    &-txt {
      font-size: 22px;
      line-height: 28px;
      padding: 0 8px;
    }

    &-flex-end {
      display: flex;
      justify-content: flex-end;
    }

    &-flex {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
    }
  }
}
</style>