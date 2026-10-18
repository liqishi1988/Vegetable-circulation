import { products, showToast } from '../../../data/mock'
const issueItems = ['数量短缺', '品质不符', '包装破损', '到货延迟', '其他问题']
Page({
  data: { product: products[0], issueItems: issueItems.map((label, index) => ({ label, active: index === 0 })), evidence: ['📷', '📦'] },
  onLoad() { wx.setNavigationBarTitle({ title: '申请售后' }) },
  toggleIssue(e: WechatMiniprogram.TouchEvent) {
    const label = e.currentTarget.dataset.label
    this.setData({ issueItems: this.data.issueItems.map((item: { label: string; active: boolean }) => item.label === label ? { ...item, active: !item.active } : item) })
  },
  addEvidence() { showToast('已添加凭证') },
  submit() { showToast('售后申请已提交'); setTimeout(() => wx.redirectTo({ url: '/pages/aftersale/detail/index' }), 700) }
})
