import { products, showToast } from '../../data/mock'

Page({
  data: { product: products[0], mode: 'pass', uploads: ['🥬', '📦'], grades: ['符合约定', '部分不符', '严重不符'], packages: ['完好', '轻微破损', '严重破损'] },
  onLoad() { wx.setNavigationBarTitle({ title: '到货验收' }) },
  selectMode(e: WechatMiniprogram.TouchEvent) { this.setData({ mode: e.currentTarget.dataset.mode }) },
  addPhoto() { showToast('已添加验收照片') },
  confirm() {
    if (this.data.mode === 'issue') { wx.navigateTo({ url: '/pages/aftersale/create/index' }); return }
    showToast('验收完成，货款将按约结算')
    setTimeout(() => wx.switchTab({ url: '/pages/orders/index' }), 700)
  }
})
