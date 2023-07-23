document.addEventListener('DOMContentLoaded', () => {
    setStateHiddenContent()
})

const setStateHiddenContent = () => {
    setClickToTargetElements('js-navigation-list-link')
}

const setClickToTargetElements = (element) => {
    const getActionElement = document.querySelectorAll(`.${element}`)

    getActionElement.forEach((element) => {
        element.addEventListener('click', () => {
            getTargetElements(element)
        })
    })
}

const getTargetElements = (element) => {
    const dataAttributeValue = element.getAttribute('data-toggle')
    const targetContentElement = document.querySelector(`#${dataAttributeValue}`)

    if (dataAttributeValue && targetContentElement) {
        toggleClassToTargetContentElement(targetContentElement)
    }
}

const toggleClassToTargetContentElement = (targetContentElement) => {
    targetContentElement.classList.toggle('active')
}