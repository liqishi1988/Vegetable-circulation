type Spot={x:number;y:number;w:number;h:number;url?:string;mode?:'nav'|'root'|'back'|'toast';message?:string}
type ScreenConfig={name:string;hotspots:Spot[]}
const root=(x:number,y:number,w:number,h:number,url:string):Spot=>({x,y,w,h,url,mode:'root'})
const nav=(x:number,y:number,w:number,h:number,url:string):Spot=>({x,y,w,h,url,mode:'nav'})
const back=(x=0,y=0,w=14,h=9):Spot=>({x,y,w,h,mode:'back'})
const toast=(x:number,y:number,w:number,h:number,message='功能已开启'):Spot=>({x,y,w,h,mode:'toast',message})
const screens:Record<string,ScreenConfig>={
  'pages/market/index':{name:'market',hotspots:[root(81,1,15,7,'/pages/messages/index'),nav(5,13,90,6,'/pages/market/search/index'),nav(3,30,46,10,'/pages/market/supply-list/index'),root(51,30,46,10,'/pages/publish/index'),nav(3,41,94,9,'/pages/demand/publish/index'),nav(2,52,96,17,'/pages/market/trends/index'),nav(2,73,96,18,'/pages/supply/detail/index'),root(20,91,12,9,'/pages/publish/index'),root(43,91,12,9,'/pages/messages/index'),root(65,91,12,9,'/pages/orders/index'),root(86,91,12,9,'/pages/me/index')]},
  'pages/market/supply-list/index':{name:'supply-list',hotspots:[back(),nav(86,0,14,9,'/pages/market/search/index'),nav(2,15,96,19,'/pages/supply/detail/index'),nav(2,35,96,19,'/pages/supply/detail/index'),nav(2,55,96,19,'/pages/supply/detail/index'),nav(69,25,28,7,'/pages/quote/create/index'),nav(69,45,28,7,'/pages/quote/create/index'),nav(69,65,28,7,'/pages/quote/create/index')]},
  'pages/publish/index':{name:'publish',hotspots:[back(),toast(3,21,31,17,'请选择货源图片'),toast(37,21,58,17,'图片预览'),nav(4,86,92,8,'/pages/supply/manage/index')]},
  'pages/market/search/index':{name:'search',hotspots:[back(),nav(78,8,20,7,'/pages/market/supply-list/index'),toast(3,91,32,8,'筛选条件已重置'),nav(36,91,61,8,'/pages/market/supply-list/index')]},
  'pages/market/trends/index':{name:'trends',hotspots:[back(),toast(77,8,21,7,'已切换品种'),toast(3,31,94,9,'行情周期已切换')]},
  'pages/settings/index':{name:'settings',hotspots:[back(),nav(2,8,96,12,'/pages/auth/business/index'),toast(2,20,96,65,'设置与帮助内容已打开'),root(4,91,92,8,'/pages/login/index')]},
  'pages/supply/detail/index':{name:'supply-detail',hotspots:[back(),toast(87,0,13,9,'分享成功'),nav(3,73,94,12,'/pages/store/detail/index'),toast(3,91,38,8,'正在联系卖家'),nav(43,91,54,8,'/pages/quote/create/index')]},
  'pages/quote/create/index':{name:'quote-create',hotspots:[back(),nav(3,91,94,8,'/pages/quote/detail/index')]},
  'pages/demand/publish/index':{name:'demand-publish',hotspots:[back(),toast(3,71,94,11,'匹配推荐已切换'),root(3,91,94,8,'/pages/messages/index')]},
  'pages/order/detail/index':{name:'order-detail',hotspots:[back(),toast(88,0,12,9,'更多操作'),toast(3,91,45,8,'正在联系司机'),nav(50,91,47,8,'/pages/fulfillment/tracking/index')]},
  'pages/inspection/index':{name:'inspection',hotspots:[back(),toast(3,24,29,14,'请选择现场照片'),toast(3,73,45,11,'验收通过'),nav(50,73,47,11,'/pages/aftersale/create/index'),root(3,91,94,8,'/pages/orders/index')]},
  'pages/me/index':{name:'me',hotspots:[nav(88,0,12,9,'/pages/settings/index'),nav(2,38,96,9,'/pages/supply/manage/index'),root(2,48,96,18,'/pages/orders/index'),nav(2,68,96,9,'/pages/auth/business/index'),nav(2,78,96,9,'/pages/settings/index'),root(2,91,15,9,'/pages/market/index'),root(20,91,15,9,'/pages/publish/index'),root(42,91,15,9,'/pages/messages/index'),root(64,91,15,9,'/pages/orders/index')]},
  'pages/login/index':{name:'login',hotspots:[root(3,48,94,10,'/pages/market/index'),root(3,61,94,27,'/pages/market/index'),root(3,90,94,8,'/pages/market/index')]},
  'pages/auth/business/index':{name:'auth-business',hotspots:[back(),toast(4,58,43,26,'请选择营业执照'),toast(51,58,44,26,'请选择负责人证件'),nav(3,91,94,8,'/pages/auth/farm/index')]},
  'pages/auth/farm/index':{name:'auth-farm',hotspots:[back(),toast(3,57,94,29,'请选择基地照片'),root(3,91,94,8,'/pages/me/index')]},
  'pages/supply/manage/index':{name:'supply-manage',hotspots:[back(),nav(3,29,29,7,'/pages/supply/edit/index'),toast(33,29,31,7,'库存已更新'),toast(65,29,32,7,'货源已下架'),nav(3,59,29,7,'/pages/supply/edit/index'),root(3,91,94,8,'/pages/publish/index')]},
  'pages/supply/edit/index':{name:'supply-edit',hotspots:[back(),toast(86,0,14,9,'更多操作'),toast(3,91,42,8,'货源已下架'),nav(47,91,50,8,'/pages/supply/manage/index')]},
  'pages/store/detail/index':{name:'store-detail',hotspots:[back(),toast(88,0,12,9,'更多操作'),nav(3,45,94,25,'/pages/supply/detail/index'),toast(3,91,94,8,'正在联系基地')]},
  'pages/messages/index':{name:'messages',hotspots:[nav(2,18,96,14,'/pages/quote/detail/index'),nav(2,35,96,14,'/pages/trade/confirm/index'),nav(2,53,96,14,'/pages/order/detail/index'),nav(2,71,96,14,'/pages/inspection/index'),root(2,91,15,9,'/pages/market/index'),root(20,91,15,9,'/pages/publish/index'),root(64,91,15,9,'/pages/orders/index'),root(85,91,15,9,'/pages/me/index')]},
  'pages/quote/detail/index':{name:'quote-detail',hotspots:[back(),toast(72,0,28,9,'报价记录已展开'),toast(3,91,46,8,'报价修改已开启'),nav(51,91,46,8,'/pages/trade/confirm/index')]},
  'pages/trade/confirm/index':{name:'trade-confirm',hotspots:[back(),nav(3,91,94,8,'/pages/order/detail/index')]},
  'pages/orders/index':{name:'orders',hotspots:[nav(2,14,96,25,'/pages/order/detail/index'),nav(2,40,96,25,'/pages/fulfillment/tracking/index'),nav(2,66,96,25,'/pages/inspection/index'),root(2,91,15,9,'/pages/market/index'),root(20,91,15,9,'/pages/publish/index'),root(42,91,15,9,'/pages/messages/index'),root(85,91,15,9,'/pages/me/index')]},
  'pages/aftersale/create/index':{name:'aftersale-create',hotspots:[back(),toast(3,65,94,22,'请选择问题凭证'),nav(3,91,94,8,'/pages/aftersale/detail/index')]},
  'pages/aftersale/detail/index':{name:'aftersale-detail',hotspots:[back(),toast(3,91,46,8,'已申请平台介入'),root(51,91,46,8,'/pages/orders/index')]},
  'pages/fulfillment/loading/index':{name:'loading',hotspots:[back(),toast(3,25,94,18,'请选择装车照片'),toast(3,72,94,18,'请选择磅单照片'),nav(3,91,94,8,'/pages/fulfillment/tracking/index')]},
  'pages/fulfillment/tracking/index':{name:'tracking',hotspots:[back(),toast(88,0,12,9,'更多操作'),toast(3,91,46,8,'正在联系司机'),nav(51,91,46,8,'/pages/driver/task/index')]},
  'pages/driver/task/index':{name:'driver-task',hotspots:[back(),toast(88,0,12,9,'更多操作'),toast(75,19,22,23,'正在打开导航'),nav(3,91,94,8,'/pages/fulfillment/loading/index')]}
}
Component({data:{screen:'',hotspots:[] as Spot[]},lifetimes:{attached(){const pages=getCurrentPages();const route=pages.length?pages[pages.length-1].route:'pages/market/index';const config=screens[route]||screens['pages/market/index'];this.setData({screen:`/design-screens/${config.name}.jpg`,hotspots:config.hotspots})}},methods:{activate(e:WechatMiniprogram.TouchEvent){const spot:Spot=this.data.hotspots[Number(e.currentTarget.dataset.index)];if(!spot)return;if(spot.mode==='back'){wx.navigateBack({fail:()=>wx.reLaunch({url:'/pages/market/index'})});return}if(spot.mode==='toast'){wx.showToast({title:spot.message||'功能已开启',icon:'none'});return}if(!spot.url)return;if(spot.mode==='root')wx.reLaunch({url:spot.url});else wx.navigateTo({url:spot.url})}}})
