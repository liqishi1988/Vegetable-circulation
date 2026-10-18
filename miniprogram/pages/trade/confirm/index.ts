import { products, showToast } from '../../../data/mock'
Page({
  data: { product: products[0] },
  onLoad() { wx.setNavigationBarTitle({ title: '交易确认单' }) },
  confirm() { showToast('正式订单已生成'); setTimeout(()=>wx.navigateTo({url:'/pages/order/detail/index'}),700) }
})
