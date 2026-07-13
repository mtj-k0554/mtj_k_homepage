const menuBtn = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {

    menu.classList.toggle("active");

});

document.querySelectorAll(".menu a").forEach(link=>{

    link.addEventListener("click",()=>{

        menu.classList.remove("active");

    });

});
