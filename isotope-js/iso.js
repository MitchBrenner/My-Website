const allBtn = document.getElementById("all")
const javaBtn = document.getElementById("java")
const jsBtn = document.getElementById("javascript")
const pythonBtn = document.getElementById("python")


var grid = $('.grid').isotope({
    // options
    itemSelector: '.grid-item',
    layoutMode: 'fitRows'
  });


  allBtn.addEventListener('click', () => {
    grid.isotope({
        filter: '*'
    })
  })

  javaBtn.addEventListener('click', () => {
    grid.isotope({
        filter: '.java'
    })
  })

  jsBtn.addEventListener('click', () => {
    grid.isotope({
        filter: '.javascript'
    })
  })

  pythonBtn.addEventListener('click', () => {
    grid.isotope({
        filter: '.python'
    })
  })