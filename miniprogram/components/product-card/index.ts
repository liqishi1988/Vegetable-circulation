Component({
  properties: {
    product: { type: Object, value: {} },
    compact: { type: Boolean, value: false },
    showActions: { type: Boolean, value: true }
  },
  methods: {
    onDetail() { this.triggerEvent('detail', this.data.product) },
    onQuote() { this.triggerEvent('quote', this.data.product) }
  }
})
