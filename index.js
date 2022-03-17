gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

tl.to(".third",{xPercent:-100})
.to(".fifth",{yPercent:-100})
.to(".fourth",{xPercent:-200})
.to(".sixth",{xPercent:-200})
.to(".seventh",{yPercent:-200});


ScrollTrigger.create({
    animation:tl,
    trigger:"#container",
    end:"+=4000",
    scrub:true,
    pin:true,
    anticipatePin:1
});
