Page({
  data: { menus: [
    { icon: '▱', title: '我的货源', sub: '发布和管理我的货源', url: '/pages/supply/manage/index' },
    { icon: '▤', title: '销售订单', sub: '查看我的销售订单', tab: true },
    { icon: '▣', title: '采购订单', sub: '查看我的采购订单', tab: true },
    { icon: '✓', title: '认证资料', sub: '实名认证与基地认证', url: '/pages/auth/business/index' },
    { icon: '●', title: '常用地址', sub: '管理收发货地址', url: '/pages/settings/index' },
    { icon: '♬', title: '客服与帮助', sub: '问题咨询与使用帮助', url: '/pages/settings/index' }
  ] },
  onLoad() { wx.setNavigationBarTitle({ title: '我的' }) },
  open(e: WechatMiniprogram.TouchEvent) { const item=e.currentTarget.dataset.item; item.tab?this.orders():wx.navigateTo({ url: item.url }) },
  orders() { wx.switchTab({ url: '/pages/orders/index' }) }
})
