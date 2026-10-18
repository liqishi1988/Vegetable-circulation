Page({
  data: { role: 'farmer' },
  onLoad() { wx.setNavigationBarTitle({ title: '欢迎使用菜通达' }) },
  chooseRole(e: WechatMiniprogram.TouchEvent) { this.setData({ role: e.currentTarget.dataset.role }) },
  login() {
    const app = getApp<any>()
    app.globalData.role = this.data.role
    app.globalData.authenticated = true
    wx.switchTab({ url: this.data.role === 'farmer' ? '/pages/market/index' : '/pages/market/index' })
  },
  skip() { wx.switchTab({ url: '/pages/market/index' }) }
})
