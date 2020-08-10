$(window).on("load", function(){
    $(".loading_screen").fadeOut();
})

document.addEventListener("DOMContentLoaded", function() {


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
                trigger: '.scene_sun', //At which element the animation is triggered
                start: "top top", //When (which position of div) animation is triggered
                markers: true, //Developer start/end markers
                pin: true, //Pin to the top of the div dueign animation
                scrub: 0.5, //"delay effect"
                end: "+=5000" //Adds more height to scroll - makes animation longer
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
    }, '-=1')
    .to('.sun_self', {
        duration: 0.5,
        ease: 'Power1.easeOut',
        opacity: 0,
        scale: 1.1,
        x: 50,
        y: -50
    }, '-=0.75')
    .to('.magni_sun', {
         ease: 'Power1.easeOut',
         opacity: 1
    }, '-=0.75')
    .to('.magni_p', {
        ease: 'Power1.easeOut',
        opacity: 1,
        stagger: 0.5
    });
  



    var timeLine_planetes = gsap.timeline({
        defaults: {duration: 1},
        scrollTrigger:
            {
                trigger: '.planet_container',
                start: "top 75%",
                markers: true,
            }
    });
    var planetes_ani = timeLine_planetes.to('.planet_container p', {
        duration: 0.5,
        ease: 'Power1.easeInOut',
        opacity: 1,
        scale: 0.75,
        y: -60,
        rotation: -30,
        stagger: 0.1,
    });


    var timeLine_earth = gsap.timeline({
        defaults: {duration: 1},
        scrollTrigger:
            {
                trigger: '.planetes_show', //At which element the animation is triggered
                start: "top top", //When (which position of div) animation is triggered
                markers: true, //Developer start/end markers
                pin: true, //Pin to the top of the div dueign animation
                scrub: 0.5, //"delay effect"
                end: "+=2000" //Adds more height to scroll - makes animation longer
            }
    });
    var earth_ani = timeLine_earth.to('.not_earth', {
        duration: 0.75,
        ease: 'Power1.easeInOut',
        opacity: 0,
        scale: 0.75,
        y: -75,
        rotation: -30,
        stagger: 0.1,
    })
    .to('.earth2', {
        duration: 0.75,
        ease: 'Power1.easeInOut',
        scale: 2.5,
    })
    .from('.earth_info', {
        duration: 0.75,
        ease: 'Power1.easeInOut',
        opacity: 0,
        scale: 0.75,
        y: -75,
        rotation: -30,
        stagger: 1.5,
    })
    .to('.earth_info', {
        duration: 0.75,
        ease: 'Power1.easeInOut',
        opacity: 0,
        scale: 0.75,
        y: -75,
        rotation: -30,
        stagger: 1.5,
    }, "+=3");

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
});
