const  header = document.querySelector('header')


/* event on window scroll */
window.addEventListener("scroll",(e)=>{
  if(window.scrollY > 0 ){
    if(!header.classList.contains("fixed_header")) header.classList.add("fixed_header")
  }
  else{
    if(header.classList.contains("fixed_header")) header.classList.remove("fixed_header")
  }
})
/* end event on window scroll */

/* active menu */
let links = document.querySelectorAll('.links')
let sections = document.querySelectorAll('section')

function activeMenu(){
  let len = sections.length
  while(--len && window.scrollY + 96 < sections[len].offsetTop){}
  links.forEach(link => link.classList.remove("active"))
  links[len].classList.add("active")
}

activeMenu();
window.addEventListener("scroll", activeMenu)

/* end active menu */