const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const sun = document.getElementById("sun");
const moon = document.getElementById("moon");

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    sun.style.display = "block";
    moon.style.display = "none";
    sun.style.filter = "invert(1)";
  } else {
    sun.style.display = "none";
    moon.style.display = "block";
  }
});


let str = "";
let btns = document.querySelectorAll('.button')

Array.from(btns).forEach((button) => {
  button.addEventListener( 'click', (e) =>{
    if(e.target.innerHTML == "="){
      str = eval(e);
      document.querySelector('input').value = str
    }
    else if(e.target.innerHTML == "Ac"){
      str = "";
      document.querySelector('input').value = str
    } else{
      str = str + e.target.innerHTML;
      document.querySelector('input').value = str;
    }


  })
})
