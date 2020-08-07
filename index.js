let menuicon = document.getElementById("menuicon");
let navlistcontainer = document.getElementById("navlist_id");
menuicon.addEventListener("click", () => {
    console.log("clicked");
    navlistcontainer.classList.toggle("navlist_active");
})