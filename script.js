const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function loading() {
    var tl = gsap.timeline()
    tl.to("#yellow", {
        top: "-100%",
        delay: 2.3,
        duration: 2,
        ease: "expo.out"
    })
    tl.from("#yellow2", {
        top: "100%",
        delay: 4,
        duration: 2,
        ease: "expo.out"
    }, "time1")
    tl.to("#loader h1", {
        color: "black",
        delay: 4
    }, "time1")
    tl.to("#loader", {
        display: "none"
    })
}

loading()


var sections = document.querySelectorAll(".sec-right")

sections.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        elem.childNodes[3].style.opacity = 1
        elem.childNodes[3].play()
    })
    elem.addEventListener("mouseleave", function () {
        elem.childNodes[3].style.opacity = 0
        elem.childNodes[3].load()
    })
})

document.querySelector("#footer img").addEventListener("click", () => {
    scroll.scrollTo(2)
})