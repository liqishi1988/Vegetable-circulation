import { showToast } from '../../../data/mock'
Page({
  onLoad() { wx.setNavigationBarTitle({ title: '运输位置' }) },
  call() { showToast('正在联系司机') },
  exception() { showToast('异常上报入口已打开') }
})
