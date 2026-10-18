import { products, showToast } from '../../../data/mock'
Page({
  data: { product: products[0], step: 0 },
  onLoad() { wx.setNavigationBarTitle({ title: '司机任务' }) },
  navigate() { showToast('已打开路线导航') },
  arrive() { this.setData({step:1}); showToast('已记录到达提货点') }
})
