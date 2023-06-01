function loco(){
    gsap.registerPlugin(ScrollTrigger);
  
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    ScrollTrigger.refresh();
        
  }
  
  
  loco();
  

  gsap.to(".loadinganimation",{
    height: 0,
    duration: 1,
    delay: 6,
    ease: Expo.easeInOut
  })

  function cluttercreation(id){
    var x = document.querySelector(id);
    var clutter = "";
    for (var i = 0; i <= (x.textContent.length)-1; i++) {
      clutter += `<span data-delay="${i}">${x.textContent.charAt(i)}</span>`;
    }
  
    x.innerHTML = clutter;
  }
  
    cluttercreation("#one")
    cluttercreation("#two")
    cluttercreation("#three")


    var i = 1
    function loadinganimation(){
      document.querySelectorAll("#one span")
        .forEach(function (elem) {
          gsap.to(elem, {
            y: i*(-150),
            ease:Expo.easeInOut,
            duration: .9,
            delay: elem.dataset.delay * .1
          })

        })
    
      document.querySelectorAll("#two span")
        .forEach(function (elem) {
          gsap.to(elem, {
            y: i*(-150),
            ease: Expo.easeInOut,
            duration: .9,
            delay: elem.dataset.delay * .1
          })
        })
      document.querySelectorAll("#three span")
        .forEach(function (elem) {
          gsap.to(elem, {
            y: i*(-150) ,
            ease:Expo.easeInOut,
            duration: .9,
            delay: elem.dataset.delay * .1
          })
        })
      i++

 
  }

  var temp =  setInterval(() => {
    if( i === 4){
      clearInterval (temp)
    }
    loadinganimation()
}, 1600);



  function navanimation(){
  

  
  var h1 = document.querySelector("#splt1 h1");
  var sh3 = document.querySelector("#splt2 h1");
  var sh5 = document.querySelector("#splt3 h1");
  var sh7 = document.querySelector("#splt4 h1");
  
  cluttercreation("#sh1")
  cluttercreation("#sh2")
  h1.addEventListener("mouseenter",function(){
      document.querySelectorAll("#splt1 h1 span")
        .forEach(function (elem) {
          gsap.to(elem, {
            y: -22,
            ease: Power3.easeOut,
            duration: .8,
            delay: elem.dataset.delay * .1
          })
        })
    
    })
    cluttercreation("#sh1")
   cluttercreation("#sh2")
    h1.addEventListener("mouseleave",function(){
      document.querySelectorAll("#splt1 h1 span")
        .forEach(function (elem) {
          gsap.to(elem, {
            y: 0,
            ease: Power3.easeOut,
            duration: .8,
            delay: elem.dataset.delay * .1
          })
        })
    
    })
    cluttercreation("#sh3")
  cluttercreation("#sh4")
  sh3.addEventListener("mouseenter",function(){
      document.querySelectorAll("#splt2 h1 span")
        .forEach(function (elem) {
          gsap.to(elem, {
            y: -22,
            ease: Power3.easeOut,
            duration: .8,
            delay: elem.dataset.delay * .1
          })
        })
    
    })
  
    cluttercreation("#sh3")
    cluttercreation("#sh4")
    sh3.addEventListener("mouseleave",function(){
      document.querySelectorAll("#splt2 h1 span")
        .forEach(function (elem) {
          gsap.to(elem, {
            y: 0,
            ease: Power3.easeOut,
            duration: .8,
            delay: elem.dataset.delay * .1
          })
        })
    
    })
    cluttercreation("#sh5")
  cluttercreation("#sh6")
  sh5.addEventListener("mouseenter",function(){
      document.querySelectorAll("#splt3 h1 span")
        .forEach(function (elem) {
          gsap.to(elem, {
            y: -22,
            ease: Power3.easeOut,
            duration: .8,
            delay: elem.dataset.delay * .1
          })
        })
    
    })
    cluttercreation("#sh5")
    cluttercreation("#sh6")
    sh5.addEventListener("mouseleave",function(){
      document.querySelectorAll("#splt3 h1 span")
        .forEach(function (elem) {
          gsap.to(elem, {
            y: 0,
            ease: Power3.easeOut,
            duration: .8,
            delay: elem.dataset.delay * .1
          })
        })
    
    })
    cluttercreation("#sh7")
  cluttercreation("#sh8")
    sh7.addEventListener("mouseenter",function(){
        document.querySelectorAll("#splt4 h1 span")
          .forEach(function (elem) {
            gsap.to(elem, {
              y: -22,
              ease: Power3.easeOut,
              duration: .8,
              delay: elem.dataset.delay * .1
            })
          })
      
      })
      cluttercreation("#sh7")
      cluttercreation("#sh8")
      sh7.addEventListener("mouseleave",function(){
        document.querySelectorAll("#splt4  h1 span")
          .forEach(function (elem) {
            gsap.to(elem, {
              y: 0,
              ease: Power3.easeOut,
              duration: .8,
              delay: elem.dataset.delay * .1
            })
          })
      
      })
}
  
  function circal(){
    
    var main = document.querySelector("#main")
    var circale = document.querySelector(".circale")
     var maintext = document.querySelector(".maintext h1")
    main.addEventListener("mousemove",function(dets){
   
     gsap.to(circale,{
       x : dets.clientX,
       y : dets.clientY,
       duration:.4
     })
    })
  
    maintext.addEventListener("mouseenter",function(){
      gsap.to(circale,{
        scale:2.5,
        duration:.5
      })
    })
  
    maintext.addEventListener("mouseleave",function(){
      gsap.to(circale,{
        scale:1,
        duration:.5 
      })
    })
}
  
  function imganimtation(){
    gsap.to(".rightm img",{
      opacity:1,
      duration:1,
      stagger:6,
      delay:3
    })
}
  
  function line(){
    gsap.to("#lcover",{
        scrollTrigger:{
             scroller:"#main",
            trigger:"#lcover",
            start:"top 70%",
            end:"top 5%",
            // markers:true,
            scrub:2,  
        },
        height:0,
        // duration:4
    })
    
    gsap.to(".covern",{
        scrollTrigger:{
             scroller:"#main",
            trigger:".covern",
            start:"top 70%",
            end:"top 10%",
            // markers:true,
            scrub:2  
        },
        width:0,
        // duration:2
    })
    
    gsap.from("#scrolling",{
      scrollTrigger:{
          scroller:"#main",
          trigger:"#leftd",
          start:"top 70%",
          // markers:true,
          scrub:1,  
      },
      x:"30%",
      opacity:0,
      delay:2,
      duration:1,
    })
  
    gsap.from("#leftd h1",{
        scrollTrigger:{
             scroller:"#main",
            trigger:"#leftd",
            start:"top 70%",
            // markers:true,
            scrub:1,  
        },
        y:"30%",
        opacity:0,
        duration:1,
    })
    gsap.from("#leftd span",{
        scrollTrigger:{
             scroller:"#main",
            trigger:"#leftd",
            start:"top 70%",
            // markers:true,
            scrub:1,  
        },
        y:"30%",
        opacity:0,
        duration:1,
    })
}
  
  function beforeafter(){
    var flag = 0;
  
    document.querySelector("#before2")
    .addEventListener("click",function(){
      if(flag === 0){
        document.querySelector("#round").style.left = "65%"
        document.querySelector("#before h1 ").textContent = "AFTER "
        document.querySelector("#linkedin2").style.marginTop = "0%"
        document.querySelector("#linkedin1").style.marginTop = "20%"
        document.querySelector("#linkedin1").style.display = "none"
        document.querySelector("#linkedin2").style.display = "flex"
        flag = 1
      }
      else{
        document.querySelector("#round").style.left = "8px"
        document.querySelector("#before h1 ").textContent = "BEFORE"
        document.querySelector("#linkedin2").style.marginTop = "20%"
        document.querySelector("#linkedin1").style.marginTop = "0%"
        document.querySelector("#linkedin2").style.display = "none"
        document.querySelector("#linkedin1").style.display = "flex"
        flag = 0
      }
    })
  

}
  
  function imghulululu(){
  
    document.querySelector("#citi1 h1 ")
    .addEventListener("mouseenter",function(){
      gsap.to("#citi1 img",{
        y:-190,
        duration: .6,
        ease: Expo.easeInOut
      })
      document.querySelector("#citi1 h1").style.color  = "white"
    })
    
    document.querySelector("#citi2 h1 ")
    .addEventListener("mouseenter",function(){
      gsap.to("#citi2 img",{
        y:-190,
        duration: .6,
        ease: Expo.easeInOut
      })
      document.querySelector("#citi2 h1").style.color  = "white"
    })
    
    document.querySelector("#citi3 h1")
    .addEventListener("mouseenter",function(){
      gsap.to("#citi3 img",{
        y:-190,
        duration: .6,
        ease: Expo.easeInOut
      })
      document.querySelector("#citi3 h1").style.color  = "white"
    
    })
    
    document.querySelector("#citi1")
    .addEventListener("mouseleave",function(){
      gsap.to("#citi1 img",{
        y:0,
        duration: 1,
        ease : Expo.easeInOut
      })
      document.querySelector("#citi1 h1").style.color  = "#2E4B58"
    })
    document.querySelector("#citi2")
    .addEventListener("mouseleave",function(){
      gsap.to("#citi2 img",{
        y:0,
        duration: 1,
        ease : Expo.easeInOut
      })
      document.querySelector("#citi2 h1").style.color  = "#2E4B58"
    
    })
    document.querySelector("#citi3")
    .addEventListener("mouseleave",function(){
      gsap.to("#citi3 img",{
        y:0,
        duration: 1,
        ease : Expo.easeInOut
      })
      document.querySelector("#citi3 h1").style.color  = "#2E4B58"
    })
  
  const lerp = (x, y, a) => x * (1 - a) + y * a;
    var cityimg = document.querySelectorAll(".citi img")
    
    cityimg.forEach(cityimg => {
      cityimg.addEventListener("mousemove",function(dets){
        var dims = cityimg.getBoundingClientRect()
            console.log(dims);
            var xstart = dims.x
            var xend = dims.x + dims.width;
      
            var zeroone = gsap.utils.mapRange(xstart,xend ,0 ,1, dets.clientX)
      
           gsap.to(".citi img",{
                x:  lerp(-50,50, zeroone),
                duration:.3
           })
      })  
    });
  
  
    document.querySelector("#citi1 h1")
    .addEventListener("mouseenter",function(){
      gsap.to("#citysname #bhopal",{
        left:"55%",
        duration:.5,
        ease:Expo.easeInOut
      })
    document.querySelector("#citi2 h1").style.left = "100%"
    document.querySelector("#citi3 h1").style.left = "100%"
  
    })
    document.querySelector("#citi1  h1")
    .addEventListener("mouseleave",function(){
      gsap.to("#citysname #bhopal",{
        left:"100%",
        duration:.5,
        ease:Expo.easeInOut
  
      })
    })
    document.querySelector("#citi2 h1")
    .addEventListener("mouseenter",function(){
      gsap.to("#citysname #delhi",{
        left:"55%",
        duration:.5,
        ease:Expo.easeInOut
  
      })
      document.querySelector("#citi1 h1").style.left = "100%"
      document.querySelector("#citi3 h1").style.left = "100%"
    })
    document.querySelector("#citi2 h1")
    .addEventListener("mouseleave",function(){
      gsap.to("#citysname #delhi",{
        left:"100%",
        duration:.5,
        ease:Expo.easeInOut
  
      })
    })
    document.querySelector("#citi3 h1")
    .addEventListener("mouseenter",function(){
      gsap.to("#citysname #mumbai",{
        left:"50%",
        duration:.5,
        ease:Expo.easeInOut
  
      })
      document.querySelector("#citi1 h1").style.left = "100%"
      document.querySelector("#citi2 h1").style.left = "100%"
    })
    document.querySelector("#citi3 h1")
    .addEventListener("mouseleave",function(){
      gsap.to("#citysname #mumbai",{
        left:"100%",
        duration:.5,
        ease:Expo.easeInOut
  
      })
    });


    var flag2 = 0
    document.querySelector("#firstdesti")
    .addEventListener("click",function(){
      if(flag2 === 0){
        gsap.to(".Destination",{
          height:"90%",
          duration:.6
        })
        flag2 = 1
      }
      else{
        gsap.to(".Destination",{
          height:"0%",
          duration:.3
        })
        flag2 = 0
      }
    })
  
}

