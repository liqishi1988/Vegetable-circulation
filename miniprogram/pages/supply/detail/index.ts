import { products, showToast } from '../../../data/mock'
Page({
  data: { product: products[0] },
  onLoad() { wx.setNavigationBarTitle({ title: '现货详情' }) },
  toStore() { wx.navigateTo({ url: '/pages/store/detail/index' }) },
  toQuote() { wx.navigateTo({ url: '/pages/quote/create/index' }) },
  call() { showToast('正在发起模拟通话') }
})
