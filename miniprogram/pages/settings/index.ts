import { showToast } from '../../data/mock'
Page({
  data: { notifications: true, rows: [
    { icon: '👤', title: '账号与安全', sub: '手机号、密码与登录设备' },
    { icon: '🔔', title: '消息通知', sub: '订单、报价与系统提醒', toggle: true },
    { icon: '📄', title: '平台协议', sub: '用户协议与隐私政策' },
    { icon: '🎧', title: '联系客服', sub: '服务时间 08:00—20:00' },
    { icon: 'ℹ️', title: '关于菜通达', sub: '当前版本 1.0.0' }
  ] },
  onLoad() { wx.setNavigationBarTitle({ title: '设置与帮助' }) },
  open(e: WechatMiniprogram.TouchEvent) { showToast(`${e.currentTarget.dataset.title}功能演示`) },
  toggle(e: WechatMiniprogram.TouchEvent) { this.setData({ notifications: e.detail.value }) },
  stop() {},
  clear() { showToast('缓存已清理') },
  logout() { wx.showModal({ title: '退出登录', content: '确定退出当前账号吗？', success: (res: { confirm: boolean }) => { if (res.confirm) wx.reLaunch({ url: '/pages/login/index' }) } }) }
})
