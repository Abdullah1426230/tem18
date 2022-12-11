let loading = document.querySelector("div#loading"),
    toBottom = document.querySelector("#toBottom"),
    sectionOne = document.querySelector("section.one"),
    openMenu = document.querySelector("#openMenu"),
    closeMenu = document.querySelector("#closeBtn"),
    sideMenu = document.querySelector("aside"),
    toTop = document.querySelector("#toTop"),
    sideOverlay = document.querySelector(".sideOverlay"),
    openMenu2 = document.querySelector("#openMenu2");


toBottom.onclick = () => {
    window.scrollTo(0, +sectionOne.offsetTop)
}


document.body.onload = () => {
    loading.style.opacity = "0"
    setTimeout(() => {
        loading.style.display = "none"
    }, 2000)
}

openMenu.onclick = () => {
    sideMenu.style.left = "0px"
    sideOverlay.style.display = "block";
    document.body.style.overflowY = "hidden"
}
openMenu2.onclick = () => {
    sideMenu.style.left = "0px"
    sideOverlay.style.display = "block";
    document.body.style.overflowY = "hidden"

}
closeMenu.onclick = () => {
    sideMenu.style.left = "-250px"
    sideOverlay.style.display = "none";
    document.body.style.overflowY = "visible"

}
toTop.onclick = () => {
    window.scrollTo(0, 0)
}