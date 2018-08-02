(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const _nav = require('../partials/_nav.js')

},{"../partials/_nav.js":2}],2:[function(require,module,exports){
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjbGllbnQvc3JjL3BhZ2VzL2luZGV4LmpzIiwiY2xpZW50L3NyYy9wYXJ0aWFscy9fbmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNvbnN0IF9uYXYgPSByZXF1aXJlKCcuLi9wYXJ0aWFscy9fbmF2LmpzJylcclxuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgbWFya0N1cnJlbnRQYWdlSW5OYXYoKVxyXG4gIGFkZEV2ZW50TGlzdGVuZXJzKClcclxufSlcclxuXHJcblxyXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVycygpIHtcclxuICBsZXQgbmF2TWVudUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaXRlLW1haW4tbmF2X19tZW51LWJ1dHRvbi1jbGlja2FibGUnKVxyXG4gIG5hdk1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgbmF2TWVudUJ1dHRvbk9uQ2xpY2soKVxyXG4gIH0pXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBtYXJrQ3VycmVudFBhZ2VJbk5hdigpIHtcclxuICBsZXQgbG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb24uaHJlZlxyXG4gIGxldCBjdXJyZW50UGFnZSA9IGxvY2F0aW9uLnNwbGl0KCcvJykucG9wKClcclxuICBsZXQgY3VycmVudFBhZ2VOYW1lID0gY3VycmVudFBhZ2Uuc3BsaXQoJy4nKS5zaGlmdCgpXHJcbiAgbGV0IGFsbFBhZ2VNa3JEaXZzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2l0ZS1tYWluLW5hdl9fcGFnZS1ta3InKVxyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFBhZ2VNa3JEaXZzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBsZXQgZGl2SWRQYWdlTmFtZSA9IGFsbFBhZ2VNa3JEaXZzW2ldLmlkLnNwbGl0KCctJykucG9wKClcclxuXHJcbiAgICBhbGxQYWdlTWtyRGl2c1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdzaXRlLW1haW4tbmF2X19wYWdlLW1rci0tY3VycmVudCcpXHJcblxyXG4gICAgaWYgKGN1cnJlbnRQYWdlTmFtZSA9PT0gJ2luZGV4Jykge2N1cnJlbnRQYWdlTmFtZSA9ICdob21lJ31cclxuXHJcbiAgICBpZiAoZGl2SWRQYWdlTmFtZSA9PT0gY3VycmVudFBhZ2VOYW1lKSB7XHJcbiAgICAgIGFsbFBhZ2VNa3JEaXZzW2ldLmNsYXNzTGlzdC5hZGQoJ3NpdGUtbWFpbi1uYXZfX3BhZ2UtbWtyLS1jdXJyZW50JylcclxuICAgIH1cclxuXHJcbiAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gbmF2TWVudUJ1dHRvbk9uQ2xpY2soKSB7XHJcbiAgbGV0IGFsbE5hdkl0ZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2l0ZS1tYWluLW5hdl9fbGluay1pdGVtJylcclxuXHJcbiAgaWYgKCBhbGxOYXZJdGVtc1swXS5jbGFzc0xpc3QuY29udGFpbnMoJ3NpdGUtbWFpbi1uYXZfX2xpbmstaXRlbS0tZG9udERpc3BsYXknKSApIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsTmF2SXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgYWxsTmF2SXRlbXNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnc2l0ZS1tYWluLW5hdl9fbGluay1pdGVtLS1kb250RGlzcGxheScpXHJcbiAgICAgIGFsbE5hdkl0ZW1zW2ldLmNsYXNzTGlzdC5hZGQoJ3NpdGUtbWFpbi1uYXZfX2xpbmstaXRlbS0tZGlzcGxheScpXHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsTmF2SXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgYWxsTmF2SXRlbXNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnc2l0ZS1tYWluLW5hdl9fbGluay1pdGVtLS1kaXNwbGF5JylcclxuICAgICAgYWxsTmF2SXRlbXNbaV0uY2xhc3NMaXN0LmFkZCgnc2l0ZS1tYWluLW5hdl9fbGluay1pdGVtLS1kb250RGlzcGxheScpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=
