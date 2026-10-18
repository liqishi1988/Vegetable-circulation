import { showToast } from '../../data/mock'
Page({
  data: { current: 1, steps: ['图片','规格','价格数量','交付'] },
  onLoad() { wx.setNavigationBarTitle({ title: '发布现货' }) },
  upload() { showToast('已添加模拟图片') },
  next() { if (this.data.current < 4) this.setData({ current: this.data.current + 1 }); else { showToast('货源发布成功'); setTimeout(()=>wx.navigateTo({url:'/pages/supply/manage/index'}),700) } }
})
