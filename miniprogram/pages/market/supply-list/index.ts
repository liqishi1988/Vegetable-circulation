import { products } from '../../../data/mock'
Page({
  data: { products, active: '品类', tabs: ['品类','产地','装车时间','距离'] },
  onLoad() { wx.setNavigationBarTitle({ title: '现货市场' }) },
  selectTab(e: WechatMiniprogram.TouchEvent) { this.setData({ active: e.currentTarget.dataset.value }) },
  toDetail() { wx.navigateTo({ url: '/pages/supply/detail/index' }) },
  toQuote() { wx.navigateTo({ url: '/pages/quote/create/index' }) }
})
