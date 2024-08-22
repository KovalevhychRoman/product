const mainPage = document.getElementsByClassName('main-page')[0]
mainPage.addEventListener('click', () => location.href = 'https://kovalevhychroman.github.io/FullShop3/')
const productItem = Array.from(document.getElementsByClassName('item-img'))
const count = Array.from(document.getElementsByClassName('count'))
const minus = Array.from(document.getElementsByClassName('minus'))
const plus = Array.from(document.getElementsByClassName('plus'))
const binCount = document.getElementsByClassName('bin-count')[0]
const binPrice = document.getElementsByClassName('bin-price')[0]
const buy = Array.from(document.getElementsByClassName('buy'))
const descProduct = document.getElementsByClassName('desc-product')[0]
const characteristic = document.getElementsByClassName('characteristic')[0]
const infoContent = document.getElementsByClassName('info-content')[0]
const mainProduct = document.getElementsByClassName('main-product-img')[0]
const mainProductInfo = document.getElementsByClassName('product-info-main')[0]
const productName = Array.from(document.getElementsByClassName('product-name'))
let itemsAmount = 0
let price = 0
let currentSwitch = 1
let productClass = []
try {
    itemsAmount = Number(localStorage.getItem('itemsAmount'))
    price = Number(localStorage.getItem('price'))
} catch (error) {
}
window.onload = function load() {
    binChange(price, itemsAmount)
    switchClasses(1)
    let img = localStorage.getItem('img')
    console.log(img)
    mainProduct.src = img

}

let countContent = []

function binChange(price, itemsAmount) {
    binCount.textContent = itemsAmount
    binPrice.textContent = price
}
function classTogle() {
    menu.classList.toggle('menu-active')
    menuCategories.classList.toggle('active')
    moreCategories.classList.toggle('categories-active')
    scrollTo(top)
}
function switchClasses(currentSwitch) {
    infoContent.innerHTML=''
    if (currentSwitch == 1) {
        
        descProduct.classList.add('active-switch')
        characteristic.classList.remove('active-switch')
        infoContent.innerHTML = '<p></p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, explicabo sunt iusto cupiditate non magni nihil provident sit totam commodi illo consequatur obcaecati vero ipsum voluptas enim dolore. Excepturi, perspiciatis?</p>'
    } else {
        
        characteristic.classList.add('active-switch')
        descProduct.classList.remove('active-switch')
        infoContent.innerHTML ='<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui voluptatibus accusantium molestias vero nihil, adipisci libero quo dicta nulla dolores.</p>'
    }
}
productName.forEach((item, i) => {
    let k = Math.floor(Math.random() * 5)
    if (k == 0) {
        productClass[i] = 'cosmetic'
        item.textContent = 'Тонік'
        
        productName[i].insertAdjacentHTML('beforebegin', `<img src="img/tonic.jpg" class = 'transfer'  alt="#">`)
    } else if (k == 1) {
        productClass[i] = 'care'
        item.textContent = 'Мило'
        productName[i].insertAdjacentHTML('beforebegin', `<img src="img/care.jpg" class = 'transfer' alt="#">`)
    } else if (k == 2) {
        productClass[i] = 'health'
        item.textContent = 'Вітаміни'
        productName[i].insertAdjacentHTML('beforebegin', `<img src="img/vitamin.jpg" class = 'transfer' alt="#">`)
    } else if (k == 3) {
        productClass[i] = 'house'
        item.textContent = 'Засіб для посуди'
        productName[i].insertAdjacentHTML('beforebegin', `<img src="img/house.jpg" class = 'transfer' alt="#">`)
    } else if (k == 4) {
        productClass[i] = 'parfume'
        item.textContent = 'Парфум'
        productName[i].insertAdjacentHTML('beforebegin', `<img src="img/parfume.jpg" class = 'transfer' alt="#">`)
    }
    
})
productItem.forEach(item => item.addEventListener('click', () => {
    let currentImg = e.currentTarget.src
    localStorage.removeItem('img')
    localStorage.setItem('img', currentImg)
    location.href = 'https://kovalevhychroman.github.io/product/'
}))
count.forEach((item, i) => {
    countContent[i] = 1
})
descProduct.addEventListener('click', () => {
    currentSwitch = 1
    switchClasses(currentSwitch)
})
characteristic.addEventListener('click', () => {
    currentSwitch = 2
    switchClasses(currentSwitch)

})
minus.forEach((item, i) => {
    item.addEventListener('click', () => {
        if (countContent[i] == 1) {
            return
        } else {
            countContent[i]--
        }
        count[i].textContent = countContent[i]
    })
})
plus.forEach((item, i) => {
    item.addEventListener('click', () => {
        if (countContent[i] < 30) {
            countContent[i] = countContent[i] + 1
        } else {
            return
        }
        count[i].textContent = countContent[i]
    })
})
buy.forEach((item, i) => item.addEventListener('click', () => {
    localStorage.clear()
    let itemPrice = 500
    if (itemsAmount + countContent[i] <= 100) {
        itemsAmount += countContent[i]
    } else {
        alert('У вас загато продуктів у кошику!!!')
        return
    }
    price = itemsAmount * itemPrice
    binChange(price, itemsAmount)
    localStorage.setItem('itemsAmount', itemsAmount)
    localStorage.setItem('price', price)
}))