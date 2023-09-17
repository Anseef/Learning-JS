const slides = document.querySelectorAll(".image-slides div");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const dots = document.querySelectorAll(".dots li");
let currentIdx = 0;

nextBtn.addEventListener("click", () => {
    removeAllClass();
    currentIdx = currentIdx == slides.length -1 ? 0 : currentIdx +1;
    slides[currentIdx].classList.add("shown")
    dots[currentIdx].classList.add("active");
})
prevBtn.addEventListener('click',() => {
    removeAllClass();
    currentIdx = currentIdx == 0 ? slides.length-1 : currentIdx - 1;
    slides[currentIdx].classList.add("shown");
    dots[currentIdx].classList.add("active");
})

dots.forEach((dot,id) => {
    dot.addEventListener('click',() => {
        removeAllClass();
        dot.classList.add("active");
        slides[id].classList.add("shown");
        currentIdx = id;
    })
})
const removeAllClass = () => {
    slides.forEach((slide) => {
        slide.classList.remove("shown");
    });
    dots.forEach((dot) =>{
        dot.classList.remove("active");
    })
}