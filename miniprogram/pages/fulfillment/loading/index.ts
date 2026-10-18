import { products, showToast } from '../../../data/mock'
Page({
  data: { product: products[0] },
  onLoad() { wx.setNavigationBarTitle({ title: '装车确认' }) },
  upload() { showToast('已添加模拟图片') },
  confirm() { showToast('已确认装车并发车'); setTimeout(()=>wx.navigateTo({url:'/pages/fulfillment/tracking/index'}),700) }
})
