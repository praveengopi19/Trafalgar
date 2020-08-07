let menuicon = document.getElementById("menuicon");
let navlistcontainer = document.getElementById("navlist_id");
menuicon.addEventListener("click", () => {
    navlistcontainer.classList.toggle("navlist_active");
})