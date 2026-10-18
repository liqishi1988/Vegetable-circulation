export interface Product {
  id: number
  icon: string
  name: string
  price: string
  place: string
  qty: string
  time: string
  seller: string
  image: string
}

export const products: Product[] = [
  { id: 1, icon: '🍅', image: '/assets/tomato.png', name: '西红柿 · 一级', price: '2.10', place: '山东 · 寿光', qty: '约8吨', time: '今天可装车', seller: '寿光绿源蔬菜基地' },
  { id: 2, icon: '🥒', image: '/assets/cucumber.png', name: '黄瓜 · 精品', price: '1.60', place: '山东 · 聊城', qty: '约6吨', time: '明天可装车', seller: '聊城腾翔种植基地' },
  { id: 3, icon: '🥬', image: '/assets/spinach.png', name: '菠菜 · 一级', price: '1.65', place: '河北 · 邯郸', qty: '约3吨', time: '今天可装车', seller: '邯郸兴农合作社' },
  { id: 4, icon: '🥬', image: '/assets/cabbage.png', name: '大白菜', price: '0.95', place: '河南 · 开封', qty: '约12吨', time: '3天内装车', seller: '开封田园基地' }
]

export const showToast = (title: string) => wx.showToast({ title, icon: 'none' })
