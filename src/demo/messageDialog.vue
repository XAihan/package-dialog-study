<template>
  <MessageDialog :show="show" :title="'加速卡购买成功'" @confirmClick="hideDialog" contentHeight="288px" overHeight="hidden" >
    <div class="desc">
      <div>放款成功后，可在“我的-我的订单-</div>
      <div>加速卡-查看权益”，查看并使用特惠权益</div>
    </div>
    <div class="desc-img">
      <img src="https://www.haohuan.com/datahub/gfs/2023-03/f1eb6b530a512b7f300a2baeb4810fe1.png" alt="">
    </div>
  </MessageDialog>
</template>
  
<script setup>
import { defineProps, defineEmits } from "vue";
import MessageDialog from '@/components/messageDialog.vue'

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
</style>
  