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
      const orderId = route.query.orderId
      const userId = route.query.userId

      if (orderId && userId) {
        try {
          const response = await axios.get(
            `https://okoshko.ua/api/orders/${orderId}?userId=${userId}`
          )
          const style = `<style>
          .frame {
            -moz-transition: all 0.2s linear;
            -webkit-transition: all 0.2s linear;
            transition: all 0.2s linear;
            fill: #f9f9f9;
            stroke: #363636;
            stroke-width: 2;
          }

          .col-md-12 {
            color: rebeccapurple;
          }

          .col-md-6 {
            color: rebeccapurple;
          }

          .frame-icon {
            fill: #aaa;
            stroke: #000;
            stroke-width: 4;
          }

          .glass {
            -moz-transition: all 0.1s linear;
            -webkit-transition: all 0.1s linear;
            transition: all 0.1s linear;
            fill: rgba(155, 204, 255, 0.2);
          }

          .glass-icon {
            fill: #94DEEE;
          }

          .active_svg, .frame-active, .glass-active, .corner_mark {
            fill: rgba(34, 34, 255, 0.5) !important;
          }

          .sash_mark {
            fill: none;
            stroke: #f98000;
            stroke-width: 2;
          }

          .corner_mark {
            stroke: none;
          }

          .handle-mark {
            fill: #f9f9f9;
            stroke: #5E5E5E;
            stroke-width: 1;
          }

          .error_glass {
            fill: #f74f2e;
          }

          .dim_blockX, .dim_blockY {
            -moz-transition: all 0.5s linear;
            -webkit-transition: all 0.5s linear;
            transition: all 0.5s linear;
          }

          .dim_shiftX {
            -moz-transform: translate(0, -150px);
            -ms-transform: translate(0, -150px);
            -webkit-transform: translate(0, -150px);
            transform: translate(0, -150px);
          }

          .dim_shiftY {
            -moz-transform: translate(-200px, 0);
            -ms-transform: translate(-200px, 0);
            -webkit-transform: translate(-200px, 0);
            transform: translate(-200px, 0);
          }

          .dim_block {
            -moz-transition: all 0.5s linear;
            -webkit-transition: all 0.5s linear;
            transition: all 0.5s linear;
            opacity: 1;
            visibility: visible;
          }

          .dim_hidden {
            opacity: 0;
            visibility: hidden;
          }

          .size-line {
            fill: none;
            stroke: #000;
            stroke-width: 1;
          }

          .size-rect {
            width: 160px;
            height: 70px;
            rx: 20px;
            ry: 20px;
            stroke: #6ed44a;
            stroke-width: 3px;
            fill-opacity: 0;
          }

          .size-rect.active {
            fill: #6ed44a;
            fill-opacity: 1;
          }

          .size-txt, .size-txt-edit {
            font-size: 5.625rem;
            stroke: #000;
            stroke-width: 1px;
            text-anchor: middle;
            alignment-baseline: middle;
          }

          .size-txt-edit {
            stroke: #6ed44a;
            fill: #6ed44a;
          }
          .size-txt-edit.active {
            stroke: #fff;
            fill: #fff;
          }

          .doorstep {
            fill: #4f4f4f;
            stroke: #4f4f4f;
          }

          .main-line {
            fill: #363636;
          }

          body {
            /*background-color: #e3e3e3;*/
            padding-top: 5px;
          }

          @media print {
            #view-selector, #payment {
              display: none;
            }
          }

          #view-selector, #view-payment {
            text-align: right;
            padding-right: 25px;
          }

          #view-order,
          #view-invoice {
            text-decoration: none;
            color: #333;
          }

          #view-order.selected,
          #view-invoice.selected {
            color: #F44336;
          }

            #wrapper, #payment {
              background-color: #fff;
              width: 750px;
              margin: 0px auto;
              padding: 10px;
            }

              .product-top {
                min-height: 50px;
                margin-top: 20px;
                max-height: 50px;
              }

              .product {
                position: relative;
                min-height: 250px;
                max-height: 250px;
              }

                .product-container {
                }

                .product-counter {
                  width: 30px;
                  height: 30px;
                  text-align: center;
                  border-radius: 50%;
                  background-color: #cecece;
                  position: relative;
                  top: -10px;
                }

                  .counter-align {
                    position: relative;
                    top: 5px;
                  }

                  .product-description {
                    position: relative;
                    margin-left: 10px;
                    color: #283891;
                    font-size: 12px;
                    height: 46px;
                  }

                  .addelement-header {
                    margin-left: 10px;
                  }

                  .addelement-name {
                    position: relative;
                    top: 10px;
                    margin-left: 10px;
                  }

                  .addelement-description {
                    position: absolute;
                    top: 50px;
                    margin-left: 10px;
                    color: #283891;
                    font-size: 16px;
                    height: 46px;
                  }

                  .additional-logo {
                    height: 250px;
                    width: 300px;
                    position: relative;
                    left: 60px;
                    top: -18px;
                    display: inline-block;
                  }

                  .schemes {
                    position: relative;
                    max-height: 240px;
                    min-height: 240px;
                  }

                  table.product-table {
                    font-size: 12px!important;
                    width: 100%;
                  }

                  .product-table td {
                      border-bottom: 1px solid #d1d2d4;
                      padding: 2px;
                    }

                    .grey-line {
                      background: #e4e4e4;
                    }

              .warning-label {
                font-size: 12px;
              }

              span.signature {
                border-bottom: 1px solid #a3a3a3;
                min-width: 100px;
                min-height: 14px;
                width: 1%;
                height: 1%;
              }

              span.signature:after {
                content: '_______________________________';
                visibility: hidden;
              }

              .bound {
                max-height: 310px;
                min-height: 310px;
              }

              .construct-divider {
                display: block;
                height: 180px;
                max-height: 180px; 
                min-height: 180px;
              }

              hr {
                margin: 2px!important;
                clear: both;
              }


            .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11 {
              color: #000;
              box-sizing: border-box;
              position: relative;
              min-height: 1px;
              padding-right: 5px;
              padding-left: 5px;
              float: left;
              padding-top: 2px;
              padding-bottom: 2px;
            }

            .col-md-7 {
              width: 100%;
              white-space: nowrap;
              font-size: 12px;
            }

            .row {
              display: flex;
              flex-direction: row;
              justify-content: space-between;
            }

          .sum_letters{
            font-style: italic;
            font-weight: 700;
            font-size: 115%!important;
          }
          p, td {
            color: #000;
          }
          </style>`
          htmlData.value = style + response.data
          loadExternalScript('https://okoshko.ua/jquery-1.11.2.min.js')
          setTimeout(() => {
            loadExternalScript('https://okoshko.ua/d3.min.js')
          }, 200)
          setTimeout(() => {
            loadExternalScript('https://okoshko.ua/pdf.js')
          }, 200)
          const parser = new DOMParser()
          const doc = parser.parseFromString(htmlData.value, 'text/html')

          // Поиск и замена img
          const imgTags = doc.querySelectorAll('img')
          imgTags.forEach((imgTag) => {
            if (imgTag.src.endsWith('logo.png')) {
              imgTag.src = 'https://okoshko.ua/logo.png'
              imgTag.style.width = '250px'
            }
          })
          htmlData.value = doc.documentElement.outerHTML
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

    function loadExternalScript(src) {
      const script = document.createElement('script')
      script.src = src
      script.async = true
      document.head.appendChild(script)
    }

    return { htmlData, loading }
  },
}
</script>
<style lang="scss" scoped>
.content {
  padding: 20px;
}
</style>
