document.addEventListener('DOMContentLoaded', () => {
    setActiveNavigationList()
})

const navigation = document.querySelector('.js-navigation')
const navigationList = navigation.querySelectorAll('.js-navigation-list')
const navigationListTitle = navigation.querySelectorAll('.js-navigation-list-title')

const setActiveNavigationList = () => {
    navigationListTitle.forEach((element) => {
        const dataAttributeValue = element.getAttribute('data-toggle')

        element.addEventListener('click', () => {
            navigationList.forEach((element) => {
                if (element.id === dataAttributeValue) {
                    element.classList.toggle('active')
                }
            })
        })
    })
}