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

let order = []

document.addEventListener('click', function (e) {
    if (e.target.dataset.id) {
        handleAddClick(e.target.dataset.id)
    }

    console.log(order)
})


const handleAddClick = (itemId) => {
    const targetItem = menuArray.find(item => String(item.id) === itemId)
    console.log(targetItem)

    const { ingredients, emoji, ...updatedItem } = targetItem
    console.log(updatedItem)
}

const renderMenu = () => {
    document.getElementById('menu').innerHTML = generateMenuHtml()
}

renderMenu()

// const itemInOrder = order.find(({id}) => id === updateItem.id)

// if (itemInOrder) {
//     itemInOrder.qty = 1
// } else {
//     order.push({...itemInOrder, qty: 1})

// itemInOrder.qty = 1

// if (!order.includes(itemInOrder)) {
//     order.push({...itemInOrder, qty: 1})
// } else {
//     itemInOrder.qty++
//     // itemInOrder.qty = 1
// }

// console.log(itemInOrder)
// console.log(order)