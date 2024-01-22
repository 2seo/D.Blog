const header = document.querySelector("header");
const title = document.querySelector(".title-wrap");
const cover = document.querySelector(".cover");
const progress = header.querySelector(".progress");
const bar = progress.querySelector(".bar");
const main = document.querySelector(".main");

window.addEventListener('scroll', () => {
    if(scrollY>=innerHeight){
        header.classList.add("fixed");
        progress.style.display = "block";
    }else {
        header.classList.remove("fixed");
        progress.style.display = "none";
        cover.style.backgroundPosition = `center ${-scrollY*0.5}px`;
        title.style.bottom = scrollY * 0.8 + "px";
    }
    bar.style.width = (scrollY/main.scrollHeight)*100 + "%";
})