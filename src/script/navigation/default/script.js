document.addEventListener('DOMContentLoaded', () => {

})

const ACTIVE_CLASS = 'active'

const navigation = document.querySelector('.js-navigation')
// const navigationList = navigation.querySelectorAll('.js-navigation-list')
const navigationListTitle = navigation.querySelectorAll('.js-navigation-list-title')

const setActiveNavigationList = () => {
    navigationListTitle.forEach((element) => {
        element.addEventListener('click', () => {
            const navigationList = element.nextSibling
        })
    })
}