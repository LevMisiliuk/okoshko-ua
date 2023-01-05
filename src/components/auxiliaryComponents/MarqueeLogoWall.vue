<template>
  <div>
    <article class="wrapper">
      <div class="marquee">
        <div class="marquee__group">
          <img src="../../assets/svg/guardian.svg" alt="">
          <img src="../../assets/svg/maco.svg" alt="">
          <img src="../../assets/svg/rehau.svg" alt="">
          <img src="../../assets/svg/veka.svg" alt="">
        </div>

        <div aria-hidden="true" class="marquee__group">
          <img src="../../assets/svg/guardian.svg" alt="">
          <img src="../../assets/svg/maco.svg" alt="">
          <img src="../../assets/svg/rehau.svg" alt="">
          <img src="../../assets/svg/veka.svg" alt="">
        </div>
      </div>

      <div class="marquee marquee--reverse">
        <div class="marquee__group">
          <img src="../../assets/svg/roto.svg" alt="">
          <img src="../../assets/svg/wds.svg" alt="">
          <img src="../../assets/svg/axor.svg" alt="">
          <img src="../../assets/svg/aluplast.svg" alt="">
        </div>

        <div aria-hidden="true" class="marquee__group">
          <img src="../../assets/svg/roto.svg" alt="">
          <img src="../../assets/svg/wds.svg" alt="">
          <img src="../../assets/svg/axor.svg" alt="">
          <img src="../../assets/svg/aluplast.svg" alt="">
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'MarqueeLogoWall',
  setup() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.marquee {
  display: flex;
  overflow: hidden;
  user-select: none;
  gap: 25px;
  mask-image: linear-gradient(
    var(--mask-direction, to right),
    #{'hsl(0 0% 0% / 0)'},
    #{'hsl(0 0% 0% / 1) 20%'},
    #{'hsl(0 0% 0% / 1) 80%'},
    #{' hsl(0 0% 0% / 0)'}
  );
}

.marquee__group {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 25px;
  min-width: 100%;
  animation: scroll-x 90s linear infinite;

  @media only screen and (max-width: 600px) {
    img {
      width: 220px;
    }
  }
}

@media (prefers-reduced-motion: reduce) {
  .marquee__group {
    animation-play-state: paused;
  }
}

.marquee--vertical {
  --mask-direction: to bottom;
}

.marquee--vertical,
.marquee--vertical .marquee__group {
  flex-direction: column;
}

.marquee--vertical .marquee__group {
  animation-name: scroll-y;
}

.marquee--reverse .marquee__group {
  animation-direction: reverse;
  animation-delay: -3s;
}

@keyframes scroll-x {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% - 25px));
  }
}

@keyframes scroll-y {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(calc(-100% - 25px));
  }
}

/* Element styles */
.marquee svg, img {
  display: grid;
  place-items: center;
  width: 300px;
  fill: #000;
  background: #fff;
  aspect-ratio: 16/9;
  padding: calc(300px / 10);
  border-radius: 0.5rem;
}

/* Parent wrapper */
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin: auto;
  max-width: 100vw;
}

.wrapper--vertical {
  flex-direction: row;
  height: 100vh;
}


@keyframes fade {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
</style>
