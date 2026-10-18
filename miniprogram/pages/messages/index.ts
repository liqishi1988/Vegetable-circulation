Page({
  data: { active: '交易消息', tabs: ['交易消息','系统通知'], rows: [
    {icon:'💬',title:'新的询价',desc:'寿光绿源基地向您询价',time:'10:24',url:'/pages/quote/detail/index'},
    {icon:'✅',title:'报价已接受',desc:'顺达蔬菜批发已接受报价',time:'09:18',url:'/pages/trade/confirm/index'},
    {icon:'🚚',title:'订单待装车',desc:'请按约定时间完成装车',time:'昨天',url:'/pages/order/detail/index'},
    {icon:'📦',title:'到货待验收',desc:'货物已到达，请安排验收',time:'10月16日',url:'/pages/inspection/index'}
  ] },
  onLoad() { wx.setNavigationBarTitle({ title: '消息' }) },
  select(e: WechatMiniprogram.TouchEvent) { this.setData({ active: e.currentTarget.dataset.value }) },
  open(e: WechatMiniprogram.TouchEvent) { wx.navigateTo({ url: e.currentTarget.dataset.url }) }
})
