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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjbGllbnQvc3JjL3BhZ2VzL2dpdC5qcyIsImNsaWVudC9zcmMvcGFydGlhbHMvX25hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJjb25zdCBfbmF2ID0gcmVxdWlyZSgnLi4vcGFydGlhbHMvX25hdi5qcycpXHJcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbihldmVudCkge1xyXG4gIG1hcmtDdXJyZW50UGFnZUluTmF2KClcclxuICBhZGRFdmVudExpc3RlbmVycygpXHJcbn0pXHJcblxyXG5cclxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgbGV0IG5hdk1lbnVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2l0ZS1tYWluLW5hdl9fbWVudS1idXR0b24tY2xpY2thYmxlJylcclxuICBuYXZNZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIG5hdk1lbnVCdXR0b25PbkNsaWNrKClcclxuICB9KVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gbWFya0N1cnJlbnRQYWdlSW5OYXYoKSB7XHJcbiAgbGV0IGxvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uLmhyZWZcclxuICBsZXQgY3VycmVudFBhZ2UgPSBsb2NhdGlvbi5zcGxpdCgnLycpLnBvcCgpXHJcbiAgbGV0IGN1cnJlbnRQYWdlTmFtZSA9IGN1cnJlbnRQYWdlLnNwbGl0KCcuJykuc2hpZnQoKVxyXG4gIGxldCBhbGxQYWdlTWtyRGl2cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NpdGUtbWFpbi1uYXZfX3BhZ2UtbWtyJylcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxQYWdlTWtyRGl2cy5sZW5ndGg7IGkrKykge1xyXG4gICAgbGV0IGRpdklkUGFnZU5hbWUgPSBhbGxQYWdlTWtyRGl2c1tpXS5pZC5zcGxpdCgnLScpLnBvcCgpXHJcblxyXG4gICAgYWxsUGFnZU1rckRpdnNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnc2l0ZS1tYWluLW5hdl9fcGFnZS1ta3ItLWN1cnJlbnQnKVxyXG5cclxuICAgIGlmIChjdXJyZW50UGFnZU5hbWUgPT09ICdpbmRleCcpIHtjdXJyZW50UGFnZU5hbWUgPSAnaG9tZSd9XHJcblxyXG4gICAgaWYgKGRpdklkUGFnZU5hbWUgPT09IGN1cnJlbnRQYWdlTmFtZSkge1xyXG4gICAgICBhbGxQYWdlTWtyRGl2c1tpXS5jbGFzc0xpc3QuYWRkKCdzaXRlLW1haW4tbmF2X19wYWdlLW1rci0tY3VycmVudCcpXHJcbiAgICB9XHJcblxyXG4gIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIG5hdk1lbnVCdXR0b25PbkNsaWNrKCkge1xyXG4gIGxldCBhbGxOYXZJdGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NpdGUtbWFpbi1uYXZfX2xpbmstaXRlbScpXHJcblxyXG4gIGlmICggYWxsTmF2SXRlbXNbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKCdzaXRlLW1haW4tbmF2X19saW5rLWl0ZW0tLWRvbnREaXNwbGF5JykgKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbE5hdkl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGFsbE5hdkl0ZW1zW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3NpdGUtbWFpbi1uYXZfX2xpbmstaXRlbS0tZG9udERpc3BsYXknKVxyXG4gICAgICBhbGxOYXZJdGVtc1tpXS5jbGFzc0xpc3QuYWRkKCdzaXRlLW1haW4tbmF2X19saW5rLWl0ZW0tLWRpc3BsYXknKVxyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbE5hdkl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGFsbE5hdkl0ZW1zW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3NpdGUtbWFpbi1uYXZfX2xpbmstaXRlbS0tZGlzcGxheScpXHJcbiAgICAgIGFsbE5hdkl0ZW1zW2ldLmNsYXNzTGlzdC5hZGQoJ3NpdGUtbWFpbi1uYXZfX2xpbmstaXRlbS0tZG9udERpc3BsYXknKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19
