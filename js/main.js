document.addEventListener('DOMContentLoaded', () => {
  (() => {
    const peek = () => Math.round((window.innerWidth * 0.2) / 2)
  
    const glide = new Glide('.glide-one', {
      type: 'carousel',
      startAt: 0,
      perView: 2,
      peek: peek(),
      // autoplay: 4000,
      breakpoints: {
        960: {
          perView: 1
        },
      }
    })
    
    const update = () => {
      glide.update({
        peek: peek()
      })
    }
    
    let timeout
    const delay = 250
    
    window.addEventListener('resize', () => {
      clearTimeout(timeout)
      timeout = setTimeout(update, delay)
    })
    
    glide.mount()  
  })();

  (() => {
    const glide = new Glide('.glide-two', {
      type: 'carousel',
      startAt: 0,
      gap: 30,
      perView: 7,
      breakpoints: {
        1600: {
          perView: 4
        },
        960: {
          perView: 2
        },
        640: {
          perView: 1
        }
      }
    })

    glide.mount()
  })();
})

