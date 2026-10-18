import { showToast } from '../../../data/mock'
Page({
  data: { steps: ['基本信息','需求详情','联系方式','发布完成'], matched: true },
  onLoad() { wx.setNavigationBarTitle({ title: '发布求购' }) },
  toggle() { this.setData({ matched: !this.data.matched }) },
  submit() { showToast('求购发布成功'); setTimeout(()=>wx.switchTab({url:'/pages/messages/index'}),700) }
})
