const menuList = document.querySelector(".header_menu")
const menuShow = document.querySelector(".header_icon-menu")
const menuClose = document.querySelector(".header_icon-close")

menuShow.addEventListener("click",()=>{
    menuList.classList.add("menu_respon")
})
menuClose.addEventListener("click",()=>{
    menuList.classList.remove("menu_respon")
})