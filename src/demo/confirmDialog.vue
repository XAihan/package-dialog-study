<template>
  <ConfirmDialog :show="show" :title="'加速卡购买成功'" @confirmClick="hideDialog">
    <div class="desc">
      <div>放款成功后，可在“我的-我的订单-</div>
      <div>加速卡-查看权益”，查看并使用特惠权益</div>
    </div>
    <div class="desc-img">
      <img src="https://www.haohuan.com/datahub/gfs/2023-03/f1eb6b530a512b7f300a2baeb4810fe1.png" alt="">
    </div>
  </ConfirmDialog>
</template>
    
<script setup>
import { defineProps, defineEmits } from "vue";
import ConfirmDialog from '@/components/confirmDialog.vue'

defineProps({
  show: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits('changeRuleDialog');
const hideDialog = () => {
  emit('changeRuleDialog');
};
</script>
    
<style scoped lang="scss">
.dialog-container {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.6);

  .inner {
    width: 295px;
    height: 426px;
    box-sizing: border-box;
    background: white;
    border-radius: 8px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;

    .title {
      padding: 24px 0 12px;
      font-size: 17px;
      font-weight: bold;
      color: #2e2e33;
      text-align: center;
    }

    .content {
      .desc {
        padding: 0 20px 0;
        font-weight: 400;
        color: #919199;
        line-height: 24px;
        font-size: 14px;
        margin-top: 4px;
      }

      .desc-img {
        margin-top: 16px;
        width: 100%;
        min-height: 213px;

        img {
          width: 100%;
        }
      }
    }

    .footer {
      background: white;
      display: flex;
      justify-content: center;

      .btn {
        margin-top: 12px;
        width: 251px;
        height: 46px;
        background: #ff3838;
        border-radius: 25px;
        color: #ffffff;
        text-align: center;
        line-height: 46px;
        font-size: 16px;
        font-weight: 500;
      }
    }
  }
}
</style>
    