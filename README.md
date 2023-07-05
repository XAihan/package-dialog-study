
```js
// 使用demo
import { showDialog } from "./components/showDialog";

const mockData  = {
title:'这里是标题',
confirmBtnText: '我知道了1',
   cancelBtnText: '取消',
smallBtnText:'隐蔽一点',
   tips:'这里是最底部的tips',
defaultMode:{
   desc:['放款成功后，可在“我的-我的订单-','加速卡-查看权益”，查看并使用特惠权益'],
   img:'https:www.haohuan.com/datahub/gfs/2023-03/f1eb6b530a512b7f300a2baeb4810fe1.png',
},
}

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
```