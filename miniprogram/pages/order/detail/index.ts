import { products, showToast } from '../../../data/mock'
Page({
  data: { product: products[0], steps: ['已确认','已付款','已装车','运输中','待验收'] },
  onLoad() { wx.setNavigationBarTitle({ title: '订单详情' }) },
  tracking() { wx.navigateTo({ url: '/pages/fulfillment/tracking/index' }) },
  loading() { wx.navigateTo({ url: '/pages/fulfillment/loading/index' }) },
  call() { showToast('正在联系司机') }
})
