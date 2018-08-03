(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const _nav = require('../partials/_nav.js')

},{"../partials/_nav.js":2}],2:[function(require,module,exports){
document.addEventListener('DOMContentLoaded', function(event) {
  redirectRootToHome()
  markCurrentPageInNav()
  addEventListeners()
})


function redirectRootToHome() {
  let url = window.location.pathname
  let page = url.split('/').pop()

  if (page === '/' || page === '/learning-record/' || url === '/learning-record/' || url === '') {
    window.location.replace('https://hoppy1982.github.io/learning-record/index.html')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjbGllbnQvc3JjL3BhZ2VzL25vZGUuanMiLCJjbGllbnQvc3JjL3BhcnRpYWxzL19uYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJjb25zdCBfbmF2ID0gcmVxdWlyZSgnLi4vcGFydGlhbHMvX25hdi5qcycpXHJcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbihldmVudCkge1xyXG4gIHJlZGlyZWN0Um9vdFRvSG9tZSgpXHJcbiAgbWFya0N1cnJlbnRQYWdlSW5OYXYoKVxyXG4gIGFkZEV2ZW50TGlzdGVuZXJzKClcclxufSlcclxuXHJcblxyXG5mdW5jdGlvbiByZWRpcmVjdFJvb3RUb0hvbWUoKSB7XHJcbiAgbGV0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZVxyXG4gIGxldCBwYWdlID0gdXJsLnNwbGl0KCcvJykucG9wKClcclxuXHJcbiAgaWYgKHBhZ2UgPT09ICcvJyB8fCBwYWdlID09PSAnL2xlYXJuaW5nLXJlY29yZC8nIHx8IHVybCA9PT0gJy9sZWFybmluZy1yZWNvcmQvJyB8fCB1cmwgPT09ICcnKSB7XHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnaHR0cHM6Ly9ob3BweTE5ODIuZ2l0aHViLmlvL2xlYXJuaW5nLXJlY29yZC9pbmRleC5odG1sJylcclxuICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVycygpIHtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2l0ZS1tYWluLW5hdl9fbWVudS1idXR0b24tY2xpY2thYmxlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgbmF2TWVudUJ1dHRvbk9uQ2xpY2soKVxyXG4gIH0pXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBtYXJrQ3VycmVudFBhZ2VJbk5hdigpIHtcclxuICBsZXQgbG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb24uaHJlZlxyXG4gIGxldCBjdXJyZW50UGFnZSA9IGxvY2F0aW9uLnNwbGl0KCcvJykucG9wKClcclxuICBsZXQgY3VycmVudFBhZ2VOYW1lID0gY3VycmVudFBhZ2Uuc3BsaXQoJy4nKS5zaGlmdCgpXHJcbiAgbGV0IGFsbFBhZ2VNa3JEaXZzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2l0ZS1tYWluLW5hdl9fcGFnZS1ta3InKVxyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFBhZ2VNa3JEaXZzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBsZXQgZGl2SWRQYWdlTmFtZSA9IGFsbFBhZ2VNa3JEaXZzW2ldLmlkLnNwbGl0KCctJykucG9wKClcclxuXHJcbiAgICBhbGxQYWdlTWtyRGl2c1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdzaXRlLW1haW4tbmF2X19wYWdlLW1rci0tY3VycmVudCcpXHJcblxyXG4gICAgaWYgKGN1cnJlbnRQYWdlTmFtZSA9PT0gJ2luZGV4Jykge2N1cnJlbnRQYWdlTmFtZSA9ICdob21lJ31cclxuXHJcbiAgICBpZiAoZGl2SWRQYWdlTmFtZSA9PT0gY3VycmVudFBhZ2VOYW1lKSB7XHJcbiAgICAgIGFsbFBhZ2VNa3JEaXZzW2ldLmNsYXNzTGlzdC5hZGQoJ3NpdGUtbWFpbi1uYXZfX3BhZ2UtbWtyLS1jdXJyZW50JylcclxuICAgIH1cclxuXHJcbiAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gbmF2TWVudUJ1dHRvbk9uQ2xpY2soKSB7XHJcbiAgbGV0IGFsbE5hdkl0ZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2l0ZS1tYWluLW5hdl9fbGluay1pdGVtJylcclxuXHJcbiAgaWYgKCBhbGxOYXZJdGVtc1swXS5jbGFzc0xpc3QuY29udGFpbnMoJ3NpdGUtbWFpbi1uYXZfX2xpbmstaXRlbS0tZG9udERpc3BsYXknKSApIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsTmF2SXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgYWxsTmF2SXRlbXNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnc2l0ZS1tYWluLW5hdl9fbGluay1pdGVtLS1kb250RGlzcGxheScpXHJcbiAgICAgIGFsbE5hdkl0ZW1zW2ldLmNsYXNzTGlzdC5hZGQoJ3NpdGUtbWFpbi1uYXZfX2xpbmstaXRlbS0tZGlzcGxheScpXHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsTmF2SXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgYWxsTmF2SXRlbXNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnc2l0ZS1tYWluLW5hdl9fbGluay1pdGVtLS1kaXNwbGF5JylcclxuICAgICAgYWxsTmF2SXRlbXNbaV0uY2xhc3NMaXN0LmFkZCgnc2l0ZS1tYWluLW5hdl9fbGluay1pdGVtLS1kb250RGlzcGxheScpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=
