import { products } from '../../data/mock'
Page({
  data: { products: products.slice(0, 2) },
  onLoad() { wx.setNavigationBarTitle({ title: '菜通达' }) },
  toList() { wx.navigateTo({ url: '/pages/market/supply-list/index' }) },
  toPublish() { wx.switchTab({ url: '/pages/publish/index' }) },
  toDemand() { wx.navigateTo({ url: '/pages/demand/publish/index' }) },
  toTrends() { wx.navigateTo({ url: '/pages/market/trends/index' }) },
  toSearch() { wx.navigateTo({ url: '/pages/market/search/index' }) },
  toDetail() { wx.navigateTo({ url: '/pages/supply/detail/index' }) },
  toQuote() { wx.navigateTo({ url: '/pages/quote/create/index' }) }
})
