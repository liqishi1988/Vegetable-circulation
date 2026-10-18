Page({
  data: {
    recent: ['西红柿', '黄瓜', '土豆', '辣椒', '白菜'],
    hot: ['西红柿', '黄瓜', '莲菜', '蒜薹', '茄子', '青椒', '西葫芦', '芹菜', '胡萝卜'],
    groups: [
      { icon: '●', label: '产地', options: [{label:'不限'},{label:'山东寿光',active:true},{label:'河北邯郸'}] },
      { icon: '¥', label: '价格区间', unit: '（元/斤）', options: [{label:'不限'},{label:'0–2',active:true},{label:'2–4'},{label:'4以上'}] },
      { icon: '◷', label: '装车时间', options: [{label:'不限'},{label:'今天',active:true},{label:'明天'},{label:'3天内'}] },
      { icon: '●', label: '距离', options: [{label:'不限'},{label:'50公里内',active:true},{label:'100公里内'}] },
      { icon: '◇', label: '认证状态', options: [{label:'不限'},{label:'已认证',active:true},{label:'金牌商家'}] }
    ]
  },
  onLoad() { wx.setNavigationBarTitle({ title: '搜索货源' }) },
  toggle(e: WechatMiniprogram.TouchEvent) { const gi=Number(e.currentTarget.dataset.group); const oi=Number(e.currentTarget.dataset.option); const groups=this.data.groups.map((group:any,index:number)=>index===gi?{...group,options:group.options.map((option:any,i:number)=>({...option,active:i===oi}))}:group); this.setData({groups}) },
  reset() { this.setData({ groups: this.data.groups.map((group:any)=>({...group,options:group.options.map((option:any,i:number)=>({...option,active:i===0}))})) }) },
  search() { wx.navigateTo({ url: '/pages/market/supply-list/index' }) }
})
