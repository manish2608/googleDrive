let grid_btn = document.querySelector('.floder-btn')
let list_btn = document.querySelector('.list-btn')
grid_btn.addEventListener('click', function() {
    let grid = document.querySelector('.floder')
    let list = document.querySelector('.list')
    grid.style.display = "flex"
    list.style.display = 'none'
})
list_btn.addEventListener('click', function() {
    let list = document.querySelector('.list')
    let grid = document.querySelector('.floder')
    grid.style.display = "none"
    list.style.display = 'block'
})