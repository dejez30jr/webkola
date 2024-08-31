const menuIcon = document.getElementById("menu-icon")
const menulist = document.getElementById("menu-list")
const nav = document.querySelector('nav')
// const li = document.getElementsByTagName("li")
menuIcon.addEventListener("click", ()=>{
    menulist.classList.toggle("hidden")
    document.querySelector('hidden').style.background= "black";
})

// eskul
// document.querySelector('.eskul').addEventListener('wheel', function(event){
//     if(event.deltaY > 0){
//         this.scrollLeft += 50;
//     }else{
//         this.scrollLeft -= 50;
//     };
//     event.preventDefault();
// });
