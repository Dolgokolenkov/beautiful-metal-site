export function modal(){
    let modal=document.querySelector(".modal");
    let modalClose=document.querySelector(".modal__close");
    console.log(modalClose);
    modalClose.addEventListener("click",()=>{
        modal.classList.add("modal-close");
    });
    setTimeout(()=>{
        modal.classList.add("modal-show");
    },1000);
}
