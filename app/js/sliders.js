export function sliders(){
    let links=document.querySelectorAll(".main__link");
    links.forEach((item)=>{
        let photos=item.querySelectorAll(".links__img"),
            dotsInner=item.querySelector(".dots"),
            dots=[],
            linkInner=item.querySelector('.links__photos--inner');
        for(let i=0;i<photos.length;i++){
            let dot=document.createElement("div");
            dots.push(dot)
            dot.classList.add("dot");
            dotsInner.appendChild(dot);
            if(i==0){
                dot.classList.add("dot--active");
            }
        }
        let width=linkInner.clientWidth;
        for(let i=0;i<dots.length;i++){
            dots[i].addEventListener("click",()=>{
                linkInner.style.transform = `translateX(${-(i)*width}px)`;
                clearActiveDot(dots);
                dots[i].classList.add("dot--active");
            });
        }
    });
}

function clearActiveDot(dots){
    dots.forEach((e)=>{
        e.classList.remove("dot--active");
    });
}
