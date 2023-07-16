let darkbtn = document.querySelector(".settings");
let togglediv = document.querySelector(".dark-setting");
let toggleclose = document.querySelector(".close");
darkbtn.onclick = function(){
    togglediv.style.display = "block";
}
toggleclose.onclick = function(){
    togglediv.style.display = "none";
}
let body = document.querySelector("body");
let toggleswitch = document.querySelector(".toggle-switch");
let togglecheckbox = document.querySelector(".toggle-checkbox");
let title = document.querySelector(".title");
let getmode = localStorage.getItem("mode");
if(getmode && getmode === "dark"){
    body.classList.add("dark-mode");
    togglecheckbox.setAttribute("checked","");
}
toggleswitch.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    
    if(!body.classList.contains("dark-mode")){
        return localStorage.setItem("mode", "light");
    }
    localStorage.setItem("mode","dark");
})
let imgs = document.querySelector(".imgs");
let img = document.querySelector(".img");
let rightarrow = document.querySelector(".right");
rightarrow.addEventListener("click", () => {
    imgs.scrollBy("300","0");
});
let leftarrow = document.querySelector(".left");
leftarrow.addEventListener("click", () => {
    imgs.scrollBy("-300","0");
});