document.addEventListener('DOMContentLoaded', () => {
    initPopup()

})

const initPopup = () => {
    const initPopupButton = document.querySelectorAll('.js-init-popup')

    initPopupButton.forEach((element) => {
        element.addEventListener('click', () => {
            initPopupDOM(element)
        })
    })
}

const initPopupOpenAnimate = (element) => {
    setTimeout(() => element.classList.add('popup__wrapper_animate'), 1)
}

const initPopupDOM = (element) => {
    const dataAttributeValue = element.getAttribute('data-toggle')
    const popup = document.querySelector(`#${dataAttributeValue}`)

    if (dataAttributeValue && popup) {
        popup.classList.add('popup')
    }

    let tempContentContainer = popup.innerHTML
    popup.innerHTML = ''
    let wrapper = document.createElement('div')
    wrapper.className = 'popup__wrapper'
    popup.prepend(wrapper)
    wrapper.innerHTML = tempContentContainer

    initPopupOpenAnimate(wrapper)
}