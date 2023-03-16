document.addEventListener("DOMContentLoaded",()=>{
    let modal=document.querySelector(".modal");
    let modalClose=document.querySelector(".modal__close");
    let modalComplete=document.querySelector(".modal--complete");
    let modalCompleteClose=document.querySelector(".modal--complete__close");
    modalCompleteClose.addEventListener("click",()=>{
        modalComplete.classList.add("modal--complete__close--window");
    })
    modalClose.addEventListener("click",()=>{
        modal.classList.add("modal-close");
    });
    setTimeout(()=>{
        modal.classList.add("modal-show");
    },20000); 
});
