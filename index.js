import { menuArray } from './data.js'



const generateMenuHtml = () => {
    let menuHtml = ''
    
    menuArray.forEach(menuItem => {
        menuHtml += `
            <div class="menu-item">
                <img class="item-img" src="${menuItem.emoji}" alt="${menuItem.name}">
                <div class="item-info">
                    <p class="item-name">${menuItem.name}</p>
                    <p class="item-ingredients">${menuItem.ingredients}</p>
                    <p class="item-price">$${menuItem.price}</p>
                </div>
                <button class="add-btn" data-id=${menuItem.id}>+</button>
            </div>
        `
    })

    return menuHtml
}

document.addEventListener('click', function(e) {
    if(e.target.dataset.id) {
        console.log(e.target.dataset.id)
    }
})


const renderMenu = () => {
    document.getElementById('menu').innerHTML = generateMenuHtml() 
}

renderMenu()
