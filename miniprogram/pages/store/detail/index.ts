import { products, showToast } from '../../../data/mock'
Page({
  data: { products: products.slice(0,2) },
  onLoad() { wx.setNavigationBarTitle({ title: '寿光绿源蔬菜基地' }) },
  call() { showToast('正在联系基地') },
  toDetail() { wx.navigateTo({ url: '/pages/supply/detail/index' }) }
})
