import { showToast } from '../../../data/mock'
Page({
  data: { steps: ['基本信息','现场资料','提交审核'] },
  onLoad() { wx.setNavigationBarTitle({ title: '基地认证' }) },
  submit() { showToast('认证资料已提交'); setTimeout(() => wx.switchTab({ url: '/pages/me/index' }), 700) }
})
