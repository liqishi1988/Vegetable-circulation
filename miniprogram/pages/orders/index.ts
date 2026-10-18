import { products, showToast } from '../../data/mock'
Page({
  data: { active: '全部', tabs: ['全部','待付款','待装车','运输中','待验收'], products: products.slice(0,3), statuses: ['待装车','运输中','待验收'] },
  onLoad() { wx.setNavigationBarTitle({ title: '我的订单' }) },
  select(e: WechatMiniprogram.TouchEvent) { this.setData({ active: e.currentTarget.dataset.value }) },
  open(e: WechatMiniprogram.TouchEvent) { const i=Number(e.currentTarget.dataset.index); wx.navigateTo({url:i===2?'/pages/inspection/index':i===1?'/pages/fulfillment/tracking/index':'/pages/order/detail/index'}) },
  call() { showToast('正在联系卖家') }
})
