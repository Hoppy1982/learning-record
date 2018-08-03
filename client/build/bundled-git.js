(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const _nav = require('../partials/_nav.js')

},{"../partials/_nav.js":2}],2:[function(require,module,exports){
document.addEventListener('DOMContentLoaded', function(event) {
  redirectRootToHome()
  markCurrentPageInNav()
  addEventListeners()
})


function redirectRootToHome() {
  console.log(window.location.pathname)
  let url = window.location.pathname
  let page = url.split('/').pop()
  console.log(page)
  if (page === '/' || page === '/learning-record/') {
    console.log('REDIRECT REQUIRED..')
  } else {
    console.log('NO REDIRECT REQuIRED..')
  }
}


function addEventListeners() {
  document.getElementById('site-main-nav__menu-button-clickable').addEventListener('click', function(event) {
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjbGllbnQvc3JjL3BhZ2VzL2dpdC5qcyIsImNsaWVudC9zcmMvcGFydGlhbHMvX25hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNvbnN0IF9uYXYgPSByZXF1aXJlKCcuLi9wYXJ0aWFscy9fbmF2LmpzJylcclxuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgcmVkaXJlY3RSb290VG9Ib21lKClcclxuICBtYXJrQ3VycmVudFBhZ2VJbk5hdigpXHJcbiAgYWRkRXZlbnRMaXN0ZW5lcnMoKVxyXG59KVxyXG5cclxuXHJcbmZ1bmN0aW9uIHJlZGlyZWN0Um9vdFRvSG9tZSgpIHtcclxuICBjb25zb2xlLmxvZyh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpXHJcbiAgbGV0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZVxyXG4gIGxldCBwYWdlID0gdXJsLnNwbGl0KCcvJykucG9wKClcclxuICBjb25zb2xlLmxvZyhwYWdlKVxyXG4gIGlmIChwYWdlID09PSAnLycgfHwgcGFnZSA9PT0gJy9sZWFybmluZy1yZWNvcmQvJykge1xyXG4gICAgY29uc29sZS5sb2coJ1JFRElSRUNUIFJFUVVJUkVELi4nKVxyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zb2xlLmxvZygnTk8gUkVESVJFQ1QgUkVRdUlSRUQuLicpXHJcbiAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpdGUtbWFpbi1uYXZfX21lbnUtYnV0dG9uLWNsaWNrYWJsZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIG5hdk1lbnVCdXR0b25PbkNsaWNrKClcclxuICB9KVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gbWFya0N1cnJlbnRQYWdlSW5OYXYoKSB7XHJcbiAgbGV0IGxvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uLmhyZWZcclxuICBsZXQgY3VycmVudFBhZ2UgPSBsb2NhdGlvbi5zcGxpdCgnLycpLnBvcCgpXHJcbiAgbGV0IGN1cnJlbnRQYWdlTmFtZSA9IGN1cnJlbnRQYWdlLnNwbGl0KCcuJykuc2hpZnQoKVxyXG4gIGxldCBhbGxQYWdlTWtyRGl2cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NpdGUtbWFpbi1uYXZfX3BhZ2UtbWtyJylcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxQYWdlTWtyRGl2cy5sZW5ndGg7IGkrKykge1xyXG4gICAgbGV0IGRpdklkUGFnZU5hbWUgPSBhbGxQYWdlTWtyRGl2c1tpXS5pZC5zcGxpdCgnLScpLnBvcCgpXHJcblxyXG4gICAgYWxsUGFnZU1rckRpdnNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnc2l0ZS1tYWluLW5hdl9fcGFnZS1ta3ItLWN1cnJlbnQnKVxyXG5cclxuICAgIGlmIChjdXJyZW50UGFnZU5hbWUgPT09ICdpbmRleCcpIHtjdXJyZW50UGFnZU5hbWUgPSAnaG9tZSd9XHJcblxyXG4gICAgaWYgKGRpdklkUGFnZU5hbWUgPT09IGN1cnJlbnRQYWdlTmFtZSkge1xyXG4gICAgICBhbGxQYWdlTWtyRGl2c1tpXS5jbGFzc0xpc3QuYWRkKCdzaXRlLW1haW4tbmF2X19wYWdlLW1rci0tY3VycmVudCcpXHJcbiAgICB9XHJcblxyXG4gIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIG5hdk1lbnVCdXR0b25PbkNsaWNrKCkge1xyXG4gIGxldCBhbGxOYXZJdGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NpdGUtbWFpbi1uYXZfX2xpbmstaXRlbScpXHJcblxyXG4gIGlmICggYWxsTmF2SXRlbXNbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKCdzaXRlLW1haW4tbmF2X19saW5rLWl0ZW0tLWRvbnREaXNwbGF5JykgKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbE5hdkl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGFsbE5hdkl0ZW1zW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3NpdGUtbWFpbi1uYXZfX2xpbmstaXRlbS0tZG9udERpc3BsYXknKVxyXG4gICAgICBhbGxOYXZJdGVtc1tpXS5jbGFzc0xpc3QuYWRkKCdzaXRlLW1haW4tbmF2X19saW5rLWl0ZW0tLWRpc3BsYXknKVxyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbE5hdkl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGFsbE5hdkl0ZW1zW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3NpdGUtbWFpbi1uYXZfX2xpbmstaXRlbS0tZGlzcGxheScpXHJcbiAgICAgIGFsbE5hdkl0ZW1zW2ldLmNsYXNzTGlzdC5hZGQoJ3NpdGUtbWFpbi1uYXZfX2xpbmstaXRlbS0tZG9udERpc3BsYXknKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19
