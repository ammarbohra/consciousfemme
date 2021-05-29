gsap.defaults({duration: 2, ease: "power4.out"})
let tl = gsap.timeline({repeat: -1, repeatDelay: 0});
tl.to('#lotus', {scale: 0.9})
tl.to('#lotus-waves', {scale: 1.5, duration: 4}, 0)
tl.to('#lotus-waves', {opacity: 0, ease: 'none'}, 1)
tl.to('#lotus', {scale: 1, ease: "power4.inOut"}, 2)
// tl.set('#lotus-waves',{scale: 1, opacity: 1})
// tl.to('#lotus-waves',{scale: 1, opacity: 1, duration: 2, ease: "power4.in"}, "<")
// tl.to('#lotus-waves', {opacity: 0, duration: 2}, "<2")