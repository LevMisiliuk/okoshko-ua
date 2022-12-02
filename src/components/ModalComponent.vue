<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal__wrapper">
        <div class="modal__container">
          <div class="modal__header">
            <slot name="header">
              <h2>{{ $t('calc.modal-title') }}</h2>
              <img @click="$emit('close')" class="modal__header-img" src="../assets/svg/cross.svg" alt="Cross">
            </slot>
          </div>

          <div
            v-motion
            v-motion-roll-right
            class="modal__body"
          >
            <slot name="body">
              <video controls class="video" src="../assets/okoshki-video.mp4"></video>
            </slot>
          </div>
          <div class="modal__footer">
            <slot name="footer">
              <button
                class="primary-button"
                @click="$emit('close')"
                v-motion
                v-motion-roll-left
              >
                <span>{{ $t('calc.modal-button') }}</span>
                <div class="wave"></div>
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: 'ModalComponent',
  props: {
    show: Boolean
  }
}
</script>

<style lang="scss" scoped>
.modal {

  &__wrapper {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__container {
    min-width: 250px;
    max-width: 1000px;
    margin: auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px #00000054;
    color: #000;
    transition: all 0.3s ease;
    border-radius: 30px;
  }

  &__header {
    display: flex;
    justify-content: space-between;

    &-img {
      width: 32px;
      height: 32px;
      cursor: pointer;
      transition: .3s all linear;
      &:hover {
        transform: scale(1.4);
      }
    }
  }

  &__body {
    display: flex;
    justify-content: center;
    margin: 20px 0;
  }
}

.video {
  min-width: 250px;
  max-width: 850px;
}

.modal-mask {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal__container,
.modal-leave-to .modal__container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
