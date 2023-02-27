document.addEventListener("DOMContentLoaded",()=>{
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
        window.onresize=resizeSliders;
        for(let i=0;i<dots.length;i++){
            dots[i].addEventListener("click",()=>{
                let width=linkInner.clientWidth;
                linkInner.style.transform = `translateX(${-(i)*width}px)`;
                clearActiveDot(dots);
                dots[i].classList.add("dot--active");
            });
        }
        for(let i=0;i<photos.length;i++){
            photos[i].addEventListener("click",()=>{
                let width=linkInner.clientWidth;
                clearActiveDot(dots);
                if(i==photos.length-1){
                    linkInner.style.transform = `translateX(${-(0)*width}px)`;
                    dots[0].classList.add("dot--active");
                }
                else{
                    linkInner.style.transform = `translateX(${-(i+1)*width}px)`;
                    dots[i+1].classList.add("dot--active");
                }
            });
        }
    });

        function resizeSliders(){
            let links=document.querySelectorAll(".main__link");
            links.forEach((item)=>{
                let dots=item.querySelectorAll(".dot"),
                    linkInner=item.querySelector('.links__photos--inner');
                for(let i=0;i<dots.length;i++){
                    if(dots[i].classList.contains("dot--active")){
                        let width=linkInner.clientWidth;
                        console.log(width);
                        linkInner.style.transform = `translateX(${-(i)*width}px)`;
                    }
                }
            });
        }

        function clearActiveDot(dots){
            dots.forEach((e)=>{
                e.classList.remove("dot--active");
            });
        }
});
    
