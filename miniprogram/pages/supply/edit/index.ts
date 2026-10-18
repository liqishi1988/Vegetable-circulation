import { showToast } from '../../../data/mock'
Page({
  onLoad() { wx.setNavigationBarTitle({ title: '编辑货源' }) },
  upload() { showToast('已添加模拟图片') },
  offline() { showToast('货源已下架') },
  save() { showToast('修改已保存') }
})
