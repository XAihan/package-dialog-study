<template>
	<div v-if="dialogShow" class="dialog-container">
		<div class="overlay">
			<div class="inner">
				<div v-if="title" class="title">{{ title }}</div>
				<div class="content" :class="{ 'is-top': !title }" :style="{ height: contentHeight, overflow: overflowStyle }">
					<div class="default" v-if="defaultMode" v-for="(value, key) in defaultMode">
						<div v-if="key === 'desc' && value!.length > 0" class="desc">
							<div v-for="item in value">{{ item }}</div>
						</div>
						<div v-if="key === 'img' && value" class="desc-img">
							<img :src="defaultMode.img" alt="" />
						</div>
					</div>
					<slot></slot>
				</div>
				<div class="footer" :class="{'only-btn': !smallBtnText && !tips}">
					<div v-if="cancelBtnText" class="btn-list">
						<div class="btn cancel" :style="{ color: cancelBtnColor }" @click="cancelClick">{{ cancelBtnText }}</div>
						<div class="btn" :style="{ color: confirmBtnColor }" @click="confirmClick">{{ confirmBtnText }}</div>
					</div>
					<div class="btn" v-else :style="{ color: confirmBtnColor }" @click="confirmClick">{{ confirmBtnText }}</div>
					<div v-if="smallBtnText" class="small-btn" @click="smallClick">{{ smallBtnText }}</div>
					<div v-if="tips" class="tips">
						{{ tips }}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import {  defineEmits, withDefaults,ref,watch } from "vue";

interface DefaultMode{
  img: string,
  desc?: Array<String>
}
const props = withDefaults(defineProps<{
  show: boolean,            // 是否显示
  confirmBtnText?: string,  // 确认按钮的文字
  confirmBtnColor?: string, // 确认按钮的颜色
  cancelBtnColor?: string, // 取消按钮的文字
  cancelBtnText?: string, // 取消按钮的颜色
  contentHeight?: string, // 内容部分的高度
  overflowStyle?: string, // 超出高度的话处理方式  overflow属性值 scroll auto等
  confirmClick?:Function, // 点击确认按钮的回调（return  false）则触发回调不关闭弹窗
  cancelClick?:Function, //  点击取消按钮的回调（return  false）则触发回调不关闭弹窗
  smallClick?:Function, // 点击隐蔽底部按钮的回调（return  false）则触发回调不关闭弹窗
  defaultMode?: DefaultMode, // 默认内容，支持desc string['测试文案'], img: ''.
  title?: string, // 头部标题
  smallBtnText?:string, // 小按钮的文案
  tips?:string // 底部tips的文案
}>(), {
  show: false,
  confirmBtnText: '我知道了',
  overflowStyle: 'normal',
  contentHeight: 'normal',
  defaultMode:()=> {
    return {
      desc:[],
      img:'',
    }
  },
  // confirmClick:()=>{},
  // cancelClick:()=>{},
  // smallClick:()=>{},
})

// 进行监听
watch(()=>props.show,(newVal,oldVal)=>{
  dialogShow.value = newVal
},{deep:true})

const dialogShow = ref(props.show)

const emit = defineEmits(['confirmClick','cancelClick','smallClick']);
const confirmClick = () => {
  props.confirmClick && props.confirmClick() && (dialogShow.value = false)
  emit('confirmClick');
};

const cancelClick = () => {
  props.cancelClick && props.cancelClick() && (dialogShow.value = false)
  emit('cancelClick');
}

const smallClick = () => {
  props.smallClick && props.smallClick() && (dialogShow.value = false)
  emit('smallClick');
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

		.is-top {
			padding: 24px 0 0px;
		}

		.footer {
			background: white;
			margin-top: 20px;
      &.only-btn{
        margin-bottom: 20px;
      }

			.btn-list {
				display: flex;
				justify-content: space-between;
				width: 255px;
				height: 44px;
				margin: auto;
				.btn {
					width: 120px;
					height: 44px;
				}
				.cancel {
					background: none;
					border: 1px solid #c8c8cc;
					box-sizing: border-box;
					color: #2e2e33;
				}
			}

			.btn {
				width: 255px;
				height: 46px;
				background: #ff3838;
				border-radius: 22px;
				color: #ffffff;
				text-align: center;
				line-height: 46px;
				font-size: 16px;
				font-weight: 600;
				margin: auto;
			}
			.small-btn {
				font-weight: 400;
				color: #919199;
				line-height: 15px;
				font-size: 13px;
				text-align: center;
				margin-top: 16px;
				margin-bottom: 20px;
			}
			.tips {
				font-weight: 400;
				color: #c6cace;
				line-height: 12px;
				font-size: 11px;
				text-align: center;
				margin-top: 20px;
				padding-bottom: 10px;
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
