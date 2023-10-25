gsap.from("#nav",{
// y:-200,
// duration:1,stagger:1
scale:2,delay:1,duration:1,opacity:0
})
gsap.from("span",{
    y:-200,
    duration:1,
    stagger:0
    })
gsap.from("#centre h3",{
   scale:2,delay:2,opacity:0
})
gsap.from("#centre h1",{
    y:-200,delay:3,opacity:0,
    duration:1.5
})
gsap.from("#centre img",{
    opacity:0,y:200,delay:3.5,
    duration:1.5
})
gsap.from("#bottom ",{
    scale:2,delay:4,duration:1.8,opacity:0
})
gsap.from("#view",{
    scale:2,delay:4.5,duration:1.5,opacity:0
})
gsap.from("#leftside",{
    x:-100,duration:1.5,delay:4.6,opacity:0
})