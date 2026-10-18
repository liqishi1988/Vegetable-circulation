import { products, showToast } from '../../../data/mock'
Page({
  data: { products: products.slice(0,2), active: 'selling', tabs: [{key:'selling',label:'在售 4'},{key:'review',label:'待审核 1'},{key:'offline',label:'已下架 8'}] },
  onLoad() { wx.setNavigationBarTitle({ title: '我的货源' }) },
  select(e: WechatMiniprogram.TouchEvent) { this.setData({ active: e.currentTarget.dataset.key }) },
  edit() { wx.navigateTo({ url: '/pages/supply/edit/index' }) },
  stock() { showToast('库存已增加500斤') },
  offline() { showToast('货源已下架') },
  publish() { wx.switchTab({ url: '/pages/publish/index' }) }
})
