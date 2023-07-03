<template>
  <div v-if="dialogShow" class="dialog-container">
    <div class="overlay">
      <div class="inner">
        <div v-if="title" class="title">{{ title }}</div>
        <div class="content" :style="{ height: contentHeight, overflow: overHeight }">
          <div class="default" v-for="(value,key) in defaultMode">
            <div v-if="key === 'desc' && value!.length > 0" class="desc">
              <div v-for="item in value">{{ item }}</div>
            </div>
            <div v-if="key === 'img'" class="desc-img">
              <img :src="defaultMode.img" alt="">
            </div>
          </div>
          <slot></slot>
        </div>
        <div class="footer">
          <div class="btn" :style="{ color: btnColor }" @click="confirmClick">{{ btnText }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup lang="ts" >
import { defineProps, defineEmits, withDefaults,ref } from "vue";

interface DefaultMode{
  img: string,
  desc?: Array<String>
}
const props = withDefaults(defineProps<{
  show: boolean,
  btnText: string,
  btnColor: string,
  contentHeight: string,
  overHeight: string,
  confirmClick:Function,
  defaultMode: DefaultMode,
  title?: string,
}>(), {
  show: false,
  btnText: '我知道了',
  btnColor: '#ffffff',
  overHeight: 'normal',
  contentHeight: 'normal',
  defaultMode: {
    desc:[],
    img:'',
  },
  confirmClick:()=>{
    console.log('默认的click');
  }
})


const dialogShow = ref(props.show)
console.log('props', props);

const emit = defineEmits(['confirmClick']);
const confirmClick = () => {
  console.log('里面的click');
  dialogShow.value = false
  props.confirmClick()
  emit('confirmClick');
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
  display: flex;
  align-items: center;
  justify-content: center;

  .inner {
    width: 295px;
    box-sizing: border-box;
    background: white;
    border-radius: 8px;
    overflow: hidden;

    .title {
      height: 48px;
      box-sizing: border-box;
      padding: 24px 0 0px;
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
        font-weight: 600;
      }
    }
  }
}

// 默认模板的样式
.default {
  .desc {
    padding: 12px 20px 0;
    font-weight: 400;
    color: #919199;
    line-height: 24px;
    font-size: 14px;
    margin-top: 4px;
    text-align: center;
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
  