<template>
  <div v-if="show" class="dialog-container">
    <div class="overlay">
      <div class="inner">
        <div class="title">{{ title }}</div>
        <div class="content">
          <slot></slot>
        </div>
        <div class="footer">
          <div class="btn" :style="{ color: cancelBtnColor }" @click="cancelClick">{{ cancelBtnText }}</div>
          <div class="btn" :style="{ color: confirmBtnColor }" @click="confirmClick">{{ confirmBtnText }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup lang="ts" >
import { defineProps, defineEmits } from "vue";
defineProps({
  show:Boolean,
  title:String,
  confirmBtnText:String,
  confirmBtnColor:String,
  cancelBtnText:String,
  cancelBtnColor:String,
})

const emit = defineEmits(['confirmClick','cancelClick']);
const confirmClick = () => {
  emit('confirmClick');
};
const cancelClick = ()=>{
  emit('cancelClick');
}
</script>
  
<style scoped lang="scss">
.dialog-container {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;

  .inner {
    width: 305px;
    box-sizing: border-box;
    background: white;
    border-radius: 8px;

    .title {
      height: 60px;
      box-sizing: border-box;
      padding: 24px 0 12px;
      font-size: 17px;
      font-weight: bold;
      color: #2e2e33;
      text-align: center;
    }

    .footer {
      background: white;
      display: flex;
      justify-content: center;
      height: 78px;
      box-sizing: border-box;

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
}</style>
  