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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjbGllbnQvc3JjL3BhZ2VzL2dpdC5qcyIsImNsaWVudC9zcmMvcGFydGlhbHMvX25hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3QgX25hdiA9IHJlcXVpcmUoJy4uL3BhcnRpYWxzL19uYXYuanMnKVxyXG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICByZWRpcmVjdFJvb3RUb0hvbWUoKVxyXG4gIG1hcmtDdXJyZW50UGFnZUluTmF2KClcclxuICBhZGRFdmVudExpc3RlbmVycygpXHJcbn0pXHJcblxyXG5cclxuZnVuY3Rpb24gcmVkaXJlY3RSb290VG9Ib21lKCkge1xyXG4gIGNvbnNvbGUubG9nKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSlcclxuICBsZXQgdXJsID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXHJcbiAgbGV0IHBhZ2UgPSB1cmwuc3BsaXQoJy8nKS5wb3AoKVxyXG4gIGNvbnNvbGUubG9nKHBhZ2UpXHJcbiAgaWYgKHBhZ2UgPT09ICcvJyB8fCBwYWdlID09PSAnL2xlYXJuaW5nLXJlY29yZC8nKSB7XHJcbiAgICBjb25zb2xlLmxvZygnUkVESVJFQ1QgUkVRVUlSRUQuLicpXHJcbiAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpdGUtbWFpbi1uYXZfX21lbnUtYnV0dG9uLWNsaWNrYWJsZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIG5hdk1lbnVCdXR0b25PbkNsaWNrKClcclxuICB9KVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gbWFya0N1cnJlbnRQYWdlSW5OYXYoKSB7XHJcbiAgbGV0IGxvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uLmhyZWZcclxuICBsZXQgY3VycmVudFBhZ2UgPSBsb2NhdGlvbi5zcGxpdCgnLycpLnBvcCgpXHJcbiAgbGV0IGN1cnJlbnRQYWdlTmFtZSA9IGN1cnJlbnRQYWdlLnNwbGl0KCcuJykuc2hpZnQoKVxyXG4gIGxldCBhbGxQYWdlTWtyRGl2cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NpdGUtbWFpbi1uYXZfX3BhZ2UtbWtyJylcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxQYWdlTWtyRGl2cy5sZW5ndGg7IGkrKykge1xyXG4gICAgbGV0IGRpdklkUGFnZU5hbWUgPSBhbGxQYWdlTWtyRGl2c1tpXS5pZC5zcGxpdCgnLScpLnBvcCgpXHJcblxyXG4gICAgYWxsUGFnZU1rckRpdnNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnc2l0ZS1tYWluLW5hdl9fcGFnZS1ta3ItLWN1cnJlbnQnKVxyXG5cclxuICAgIGlmIChjdXJyZW50UGFnZU5hbWUgPT09ICdpbmRleCcpIHtjdXJyZW50UGFnZU5hbWUgPSAnaG9tZSd9XHJcblxyXG4gICAgaWYgKGRpdklkUGFnZU5hbWUgPT09IGN1cnJlbnRQYWdlTmFtZSkge1xyXG4gICAgICBhbGxQYWdlTWtyRGl2c1tpXS5jbGFzc0xpc3QuYWRkKCdzaXRlLW1haW4tbmF2X19wYWdlLW1rci0tY3VycmVudCcpXHJcbiAgICB9XHJcblxyXG4gIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIG5hdk1lbnVCdXR0b25PbkNsaWNrKCkge1xyXG4gIGxldCBhbGxOYXZJdGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NpdGUtbWFpbi1uYXZfX2xpbmstaXRlbScpXHJcblxyXG4gIGlmICggYWxsTmF2SXRlbXNbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKCdzaXRlLW1haW4tbmF2X19saW5rLWl0ZW0tLWRvbnREaXNwbGF5JykgKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbE5hdkl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGFsbE5hdkl0ZW1zW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3NpdGUtbWFpbi1uYXZfX2xpbmstaXRlbS0tZG9udERpc3BsYXknKVxyXG4gICAgICBhbGxOYXZJdGVtc1tpXS5jbGFzc0xpc3QuYWRkKCdzaXRlLW1haW4tbmF2X19saW5rLWl0ZW0tLWRpc3BsYXknKVxyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbE5hdkl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGFsbE5hdkl0ZW1zW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3NpdGUtbWFpbi1uYXZfX2xpbmstaXRlbS0tZGlzcGxheScpXHJcbiAgICAgIGFsbE5hdkl0ZW1zW2ldLmNsYXNzTGlzdC5hZGQoJ3NpdGUtbWFpbi1uYXZfX2xpbmstaXRlbS0tZG9udERpc3BsYXknKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19
