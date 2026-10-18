import { products, showToast } from '../../../data/mock'
Page({
  data: { product: products[0] },
  onLoad() { wx.setNavigationBarTitle({ title: '报价详情' }) },
  history() { showToast('已展开报价记录') },
  modify() { showToast('报价修改功能已开启') },
  accept() { wx.navigateTo({ url: '/pages/trade/confirm/index' }) }
})
