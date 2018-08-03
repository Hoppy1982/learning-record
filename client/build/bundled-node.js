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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjbGllbnQvc3JjL3BhZ2VzL25vZGUuanMiLCJjbGllbnQvc3JjL3BhcnRpYWxzL19uYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNvbnN0IF9uYXYgPSByZXF1aXJlKCcuLi9wYXJ0aWFscy9fbmF2LmpzJylcclxuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgcmVkaXJlY3RSb290VG9Ib21lKClcclxuICBtYXJrQ3VycmVudFBhZ2VJbk5hdigpXHJcbiAgYWRkRXZlbnRMaXN0ZW5lcnMoKVxyXG59KVxyXG5cclxuXHJcbmZ1bmN0aW9uIHJlZGlyZWN0Um9vdFRvSG9tZSgpIHtcclxuICBjb25zb2xlLmxvZyh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpXHJcbiAgbGV0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZVxyXG4gIGxldCBwYWdlID0gdXJsLnNwbGl0KCcvJykucG9wKClcclxuICBjb25zb2xlLmxvZyhwYWdlKVxyXG4gIGlmIChwYWdlID09PSAnLycgfHwgcGFnZSA9PT0gJy9sZWFybmluZy1yZWNvcmQvJykge1xyXG4gICAgY29uc29sZS5sb2coJ1JFRElSRUNUIFJFUVVJUkVELi4nKVxyXG4gIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaXRlLW1haW4tbmF2X19tZW51LWJ1dHRvbi1jbGlja2FibGUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBuYXZNZW51QnV0dG9uT25DbGljaygpXHJcbiAgfSlcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIG1hcmtDdXJyZW50UGFnZUluTmF2KCkge1xyXG4gIGxldCBsb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmXHJcbiAgbGV0IGN1cnJlbnRQYWdlID0gbG9jYXRpb24uc3BsaXQoJy8nKS5wb3AoKVxyXG4gIGxldCBjdXJyZW50UGFnZU5hbWUgPSBjdXJyZW50UGFnZS5zcGxpdCgnLicpLnNoaWZ0KClcclxuICBsZXQgYWxsUGFnZU1rckRpdnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzaXRlLW1haW4tbmF2X19wYWdlLW1rcicpXHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsUGFnZU1rckRpdnMubGVuZ3RoOyBpKyspIHtcclxuICAgIGxldCBkaXZJZFBhZ2VOYW1lID0gYWxsUGFnZU1rckRpdnNbaV0uaWQuc3BsaXQoJy0nKS5wb3AoKVxyXG5cclxuICAgIGFsbFBhZ2VNa3JEaXZzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3NpdGUtbWFpbi1uYXZfX3BhZ2UtbWtyLS1jdXJyZW50JylcclxuXHJcbiAgICBpZiAoY3VycmVudFBhZ2VOYW1lID09PSAnaW5kZXgnKSB7Y3VycmVudFBhZ2VOYW1lID0gJ2hvbWUnfVxyXG5cclxuICAgIGlmIChkaXZJZFBhZ2VOYW1lID09PSBjdXJyZW50UGFnZU5hbWUpIHtcclxuICAgICAgYWxsUGFnZU1rckRpdnNbaV0uY2xhc3NMaXN0LmFkZCgnc2l0ZS1tYWluLW5hdl9fcGFnZS1ta3ItLWN1cnJlbnQnKVxyXG4gICAgfVxyXG5cclxuICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBuYXZNZW51QnV0dG9uT25DbGljaygpIHtcclxuICBsZXQgYWxsTmF2SXRlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzaXRlLW1haW4tbmF2X19saW5rLWl0ZW0nKVxyXG5cclxuICBpZiAoIGFsbE5hdkl0ZW1zWzBdLmNsYXNzTGlzdC5jb250YWlucygnc2l0ZS1tYWluLW5hdl9fbGluay1pdGVtLS1kb250RGlzcGxheScpICkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxOYXZJdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBhbGxOYXZJdGVtc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdzaXRlLW1haW4tbmF2X19saW5rLWl0ZW0tLWRvbnREaXNwbGF5JylcclxuICAgICAgYWxsTmF2SXRlbXNbaV0uY2xhc3NMaXN0LmFkZCgnc2l0ZS1tYWluLW5hdl9fbGluay1pdGVtLS1kaXNwbGF5JylcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxOYXZJdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBhbGxOYXZJdGVtc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdzaXRlLW1haW4tbmF2X19saW5rLWl0ZW0tLWRpc3BsYXknKVxyXG4gICAgICBhbGxOYXZJdGVtc1tpXS5jbGFzc0xpc3QuYWRkKCdzaXRlLW1haW4tbmF2X19saW5rLWl0ZW0tLWRvbnREaXNwbGF5JylcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ==
