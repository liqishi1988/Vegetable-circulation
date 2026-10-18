import { products, showToast } from '../../../data/mock'
Page({
  data: { product: products[0] },
  onLoad() { wx.setNavigationBarTitle({ title: '在线询价' }) },
  submit() { showToast('询价已提交'); setTimeout(()=>wx.navigateTo({url:'/pages/quote/detail/index'}),700) }
})
