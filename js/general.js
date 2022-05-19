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