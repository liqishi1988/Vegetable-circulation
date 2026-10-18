import { showToast } from '../../../data/mock'
Page({
  data: { steps: ['基本信息','证件资料','提交审核'] },
  onLoad() { wx.setNavigationBarTitle({ title: '经营主体认证' }) },
  upload() { showToast('已添加模拟证件') },
  next() { wx.navigateTo({ url: '/pages/auth/farm/index' }) }
})
