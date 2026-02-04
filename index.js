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

document.addEventListener('click', function (e) {
    if (e.target.dataset.id) {
        handleAddClick(e.target.dataset.id)
    }
    
    // console.log(typeof e.target.dataset.id)

    
    console.log(order)
})


let order = []

const handleAddClick = (itemId) => {
    const targetItem = menuArray.find(item => String(item.id) === itemId)
    console.log(targetItem)

    const updateTargetItem = {...targetItem, qty: 0}

    order.find(existingId => existingId.id === updateTargetItem.id
        ? updateTargetItem.qty++ : order.push({...updateTargetItem, qty: 1}))

}

    // console.log(typeof menuArray[0].id)
    // console.log(typeof stringTargetItem)



const renderMenu = () => {
    document.getElementById('menu').innerHTML = generateMenuHtml()
}

renderMenu()
