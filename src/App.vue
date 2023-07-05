<template>
	<div>
		<div class="btn" @click="openDialog">打开弹窗</div>
		<MessageDialog :show="show" :title="mockData.title" :cancelBtnText="mockData.cancelBtnText" :confirmBtnText="mockData.confirmBtnText" :defaultMode="mockData.defaultMode" @confirmClick="confirmClick">
			<div>这里是mock数据</div>
		</MessageDialog>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { showDialog, MessageDialog } from './components/showDialog';
// import MessageDialog from './components/messageDialog.vue'

const show = ref(false);
const openDialog = () => {
	show.value = true;
};

const confirmClick = () => {
	console.log('这里是结束了');
	show.value = false;
};

const mockData = {
	title: '这里是标题',
	confirmBtnText: '我知道了1',
	cancelBtnText: '取消',
	smallBtnText: '隐蔽一点',
	tips: '这里是最底部的tips',
	defaultMode: {
		desc: ['放款成功后，可在“我的-我的订单-', '加速卡-查看权益”，查看并使用特惠权益'],
		img: 'https://www.haohuan.com/datahub/gfs/2023-03/f1eb6b530a512b7f300a2baeb4810fe1.png',
	},
};

showDialog({
  ...mockData,
  confirmClick:()=>{
    console.log('外面的click');
    return true
  },
  cancelClick: () => {
    console.log('外面的取消click');
  },
  smallClick: () => {
    console.log('外面的小按钮click');
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
