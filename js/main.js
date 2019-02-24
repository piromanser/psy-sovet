const glide = new Glide('.glide', {
  type: 'carousel',
  startAt: 0,
  perView: 2,
  peek: {
    before: 300,
    after: 300,
  }
})

glide.mount()
