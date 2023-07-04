import { createApp, reactive, Component } from 'vue';
import MessageDialog from '@/components/messageDialog.vue';
export const showDialog = (options: any) => {
	const { instance } = mountComponent(MessageDialog, options);
	return instance;
};

// 生成实例并挂载
function mountComponent(RootComponent: Component, options:any) {
	const app = createApp(RootComponent, {...options,show:true});
	const root = document.createElement('div');
	document.body.appendChild(root);

	return {
		instance: app.mount(root),
		unmount() {
			app.unmount();
			document.body.removeChild(root);
		},
	};
}
