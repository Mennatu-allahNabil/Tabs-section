const tabs=document.querySelectorAll(".tab-btn");
const content=document.querySelectorAll(".content");
tabs.forEach((tab,index)=>{
    tab.addEventListener("click",(e)=>{
        tabs.forEach((tab)=>{tab.classList.remove("active");});
        tab.classList.add("active");
        let line=document.querySelector(".line");
        line.style.width=e.target.offsetWidth+"px";
        line.style.left=e.target.offsetLeft+"px";
        content.forEach((c)=>{c.classList.remove("active");});
        content[index].classList.add("active");
    });
   
});