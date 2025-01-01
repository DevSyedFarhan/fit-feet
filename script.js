let anim = gsap.timeline();
gsap.set(".a", {opacity: 0, y:10})
gsap.set(".b", {opacity:0, rotate:90, scale:.5})

anim
.from("#left",{
    width : 0,
    duration:1.5,
    ease: Expo.easeInOut,
})
.from("#right",{
    width : 0,
    duration:1.5,
    ease: Expo.easeInOut,
})
.to(".a",{
    delay:-2,
    stagger:0.15,
    opacity:1,
    y: 0,
    duration:1.5,
    ease: Expo.easeInOut,
})
.to(".b", {
    delay: -2,
    rotate:-5,
    opacity: 1,
    duration:2.5,
    ease : Expo.easeInOut,
    scale:1,
})