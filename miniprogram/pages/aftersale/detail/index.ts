import { products, showToast } from '../../../data/mock'
Page({
  data: { product: products[0], steps: ['提交问题', '卖方查看', '协商方案', '处理完成'] },
  onLoad() { wx.setNavigationBarTitle({ title: '售后详情' }) },
  platform() { showToast('已申请平台介入') },
  agree() { showToast('已同意方案，订单进入结算'); setTimeout(() => wx.switchTab({ url: '/pages/orders/index' }), 700) }
})
