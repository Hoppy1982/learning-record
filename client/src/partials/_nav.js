document.addEventListener('DOMContentLoaded', function(event) {
  markCurrentPageInNav()
  addEventListeners()
})


function addEventListeners() {
  let navMenuButton = document.getElementById('site-main-nav__menu-button-clickable')
  navMenuButton.addEventListener('click', function(event) {
    navMenuButtonOnClick()
  })
}


function markCurrentPageInNav() {
  let location = window.location.href
  let currentPage = location.split('/').pop()
  let currentPageName = currentPage.split('.').shift()
  let allPageMkrDivs = document.getElementsByClassName('site-main-nav__page-mkr')

  for (let i = 0; i < allPageMkrDivs.length; i++) {
    let divIdPageName = allPageMkrDivs[i].id.split('-').pop()

    allPageMkrDivs[i].classList.remove('site-main-nav__page-mkr--current')

    if (currentPageName === 'index') {currentPageName = 'home'}

    if (divIdPageName === currentPageName) {
      allPageMkrDivs[i].classList.add('site-main-nav__page-mkr--current')
    }

  }
}


function navMenuButtonOnClick() {
  let allNavItems = document.getElementsByClassName('site-main-nav__link-item')

  if ( allNavItems[0].classList.contains('site-main-nav__link-item--dontDisplay') ) {
    for (let i = 0; i < allNavItems.length; i++) {
      allNavItems[i].classList.remove('site-main-nav__link-item--dontDisplay')
      allNavItems[i].classList.add('site-main-nav__link-item--display')
    }
  } else {
    for (let i = 0; i < allNavItems.length; i++) {
      allNavItems[i].classList.remove('site-main-nav__link-item--display')
      allNavItems[i].classList.add('site-main-nav__link-item--dontDisplay')
    }
  }

}


console.log('can i see this????')
