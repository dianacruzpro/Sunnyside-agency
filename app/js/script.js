const d = document,
$header = d.querySelector(".header"),
hiddenElements = d.querySelectorAll('.hidden');


d.addEventListener("click", e=>{
  if(e.target.matches(".header__btn")  || e.target.matches(`${".header__btn"} *`)){
    $header.classList.toggle("open");
  }

  if(e.target.matches(".nav__a")){
    $header.classList.remove("open")
  }
})



const observer = new IntersectionObserver(entries =>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }else{
      entry.target.classList.remove('show');
    }
  })
});

hiddenElements.forEach(el=>observer.observe(el))