function calander(){
  let calendar = document.querySelector('.calendar')

const month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 === 0 && year % 400 ===0)
}

getFebDays = (year) => {
    return isLeapYear(year) ? 29 : 28
}

generateCalendar = (month, year) => {

    let calendar_days = calendar.querySelector('.calendar-days')
    let calendar_header_year = calendar.querySelector('#year')

    let days_of_month = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    calendar_days.innerHTML = ''

    let currDate = new Date()
    if (!month) month = currDate.getMonth()
    if (!year) year = currDate.getFullYear()

    let curr_month = `${month_names[month]}`
    month_picker.innerHTML = curr_month
    calendar_header_year.innerHTML = year

    // get first day of month

    let first_day = new Date(year, month, 1)

    for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
        let day = document.createElement('div')
        if (i >= first_day.getDay()) {
            day.classList.add('calendar-day-hover')
            day.innerHTML = i - first_day.getDay() + 1
            day.innerHTML += `<span></span>
                            <span></span>
                            <span></span>
                            <span></span>`
            if (i - first_day.getDay() + 1 === currDate.getDate() && year === currDate.getFullYear() && month === currDate.getMonth()) {
                day.classList.add('curr-date')
            }
        }
        calendar_days.appendChild(day)
    }
}

let month_list = calendar.querySelector('.month-list')

