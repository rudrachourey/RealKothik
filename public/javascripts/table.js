function navamanuanimation(){
    var flag = 0;
    
    document.querySelector("#nav i")
    .addEventListener("click",function(){
        if(flag === 0){
            document.querySelector(".table").style.display = "flex"
            flag = 1
        }
        else{
            document.querySelector(".table").style.display = "none"
            flag  = 0;
        }
    })

}

function buttonanimation(){
    document.querySelector("#cancel")
    .addEventListener("mouseenter",function(){
        gsap.to(" #cancel .dot",{
            scale:100,
            duration:.9,
            ease:Expo.easeInOut
        })
    document.querySelector("#cancel h3").style.color = "white"
    })
    document.querySelector("#cancel")
    .addEventListener("mouseleave",function(){
        gsap.to(" #cancel .dot",{
            scale:1,
            duration:.4,
        })
    document.querySelector("#cancel h3").style.color = "#000"
    })
    document.querySelector("#book")
    .addEventListener("mouseenter",function(){
        gsap.to("#book .dot",{
            scale:100,
            duration:.9,
            ease:Expo.easeInOut
        })
    document.querySelector("#book h3").style.color = "white"
    })
    document.querySelector("#book")
    .addEventListener("mouseleave",function(){
        gsap.to(" #book .dot",{
            scale:1,
            duration:.4,
        })
    document.querySelector("#book h3").style.color = "#000"
    })
    
    document.querySelector(".rightreting button ")
    .addEventListener("mouseenter",function(){
        gsap.to(" .rightreting button #dot",{
            scale:100,
            duration:.4,
            ease : Expo.easeInOut
        })
    document.querySelector(".rightreting button h4 ").style.color = "white"
    
    })
    document.querySelector(".rightreting button ")
    .addEventListener("mouseleave",function(){
        gsap.to(" .rightreting button #dot",{
            scale:1,
            duration:.4,
        })
    document.querySelector(".rightreting button h4 ").style.color = "#000"
    
    })

}

function Ratinganimation(){

    document.querySelector(".h1container #elem1 ")
    .addEventListener("mouseenter",function(){
            document.querySelector(".rightreting h5 ").textContent= "Rating : 2.4"
    })
    document.querySelector(".h1container #elem2 ")
    .addEventListener("mouseenter",function(){
            document.querySelector(".rightreting h5 ").textContent= "Rating : 4.0"
    })
    document.querySelector(".h1container #elem3 ")
    .addEventListener("mouseenter",function(){
            document.querySelector(".rightreting h5 ").textContent= "Rating : 3.5"
    })
    document.querySelector(".h1container #elem4 ")
    .addEventListener("mouseenter",function(){
            document.querySelector(".rightreting h5 ").textContent= "Rating : 5.0"
    })
    document.querySelector(".h1container #elem5 ")
    .addEventListener("mouseenter",function(){
            document.querySelector(".rightreting h5 ").textContent= "Rating : 3.2"
    })

}   


function imganimation(){
    var elems = document.querySelectorAll(".elem")
    var images = document.querySelector("#image")
    
    elems.forEach(function(elem){
    
        elem.addEventListener("mouseenter",function(){
            var img = elem.getAttribute("data-image");  
            images.style.display = "intial"
            var w = elem.getAttribute("data-width");  
            var h = elem.getAttribute("data-height");  
            images.style.backgroundImage = `url(${img})`
            images.style.width = w;
            images.style.height = h;
        })
          
            
    })
}


navamanuanimation();
buttonanimation();
imganimation();
Ratinganimation();
booknow();
