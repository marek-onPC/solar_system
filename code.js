$(window).on("load", function(){
    $(".loading_screen").fadeOut();
})

document.addEventListener("DOMContentLoaded", function() {

    wow = new WOW(
        {
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
      }
      )
      wow.init();

    //Bezier move path
    // const movePath = {
    //     curviness: 1,
    //     autoRotate: true,
    //     values: [{x: 100, y: -20}, {x: 400, y: 300}, {x: 500, y: 100}]
    // };


    //Animation with timeline, sequence is one by one, first animation starting, after fhinishing next one is starting and so on
    //Define timeline
    gsap.registerPlugin(ScrollTrigger);
    var timeLine = gsap.timeline({defaults: {duration: 1}});

    //Define sequence of animations
    var ani = timeLine.from('.sun', {
        opacity: 0,
        scale: 2.5,
        duration: 2,
        ease: 'Power1.easeOut',
        // x: (window.innerWidth/2)
        //If you have a couple of elements with same class, and you want them to start one by one, you can use "stagger" parameter
    })
    .to('.sun', {
        duration: 1.25,
        ease: 'Power1.easeOut',
        // x: '-100%'
        x: (-(window.innerWidth/3))
    })
    .from('.mercury', {
        opacity: 0,
        duration: 1.25,
        ease: 'Power1.easeOut',
        x: (window.innerWidth/5),
        y: (window.innerHeight/3),
    },"-=1.25" ) //If you want to start a animation ealier in a timeline, add this option: "-=<how much faster in seconds"
    .from('.venus', {
        opacity: 0,
        duration: 1.25,
        ease: 'Power1.easeOut',
        x: (window.innerWidth/5),
        y: (-window.innerHeight/3),
    },"-=1.25" )
    .from('.earth', {
        opacity: 0,
        duration: 1.25,
        ease: 'Power1.easeOut',
        x: (window.innerWidth/10),
        y: (window.innerHeight/10),
    },"-=1.25" )
    .from('.mars', {
        opacity: 0,
        duration: 1.25,
        ease: 'Power1.easeOut',
        x: (-window.innerWidth/10),
        y: (-window.innerHeight/10),
    },"-=1.25" )
    .from('.jupiter', {
        opacity: 0,
        scale: 0.75,
        duration: 1.25,
        ease: 'Power1.easeOut',
        x: (-window.innerWidth/7),
        y: (window.innerHeight/5),
    },"-=1.25" )
    .from('.saturn', {
        opacity: 0,
        scale: 0.75,
        duration: 1.25,
        ease: 'Power1.easeOut',
        x: (-window.innerWidth/7),
        y: (-window.innerHeight/5),
    },"-=1.25" )
    .from('.uranus', {
        opacity: 0,
        scale: 0.75,
        duration: 1.25,
        ease: 'Power1.easeOut',
        x: (-window.innerWidth/4),
        y: (window.innerHeight/10),
    },"-=1.25" )
    .from('.neptune', {
        opacity: 0,
        scale: 0.75,
        duration: 1.25,
        ease: 'Power1.easeOut',
        x: (-window.innerWidth/2),
        y: (-window.innerHeight/5),
    },"-=1.25" )
    .from('.pluto', {
        opacity: 0,
        scale: 0.75,
        duration: 1.25,
        ease: 'Power1.easeOut',
        x: (-window.innerWidth/2),
        y: (window.innerHeight/2),
    },"-=1.25" )
    .from('.h1_scene', {
        opacity: 0,
        duration: 1,
        ease: 'Power1.easeOut',
        y: 100,
    },"-=1.25")
    .from('.p_scene', {
        opacity: 0,
        duration: 1,
        ease: 'Power1.easeOut',
        y: 100,
    },"-=1.25")
    .from('.span_scene', {
        opacity: 0,
        duration: 1,
        ease: 'Power1.easeOut',
    });


    var timeLine_sun = gsap.timeline({
        defaults: {duration: 1},
        scrollTrigger:
            {
                trigger: '.scene_sun',
                start: "top top",
                markers: true,
                pin: true,
                scrub: 0.5,
                end: "+=5000"
            }
    });
    var sun_ani = timeLine_sun.from('.sun_self', {
        opacity: 0,
        scale: 2.5,
        ease: 'Power1.easeOut'
        //If you have a couple of elements with same class, and you want them to start one by one, you can use "stagger" parameter
    })
    .to('.sun_container p', {
        ease: 'Power1.easeOut',
        opacity: 1,
    })
    .to('.sun_container p', {
        ease: 'Power1.easeOut',
        scale: 0.25,
        opacity: 0
    })
    .to('.sun_self', {
        ease: 'Power1.easeOut',
        scale: 0.55
    },"-=1")
    .from('.sun_orbit', {
        ease: 'Power1.easeIn',
        opacity: 0,
        rotation:90
    },"-=1")
    .to('#p4', {
        ease: 'Power1.easeOut',
        opacity: 1
    }, '-=0.75')
    .to('.sun_orbit', {
        duration: 3,
        ease: 'Power1.linear',
        opacity: 0,
        rotation:-360
    })
    .to('#p4', {
        ease: 'Power1.easeOut',
        opacity: 0, 
        scale: 0.5, 
        x: -200,
        y: -100
    }, '-=1');

    // // Define a new ScrollMagic controller and scene, this will allow us to prepare a scrolling animation
    // const controller = new ScrollMagic.Controller();
    // const scene = new ScrollMagic.Scene({
    //     triggerElement: '.scene_sun',
    //     duration: 5000,
    //     triggerHook: 0,
    // })
    // .setPin('.scene_sun')
    // .setTween(sun_ani) //Connecting our animation to ScrollMagic
    // .addIndicators()
    // .addTo(controller);

    

    var timeLine_planetes = gsap.timeline({
        defaults: {duration: 1},
        scrollTrigger:
            {
                trigger: '.planet_container',
                start: "top center",
                markers: true,
            }
    });
    var planetes_ani = timeLine_planetes.to('.planet_container p', {
        duration: 1,
        ease: 'Power1.easeInOut',
        opacity: 1,
        scale: 0.75,
        y: -75,
        rotation: -30

    });


    //Animation without timeline, sequence based on duration and delay property
    
    // gsap.from('.mars', {
    //     opacity: 0,
    //     scale: 5,
    //     duration: 4,
    //     ease: 'Power1.easeOut',
    // }),
    // gsap.from('.mercury', {
    //     opacity: 0,
    //     scale: 5,
    //     duration: 3,
    //     ease: 'Power1.easeOut',
    //     delay: 2,
    // }),
    // gsap.from('h1', {
    //     opacity: 0,
    //     duration: 1,
    //     ease: 'Power1.easeOut',
    //     delay: 3,
    //     y: 100,
    // })




    // .to('.sun_self', {
//     duration: 0.5,
//     ease: 'Power1.easeOut',
//     opacity: 0,
//     scale: 1.1,
//     x: 50,
//     y: -50
// }, '-=0.75')
    // .to('.magni_sun', {
    //     duration: 1.25,
    //     ease: 'Power1.easeOut',
    //     opacity: 1
    // }, '-=0.75')
    // .to('#p5', {
    //     duration: 1.25,
    //     ease: 'Power1.easeOut',
    //     opacity: 1
    // }, '-=1')

});
