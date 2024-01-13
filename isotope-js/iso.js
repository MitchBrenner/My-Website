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
    });
    removeDataStyling();
});

javaBtn.addEventListener('click', () => {
    grid.isotope({
        filter: '.java'
    });
    removeDataStyling();
});

jsBtn.addEventListener('click', () => {
    grid.isotope({
        filter: '.javascript'
    });
    removeDataStyling();
});

pythonBtn.addEventListener('click', () => {
    grid.isotope({
        filter: '.python'
    });
    removeDataStyling();
});

dataBtn.addEventListener('click', () => {
    grid.isotope({
        filter: '.data'
    });
    addDataStyling();
});

function addDataStyling() {
    data.forEach(element => {
        element.classList.add("data-styling");
    });
}

function removeDataStyling() {
    data.forEach(element => {
        element.classList.remove("data-styling");
    });
}

