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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjbGllbnQvc3JjL3BhZ2VzL2luZGV4LmpzIiwiY2xpZW50L3NyYy9wYXJ0aWFscy9fbmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3QgX25hdiA9IHJlcXVpcmUoJy4uL3BhcnRpYWxzL19uYXYuanMnKVxyXG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICByZWRpcmVjdFJvb3RUb0hvbWUoKVxyXG4gIG1hcmtDdXJyZW50UGFnZUluTmF2KClcclxuICBhZGRFdmVudExpc3RlbmVycygpXHJcbn0pXHJcblxyXG5cclxuZnVuY3Rpb24gcmVkaXJlY3RSb290VG9Ib21lKCkge1xyXG4gIGNvbnNvbGUubG9nKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSlcclxuICBsZXQgdXJsID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXHJcbiAgbGV0IHBhZ2UgPSB1cmwuc3BsaXQoJy8nKS5wb3AoKVxyXG4gIGNvbnNvbGUubG9nKHBhZ2UpXHJcbiAgaWYgKHBhZ2UgPT09ICcvJyB8fCBwYWdlID09PSAnL2xlYXJuaW5nLXJlY29yZC8nKSB7XHJcbiAgICBjb25zb2xlLmxvZygnUkVESVJFQ1QgUkVRVUlSRUQuLicpXHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnNvbGUubG9nKCdOTyBSRURJUkVDVCBSRVF1SVJFRC4uJylcclxuICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVycygpIHtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2l0ZS1tYWluLW5hdl9fbWVudS1idXR0b24tY2xpY2thYmxlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgbmF2TWVudUJ1dHRvbk9uQ2xpY2soKVxyXG4gIH0pXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBtYXJrQ3VycmVudFBhZ2VJbk5hdigpIHtcclxuICBsZXQgbG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb24uaHJlZlxyXG4gIGxldCBjdXJyZW50UGFnZSA9IGxvY2F0aW9uLnNwbGl0KCcvJykucG9wKClcclxuICBsZXQgY3VycmVudFBhZ2VOYW1lID0gY3VycmVudFBhZ2Uuc3BsaXQoJy4nKS5zaGlmdCgpXHJcbiAgbGV0IGFsbFBhZ2VNa3JEaXZzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2l0ZS1tYWluLW5hdl9fcGFnZS1ta3InKVxyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFBhZ2VNa3JEaXZzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBsZXQgZGl2SWRQYWdlTmFtZSA9IGFsbFBhZ2VNa3JEaXZzW2ldLmlkLnNwbGl0KCctJykucG9wKClcclxuXHJcbiAgICBhbGxQYWdlTWtyRGl2c1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdzaXRlLW1haW4tbmF2X19wYWdlLW1rci0tY3VycmVudCcpXHJcblxyXG4gICAgaWYgKGN1cnJlbnRQYWdlTmFtZSA9PT0gJ2luZGV4Jykge2N1cnJlbnRQYWdlTmFtZSA9ICdob21lJ31cclxuXHJcbiAgICBpZiAoZGl2SWRQYWdlTmFtZSA9PT0gY3VycmVudFBhZ2VOYW1lKSB7XHJcbiAgICAgIGFsbFBhZ2VNa3JEaXZzW2ldLmNsYXNzTGlzdC5hZGQoJ3NpdGUtbWFpbi1uYXZfX3BhZ2UtbWtyLS1jdXJyZW50JylcclxuICAgIH1cclxuXHJcbiAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gbmF2TWVudUJ1dHRvbk9uQ2xpY2soKSB7XHJcbiAgbGV0IGFsbE5hdkl0ZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2l0ZS1tYWluLW5hdl9fbGluay1pdGVtJylcclxuXHJcbiAgaWYgKCBhbGxOYXZJdGVtc1swXS5jbGFzc0xpc3QuY29udGFpbnMoJ3NpdGUtbWFpbi1uYXZfX2xpbmstaXRlbS0tZG9udERpc3BsYXknKSApIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsTmF2SXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgYWxsTmF2SXRlbXNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnc2l0ZS1tYWluLW5hdl9fbGluay1pdGVtLS1kb250RGlzcGxheScpXHJcbiAgICAgIGFsbE5hdkl0ZW1zW2ldLmNsYXNzTGlzdC5hZGQoJ3NpdGUtbWFpbi1uYXZfX2xpbmstaXRlbS0tZGlzcGxheScpXHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsTmF2SXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgYWxsTmF2SXRlbXNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnc2l0ZS1tYWluLW5hdl9fbGluay1pdGVtLS1kaXNwbGF5JylcclxuICAgICAgYWxsTmF2SXRlbXNbaV0uY2xhc3NMaXN0LmFkZCgnc2l0ZS1tYWluLW5hdl9fbGluay1pdGVtLS1kb250RGlzcGxheScpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=
