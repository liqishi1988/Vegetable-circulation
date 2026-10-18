Component({
  properties: {
    title: { type: String, value: '' },
    back: { type: Boolean, value: true },
    action: { type: String, value: '' },
    light: { type: Boolean, value: false }
  },
  methods: {
    goBack() { wx.navigateBack({ fail: () => wx.switchTab({ url: '/pages/market/index' }) }) },
    actionTap() { this.triggerEvent('action') }
  }
})
