const allBtn = document.getElementById("all")
const javaBtn = document.getElementById("java")
const jsBtn = document.getElementById("javascript")
const pythonBtn = document.getElementById("python")
const dataBtn = document.getElementById("data")
const data = document.querySelectorAll(".data")

var grid = $('.grid').isotope({
    // options
    itemSelector: '.grid-item',
    layoutMode: 'fitRows'
  });


  allBtn.addEventListener('click', () => {
    grid.isotope({
        filter: '*'
    })
    removeDataSytling()

  })

  javaBtn.addEventListener('click', () => {
    grid.isotope({
        filter: '.java'
    })
    removeDataSytling()

  })

  jsBtn.addEventListener('click', () => {
    grid.isotope({
        filter: '.javascript'
    })
    removeDataSytling()

  })

  pythonBtn.addEventListener('click', () => {
    grid.isotope({
        filter: '.python'
    })
    removeDataSytling()

  })

  dataBtn.addEventListener('click', () => {
    grid.isotope({
        filter: '.data'
    })

    addDataStyling()
  })

  
  function addDataStyling(){
    data.forEach(element => {
      element.classList.add("data-styling")
    });
  }
  function removeDataSytling(){
    data.forEach(element => {
      element.classList.remove("data-styling")
    });
  }