document.addEventListener('DOMContentLoaded',()=>{
    let modal=document.querySelector(".modal");
    let modalClose=document.querySelector(".modal__close");
    console.log(modalClose);
    modalClose.addEventListener("click",()=>{
        modal.style.display="none";
    });
    setTimeout(()=>{
        modal.classList.add("modal-show");
    },10000)
})