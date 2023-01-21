const d = document,
$header = d.querySelector(".header");


d.addEventListener("click", e=>{
  if(e.target.matches(".header__btn")  || e.target.matches(`${".header__btn"} *`)){
    $header.classList.toggle("open");
  }

  if(e.target.matches(".nav__a")){
    $header.classList.remove("open")
  }
})
