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
  if (page === '/' || page === 'learning-record/') {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjbGllbnQvc3JjL3BhZ2VzL2luZGV4LmpzIiwiY2xpZW50L3NyYy9wYXJ0aWFscy9fbmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJjb25zdCBfbmF2ID0gcmVxdWlyZSgnLi4vcGFydGlhbHMvX25hdi5qcycpXHJcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbihldmVudCkge1xyXG4gIHJlZGlyZWN0Um9vdFRvSG9tZSgpXHJcbiAgbWFya0N1cnJlbnRQYWdlSW5OYXYoKVxyXG4gIGFkZEV2ZW50TGlzdGVuZXJzKClcclxufSlcclxuXHJcblxyXG5mdW5jdGlvbiByZWRpcmVjdFJvb3RUb0hvbWUoKSB7XHJcbiAgY29uc29sZS5sb2cod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKVxyXG4gIGxldCB1cmwgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWVcclxuICBsZXQgcGFnZSA9IHVybC5zcGxpdCgnLycpLnBvcCgpXHJcbiAgY29uc29sZS5sb2cocGFnZSlcclxuICBpZiAocGFnZSA9PT0gJy8nIHx8IHBhZ2UgPT09ICdsZWFybmluZy1yZWNvcmQvJykge1xyXG4gICAgY29uc29sZS5sb2coJ1JFRElSRUNUIFJFUVVJUkVELi4nKVxyXG4gIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaXRlLW1haW4tbmF2X19tZW51LWJ1dHRvbi1jbGlja2FibGUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBuYXZNZW51QnV0dG9uT25DbGljaygpXHJcbiAgfSlcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIG1hcmtDdXJyZW50UGFnZUluTmF2KCkge1xyXG4gIGxldCBsb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmXHJcbiAgbGV0IGN1cnJlbnRQYWdlID0gbG9jYXRpb24uc3BsaXQoJy8nKS5wb3AoKVxyXG4gIGxldCBjdXJyZW50UGFnZU5hbWUgPSBjdXJyZW50UGFnZS5zcGxpdCgnLicpLnNoaWZ0KClcclxuICBsZXQgYWxsUGFnZU1rckRpdnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzaXRlLW1haW4tbmF2X19wYWdlLW1rcicpXHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsUGFnZU1rckRpdnMubGVuZ3RoOyBpKyspIHtcclxuICAgIGxldCBkaXZJZFBhZ2VOYW1lID0gYWxsUGFnZU1rckRpdnNbaV0uaWQuc3BsaXQoJy0nKS5wb3AoKVxyXG5cclxuICAgIGFsbFBhZ2VNa3JEaXZzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3NpdGUtbWFpbi1uYXZfX3BhZ2UtbWtyLS1jdXJyZW50JylcclxuXHJcbiAgICBpZiAoY3VycmVudFBhZ2VOYW1lID09PSAnaW5kZXgnKSB7Y3VycmVudFBhZ2VOYW1lID0gJ2hvbWUnfVxyXG5cclxuICAgIGlmIChkaXZJZFBhZ2VOYW1lID09PSBjdXJyZW50UGFnZU5hbWUpIHtcclxuICAgICAgYWxsUGFnZU1rckRpdnNbaV0uY2xhc3NMaXN0LmFkZCgnc2l0ZS1tYWluLW5hdl9fcGFnZS1ta3ItLWN1cnJlbnQnKVxyXG4gICAgfVxyXG5cclxuICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBuYXZNZW51QnV0dG9uT25DbGljaygpIHtcclxuICBsZXQgYWxsTmF2SXRlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzaXRlLW1haW4tbmF2X19saW5rLWl0ZW0nKVxyXG5cclxuICBpZiAoIGFsbE5hdkl0ZW1zWzBdLmNsYXNzTGlzdC5jb250YWlucygnc2l0ZS1tYWluLW5hdl9fbGluay1pdGVtLS1kb250RGlzcGxheScpICkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxOYXZJdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBhbGxOYXZJdGVtc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdzaXRlLW1haW4tbmF2X19saW5rLWl0ZW0tLWRvbnREaXNwbGF5JylcclxuICAgICAgYWxsTmF2SXRlbXNbaV0uY2xhc3NMaXN0LmFkZCgnc2l0ZS1tYWluLW5hdl9fbGluay1pdGVtLS1kaXNwbGF5JylcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxOYXZJdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBhbGxOYXZJdGVtc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdzaXRlLW1haW4tbmF2X19saW5rLWl0ZW0tLWRpc3BsYXknKVxyXG4gICAgICBhbGxOYXZJdGVtc1tpXS5jbGFzc0xpc3QuYWRkKCdzaXRlLW1haW4tbmF2X19saW5rLWl0ZW0tLWRvbnREaXNwbGF5JylcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ==
