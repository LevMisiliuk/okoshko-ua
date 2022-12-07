<template>
  <form class="from">
    <div class="form__inner">
      <div class="form-left-decoration"></div>
      <div class="form-right-decoration"></div>
      <div class="circle"></div>
      <div class="form__inner-body">
        <h3 class="form__title">{{ $t('form.title') }}</h3>
        <div class="form__checkmarks">
          ✅ - Замір
          ✅ - Консультація
          ✅ - Інше
        </div>
        <h4 class="form__subtitle">{{ $t('form.text') }}</h4>
        <input
          v-model="clientName"
          :class="
            errorName
              ? 'form__inner-body-input-error'
              : 'form__inner-body-input'
          "
          type="text"
          :placeholder="$t('form.placeholderName')"
        />
        <input
          v-model="clientPhone"
          :class="
            errorPhone
              ? 'form__inner-body-input-error'
              : 'form__inner-body-input'
          "
          type="email"
          :placeholder="$t('form.placeholderPhone')"
        />
        <div class="form__inner-button-position">
          <button class="primary-button" @click.prevent="submitForm">
            <span>{{ $t('form.button') }}</span>
            <div class="wave"></div>
          </button>
        </div>
      </div>
    </div>
  </form>
  <div v-if="loaderState" class="area-loader">
    <span class="loader loader-position"></span>
  </div>
  <MarqueeLogoWall />
</template>

<script>
import { ref } from 'vue'
// import i18n from '@/i18n'x
import MarqueeLogoWall from '../auxiliaryComponents/MarqueeLogoWall'

export default {
  name: 'FormSectionXxl',
  components: {
    MarqueeLogoWall
  },
  setup() {
    const loaderState = ref(null)
    const clientName = ref(null)
    const clientPhone = ref(null)
    const errorName = ref(null)
    const errorPhone = ref(null)

    function submitForm() {
      if (!clientName.value && !clientPhone.value) {
        errorName.value = true
        errorPhone.value = true
        return
      } else if (clientName.value && !clientPhone.value) {
        errorName.value = true
        return
      } else if (!clientName.value && clientPhone.value) {
        errorPhone.value = true
        return
      }
      if (clientName.value) errorName.value = false
      if (clientPhone.value) errorPhone.value = false
      loaderState.value = true
      setTimeout(() => {
        // toast.success(
        //   `${clientName.value} ${i18n.global.t('notifications.soonWeWillCall')}`
        // )
        loaderState.value = false
      }, 5000)
    }

    return {
      submitForm,
      loaderState,
      clientName,
      clientPhone,
      errorName,
      errorPhone
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  color: #000;
  &__inner {
    position: relative;
    max-width: 400px;
    margin: 50px auto 40px;
    background: #fff;
    border-radius: 30px;
    &-body {
      padding: 40px;
    }

    &-body-input {
      display: block;
      width: 100%;
      padding: 0 20px;
      margin-bottom: 10px;
      background: #e9eff6;
      line-height: 40px;
      border-width: 0;
      &-error {
        display: block;
        width: 100%;
        padding: 0 20px;
        margin-bottom: 10px;
        background: #e9eff6;
        line-height: 40px;
        border: 1px solid rgb(255, 0, 0);
      }
    }
    &-button-position {
      display: flex;
      justify-content: flex-end;
    }
  }

  &__title {
    margin-top: 0;
    margin-bottom: 20px;
    font-weight: 500;
    font-size: 24px;
    color: #000;
  }

  &__subtitle {
    margin-top: 0;
    margin-bottom: 20px;
    font-weight: 500;
    font-size: 18px;
    color: #000;
  }

  &__checkmarks {
    margin-bottom: 20px;
    font-weight: 550;
    font-size: 14px;
    color: #000;
  }
}
.form-left-decoration,
.form-right-decoration {
  content: '';
  position: absolute;
  width: 50px;
  height: 20px;
  background: transparent;
  border-radius: 20px;
}
.form-left-decoration {
  bottom: 60px;
  left: -30px;
}
.form-right-decoration {
  top: 60px;
  right: -30px;
}
.form-left-decoration:before,
.form-left-decoration:after,
.form-right-decoration:before,
.form-right-decoration:after {
  content: '';
  position: absolute;
  width: 50px;
  height: 20px;
  border-radius: 30px;
  background: white;
}
.form-left-decoration:before {
  top: -20px;
}
.form-left-decoration:after {
  top: 20px;
  left: 10px;
}
.form-right-decoration:before {
  top: -20px;
  right: 0;
}
.form-right-decoration:after {
  top: 20px;
  right: 10px;
}
.circle {
  position: absolute;
  bottom: 80px;
  left: -55px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: white;
}
</style>