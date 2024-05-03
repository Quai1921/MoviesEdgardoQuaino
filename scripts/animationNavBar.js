const navBar = document.getElementById("navBar")
const btnOpen = document.getElementById("btnOpen")
const btnClose = document.getElementById("btnClose")
const navBarMenu = document.getElementById("navBarMenu")
const body = document.body


btnOpen.addEventListener("click", e =>{
    navBar.classList.remove("max-md:opacity-0")
    navBar.classList.remove("max-md:hidden")
    navBar.classList.add("max-md:block")
    body.classList.add("max-md:overflow-hidden")
    navBar.classList.remove("max-md:absolute")
    navBar.classList.add("max-md:fixed")
    navBar.classList.add("max-md:z-[1000]")
    // navBar.classList.remove("max-md:translate-x-full")
    // navBar.classList.add("max-md:w-full")
})


btnClose.addEventListener("click", e =>{
    // navBar.classList.add("max-md:translate-x-full")
    // setTimeout(() => {
    navBar.classList.add("max-md:opacity-0")
    navBar.classList.add("max-md:hidden")
    navBar.classList.remove("max-md:block")
    body.classList.remove("max-md:overflow-hidden")
    navBar.classList.remove("max-md:fixed")
    navBar.classList.add("max-md:absolute")
    navBar.classList.remove("max-md:transform")
    navBar.classList.remove("max-md:z-[1000]")
    // navBar.classList.remove("max-md:w-full")
// }, 500)

})



window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        navBarMenu.classList.add("max-md:fixed")
        navBarMenu.classList.add("max-md:w-full")
        navBarMenu.classList.add("max-md:top-0")

    } else {
        navBarMenu.classList.remove("max-md:fixed")
        navBarMenu.classList.remove("max-md:w-full")
        navBarMenu.classList.remove("max-md:top-0")
    }
})


