const checkbox = window.document.getElementById("checkbox");
checkbox.addEventListener("click", ()=>{
    window.document.body.classList.toggle("dark");
});

const menu = window.document.querySelector(".navegation");
menu.addEventListener("click", ()=>{
    menu.classList.toggle("active");
});
