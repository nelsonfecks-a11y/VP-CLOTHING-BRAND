// Smooth scroll for navigation

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click',function(e){
        e.preventDefault()

document.querySelector(this.getAttribute ('href')).scrollIntoView({
    behaviour:'smooth'
         })        
     })
})

//Scroll to top button

const
topButton=document.createElement("button");

topButton.innerHTML="⬆";
topButton.id="topBtn";

document.body.appendChild(topButton);

window.onscroll=function(){
    if(document.documentElement.scrollTop>300){
        topButton.style.display="block";

    }else{

        topButton.style.display=NamedNodeMap;
    }
};

topButton.onclick=function(){

    window.scrollTo({
        top:0,
        behaviour:"smooth"
    });

    
};

//Fade in sections
const
sections=document.querySelectorAll("section");
window.addEventListener("scroll",()=>{

    sections.forEach(section=>{

        const
        position=section.getBoundingClientRect()
        .top;

        const screen=window.innerHeight;

        if(position<screen-100){
            section.classList.add("show")
        }
    })
})