month_names.forEach((e, index) => {
    let month = document.createElement('div')
    month.innerHTML = `<div data-month="${index}">${e}</div>`
    month.querySelector('div').onclick = () => {
        month_list.classList.remove('show')
        curr_month.value = index
        generateCalendar(index, curr_year.value)
    }
    month_list.appendChild(month)
})

let month_picker = calendar.querySelector('#month-picker')

month_picker.onclick = () => {
    month_list.classList.add('show')
}

let currDate = new Date()

let curr_month = {value: currDate.getMonth()}
let curr_year = {value: currDate.getFullYear()}

generateCalendar(curr_month.value, curr_year.value)

document.querySelector('#prev-year').onclick = () => {
    --curr_year.value
    generateCalendar(curr_month.value, curr_year.value)
}

document.querySelector('#next-year').onclick = () => {
    ++curr_year.value
    generateCalendar(curr_month.value, curr_year.value)
}

let dark_mode_toggle = document.querySelector('.dark-mode-switch')

dark_mode_toggle.onclick = () => {
    document.querySelector('body').classList.toggle('light')
    document.querySelector('body').classList.toggle('dark')
}

  var flag = 0; 
document.querySelector("#check h1 span")
.addEventListener("click",function(){
   if(flag === 0 ){
     document.querySelector(".calendar").style.display = "initial"
     flag = 1
    }
    else{
      document.querySelector(".calendar").style.display = "none"
      flag = 0
   }
})


}

  function checkbox(){
    var flag = 0;
    document.querySelector("#checkdiv #check")
    .addEventListener("click",function(){
      if(flag === 0){
        document.querySelector("#checkcolor").style.scale = 2
        flag = 1
      }
      else{
        document.querySelector("#checkcolor").style.scale = 0
        flag = 0
      }
    })
}
  function locationbutton(){
    var dout = document.querySelector("#dout")
    document.querySelector("#button")
    .addEventListener("mouseenter",function(){
          gsap.to(dout,{
            scale:30,
            // height:"200%",
            // width:"200%",
            duration:.3,
            ease:Expo.easeInOut
          })
         })
    
    document.querySelector("#button")
    .addEventListener("mouseleave",function(){
          gsap.to(dout,{
          scale:1,
          duration:.3,
          ease:Expo.easeInOut
        })
        })
        document.querySelector("#destin #check")
        .addEventListener("click",function(){
          document.querySelector("#destin input").style.display = "initial"
        })
  }
  circal();
  navanimation();
  setTimeout(line, 7000);
  imganimtation();
  imghulululu();
  calander()
  locationbutton();  
  beforeafter();
  checkbox();
  
  
  
  