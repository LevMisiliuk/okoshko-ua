<template>
  <div v-if="loading">Загрузка...</div>
  <div class="content" v-else v-html="htmlData"></div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

export default {
  name: 'OrdersComponent',
  setup() {
    const route = useRoute()
    const htmlData = ref('')
    const loading = ref(true)

    onMounted(async () => {
      // получаем параметры из URL
      const orderId = route.query.orderId
      const userId = route.query.userId

      if (orderId && userId) {
        try {
          const response = await axios.get(
            `https://okoshko.ua/api/orders/${orderId}?userId=${userId}`
          )
          htmlData.value = response.data
        } catch (e) {
          console.log(e)
          htmlData.value = 'Ошибка при получении данных'
        } finally {
          loading.value = false
        }
      } else {
        htmlData.value = 'Некорректные параметры'
        loading.value = false
      }
    })

    return { htmlData, loading }
  },
}
</script>
<style lang="scss" scoped>
.content {
  padding: 20px;
  p {
    color: green;
    font-size: 24px;
  }
}
</style>
