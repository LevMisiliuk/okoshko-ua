<template>
<MqResponsive class="container-xs" :target="['xs', 'sm', 'md', 'lg', 'xl']">
    <IntroSection />
    <AboutSection />
    <BenefitsSection />
    <CalcSection />
    <FormSection />
  </MqResponsive>
  <MqResponsive class="container-xxl" target="xxl">
    <IntroSectionXxl />
    <AboutSectionXxl />
    <BenefitsSectionXxl />
    <CalcSectionXxl />
    <FormSectionXxl />
  </MqResponsive>
  <FooterSectionXxl />
</template>

<script>
import IntroSection from './IntroSection.vue'
import AboutSection from './AboutSection.vue'
import BenefitsSection from './BenefitsSection'
import CalcSection from './CalcSection.vue'
import FormSection from './FormSection.vue'
// import FooterSection from './FooterSection.vue'
// xxl
import IntroSectionXxl from './xxl/IntroSectionXxl.vue'
import AboutSectionXxl from './xxl/AboutSectionXxl.vue'
import BenefitsSectionXxl from './xxl/BenefitsSectionXxl.vue'
import CalcSectionXxl from './xxl/CalcSectionXxl.vue'
import FormSectionXxl from './xxl/FormSectionXxl.vue'
import FooterSectionXxl from './xxl/FooterSectionXxl.vue'
import { onMounted } from 'vue'
import { MqResponsive } from 'vue3-mq'
import { updateBreakpoints } from 'vue3-mq'

export default {
  name: 'MainComponent',
  components: {
    IntroSection,
    MqResponsive,
    AboutSection,
    BenefitsSection,
    CalcSection,
    FormSection,
    //xxl
    IntroSectionXxl,
    AboutSectionXxl,
    BenefitsSectionXxl,
    CalcSectionXxl,
    FormSectionXxl,
    FooterSectionXxl
  },
  setup() {
    onMounted(() => {
      updateBreakpoints({
        preset: 'bootstrap5'
      })
    })
    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>