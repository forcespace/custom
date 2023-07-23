document.addEventListener('DOMContentLoaded', () => {
    setMenuButtonStateOnClick()
})

const ACTIVE_CLASS = 'active'

const header = document.querySelector('.js-header')
const mainSection = document.querySelector('.js-main-section')

const menuButton = header.querySelector('.js-menu')
const menuButtonLine = menuButton.querySelector('.js-menu-line')
const rightBlock = mainSection.querySelector('.js-right-block')
const leftBlock = mainSection.querySelector('.js-left-block')

const setAnimateBackgroundOnMainPage = (block) => {
    block.classList.toggle(ACTIVE_CLASS)
}

function toggleClassToBlocksOnPage() {
    setAnimateBackgroundOnMainPage(rightBlock)
    setAnimateBackgroundOnMainPage(leftBlock)
}

function toggleClassToMenuButton() {
    menuButton.classList.toggle(ACTIVE_CLASS)
    menuButtonLine.classList.toggle(ACTIVE_CLASS)
}

const setMenuButtonStateOnClick = () => {
    menuButton.addEventListener('click', () => {
        toggleClassToMenuButton()
        toggleClassToBlocksOnPage()
    })
}

