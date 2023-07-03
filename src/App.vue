<template>
  <div>
    <div class="btn" @click="showConfirm(1)">open dialog1</div>
    <!-- <MessageDialogDemo :show="dialogShow == 1" @confirmClick="confirmClick"></MessageDialogDemo> -->

    <!-- <div class="btn" @click="showConfirm(2)">open dialog2</div>
    <ConfirmDialog :show="dialogShow == 2" @confirmClick="confirmClick"></ConfirmDialog> -->
  </div>
</template>

<script setup lang="ts">
// import MessageDialogDemo from '@/demo/messageDialog.vue'
import { showDialog } from "./components/showDialog";
// import ConfirmDialog from '@/demo/confirmDialog.vue'
import { ref } from "vue";
const dialogShow = ref(0)

const showConfirm = (index: number) => {
  dialogShow.value = index
}

const confirmClick = () => {
  console.log('外面的click');
  dialogShow.value = 0
}

showDialog({
  title:'这里是标题',
  btnText: '我知道了',
  defaultMode:{
    desc:['放款成功后，可在“我的-我的订单-','加速卡-查看权益”，查看并使用特惠权益','1234123'],
    // img:'https://www.haohuan.com/datahub/gfs/2023-03/f1eb6b530a512b7f300a2baeb4810fe1.png',
  },
  confirmClick:()=>{
    console.log('外面的click');
  }
})

</script>

<style scoped lang="scss">
.btn {
  width: 200px;
  height: 60px;
  border: 1px solid black;
  text-align: center;
  line-height: 60px;
}
</style>
