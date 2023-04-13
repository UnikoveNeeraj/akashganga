import Header from './header';
import MainContent from './content';
import Footer from './Footer';
import { useEffect } from 'react';
import Banner from './Banner';
import './common.js';
import './slick.min.js';

const HomePage = () => {
    useEffect(() => {
      window.scrollTo({top: 0, behavior: 'smooth'})
    }, [])

    useEffect(() => {
      // SLIDER
      $('.memberList').slick({
        infinite: true,
        autoplay: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><b class="icon-arrow-left"></b></button>',
        nextArrow: '<button type="button" class="slick-next"><b class="icon-arrow-right"></b></button>',
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          }
        ]
      });


      // HERO SLIDER
      $('.bannerSlider').slick({
        //infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        arrows: false
      });

      window.gsap.from(".homeIntro-col.first", {
        opacity: -1,
        yPercent: -40,
        ease: "none",
        scrollTrigger: {
          trigger: ".homeIntro",
          start: "top bottom",
          end: "top 60%",
          scrub: 2,
          // markers: true
        },
      });

      window.gsap.from(".homeIntro-col.last", {
        opacity: -1,
        yPercent: 40,
        ease: "none",
        scrollTrigger: {
          trigger: ".homeIntro",
          start: "top 80%",
          end: "top 40%",
          scrub: 2,
        },
      });

      window.gsap.from(".videoWrap", {
        opacity: -0.5,
        yPercent: 60,
        ease: "none",
        scrollTrigger: {
          trigger: ".videoWrap",
          start: "top 100%",
          end: "top 70%",
          scrub: 2,
        },
      });

      window.gsap.from(".otherBox.left", {
        opacity: -2,
        xPercent: -60,
        ease: "none",
        scrollTrigger: {
          trigger: ".homeOther",
          start: "top 80%",
          end: "top 50%",
          scrub: 2,
        },
      });

      window.gsap.from(".otherBox.right", {
        opacity: -2,
        xPercent: 40,
        ease: "none",
        scrollTrigger: {
          trigger: ".homeOther",
          start: "top 80%",
          end: "top 50%",
          scrub: 2,
        },
      });

      window.gsap.from(".sevaSection-title", {
        opacity: -2,
        yPercent: -60,
        ease: "none",
        scrollTrigger: {
          trigger: ".sevaSection",
          start: "top bottom",
          end: "top 60%",
          scrub: 2,
        },
      });

      /*   window.gsap.from(".sevaSection-chart", {
           opacity: -2,
           yPercent: 60,
           ease: "none",
           scrollTrigger: {
             trigger: ".sevaSection",
             start: "top 60%",
             end: "top 20%",
             scrub: true,
           },
         });*/

      window.gsap.from(".sevaSection-chart", {
        // opacity: -1,
        yPercent: 60,
        ease: "none",
        scrollTrigger: {
          trigger: "#chartDesign",
          start: "top 80%",
          end: "top 60%",
          onEnter: () => { document.querySelector("#chartDesign")?.classList?.add("enable"); },
          onLeaveBack: () => { document.querySelector("#chartDesign")?.classList?.remove("enable"); },
          scrub: 2,
          // markers: true
        },
      });


      window.gsap.from(".sevaHaatSection-work", {
        opacity: -2,
        yPercent: -40,
        ease: "none",
        scrollTrigger: {
          trigger: ".sevaHaatSection",
          start: "top 80%",
          end: "top 50%",
          scrub: 2,
        },
      });

      window.gsap.from(".sevaHaatSection-more", {
        opacity: -2,
        yPercent: 80,
        ease: "none",
        scrollTrigger: {
          trigger: ".sevaHaatSection",
          start: "top 80%",
          end: "top 30%",
          scrub: 2,
          //markers: true
        },
      });


      window.gsap.from(".wishSection h2", {
        opacity: -2,
        yPercent: 60,
        ease: "none",
        scrollTrigger: {
          trigger: ".wishSection",
          start: "top 100%",
          end: "top 60%",
          scrub: 2,
        },
      });

      window.gsap.from(".wishSection a", {
        opacity: -2,
        yPercent: 60,
        ease: "none",
        scrollTrigger: {
          trigger: ".wishSection",
          start: "top 90%",
          end: "top 50%",
          scrub: 2,
          //markers: true
        },
      });

      window.gsap.from(".memberList", {
        opacity: -2,
        yPercent: 60,
        ease: "none",
        scrollTrigger: {
          trigger: ".wishSection",
          start: "top 75%",
          end: "top 40%",
          scrub: 2,
          //markers: true
        },
      });

      window.gsap.from(".wishList li:nth-child(1)", {
        opacity: -2,
        yPercent: -60,
        ease: "none",
        scrollTrigger: {
          trigger: ".wishSection",
          start: "top 92%",
          end: "top 40%",
          scrub: 2,
        },
      });

      window.gsap.from(".wishList li:nth-child(2)", {
        opacity: -2,
        yPercent: -60,
        ease: "none",
        scrollTrigger: {
          trigger: ".wishSection",
          start: "top 88%",
          end: "top 36%",
          scrub: 2,
        },
      });

      window.gsap.from(".wishList li:nth-child(3)", {
        opacity: -2,
        yPercent: -60,
        ease: "none",
        scrollTrigger: {
          trigger: ".wishSection",
          start: "top 84%",
          end: "top 32%",
          scrub: 2,
        },
      });

      window.gsap.from(".wishList li:nth-child(4)", {
        opacity: -2,
        yPercent: -60,
        ease: "none",
        scrollTrigger: {
          trigger: ".wishSection",
          start: "top 80%",
          end: "top 28%",
          scrub: 2,
        },
      });

      window.gsap.from(".blogSection-title", {
        opacity: -2,
        yPercent: 60,
        ease: "none",
        scrollTrigger: {
          trigger: ".blogSection",
          start: "top 100%",
          end: "top 70%",
          scrub: 2,
          //markers: true
        },
      });

      window.gsap.from(".articleList li:nth-child(3)", {
        opacity: -2,
        xPercent: -40,
        ease: "none",
        scrollTrigger: {
          trigger: ".blogSection",
          start: "top 96%",
          end: "top 54%",
          scrub: 2,
        },
      });

      window.gsap.from(".articleList li:nth-child(2)", {
        opacity: -2,
        xPercent: -40,
        ease: "none",
        scrollTrigger: {
          trigger: ".blogSection",
          start: "top 92%",
          end: "top 50%",
          scrub: 2,
        },
      });

      window.gsap.from(".articleList li:nth-child(1)", {
        opacity: -2,
        xPercent: -40,
        ease: "none",
        scrollTrigger: {
          trigger: ".blogSection",
          start: "top 88%",
          end: "top 46%",
          scrub: 2,
        },
      });

      window.gsap.from(".subscribeWrap", {
        opacity: -3,
        yPercent: -40,
        ease: "none",
        scrollTrigger: {
          trigger: ".subscribeSection",
          start: "top bottom",
          end: "top 60%",
          scrub: 2,
          // markers: true
        },
      });

      $("#typed").typed({
        strings: ['<b class="ani_01">article</b>', '<b class="ani_02">book</b>', '<b class="ani_03">chapter</b>'],
        typeSpeed: 50,
        startDelay: 0,
        backSpeed: 100,
        backDelay: 2000,
        loop: true,
        cursorChar: "",
        contentType: 'html'
      });

      $('.videoWrap').click(function () {
        if ($("#processVideo").get(0).paused) {
          $("#processVideo").trigger('play');
          $(".videoButton").fadeOut(500);
        } else {
          $("#processVideo").trigger('pause');
          $(".videoButton").fadeIn(500);
        }
      });
      //PARALLAX      
      function scrollBanner() {
        $(document).on('scroll', function () {
          let scrollPos = $(this).scrollTop();
          $('.parallax-blur-top').css({
            'top': (scrollPos / .95) + 'px',
            // '-webkit-filter': 'blur(' + (.2 + (scrollPos / 100)) + 'px)',
            // 'filter': 'blur(' + (.2 + (scrollPos / 100)) + 'px)',
            'opacity': 1 - (scrollPos / 10000)
          });

          $('.parallax-fade-down').css({
            'bottom': (scrollPos / .95) + 'px',
            // '-webkit-filter': 'blur(' + (20 + (scrollPos / -100)) + 'px)',
            //'filter': 'blur(' + (20 + (scrollPos / -100)) + 'px)',
            'opacity': (scrollPos / 10000)
          });

          $('.parallax-fade-up').css({
            'top': (scrollPos / .8) + 'px',
            // '-webkit-filter': 'blur(' + (.2 + (scrollPos / 100)) + 'px)',
            // 'filter': 'blur(' + (.2 + (scrollPos / 100)) + 'px)',
            'opacity': (scrollPos / 2000)
          });

          $('.parallax-fade-down.ele_04').css({
            'bottom': (scrollPos / 1.2) + 'px',
            // '-webkit-filter': 'blur(' + (20 + (scrollPos / -100)) + 'px)',
            //'filter': 'blur(' + (20 + (scrollPos / -100)) + 'px)',
            'opacity': (scrollPos / 20000)
          });

          $('.parallax-fade-down.ele_05').css({
            'bottom': (scrollPos / 2) + 'px',
            // '-webkit-filter': 'blur(' + (20 + (scrollPos / -100)) + 'px)',
            //'filter': 'blur(' + (20 + (scrollPos / -100)) + 'px)',
            'opacity': (scrollPos / 10000)
          });


        });
      }

      scrollBanner();
    }, [])

    return(
      <>
        <Banner />
        <Header />
        <MainContent />
        <div
            className="pullUp"
            onClick={(e) => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <b className="icon-arrow-right" />
          </div>
        <Footer />
        <div className="parallaxWrap">
          <div className="parallaxElement ele_01 parallax-blur-top" />
          <div className="parallaxElement ele_02 parallax-fade-up" />
          <div className="parallaxElement ele_03 parallax-fade-down" />
          <div className="parallaxElement ele_04 parallax-fade-down" />
          <div className="parallaxElement ele_05 parallax-fade-down" />
        </div>
      </>
    )
}

export default HomePage;