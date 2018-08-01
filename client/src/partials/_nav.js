document.addEventListener('DOMContentLoaded', function(event) {
  markCurrentPageInNav()
})

function markCurrentPageInNav() {
  let location = window.location.href
  console.log(location)

  //splice out current page from full location
  //get all links from nav
  //remove class .site-main-nav__page-mkr--current from all of em
  //add class .site-main-nav__page-mkr--current to current
}
