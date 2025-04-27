const menus = document.querySelector("nav ul");
const header = document.querySelector("header");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener('click',()=>{
    menus.classList.add("display");
});

closeBtn.addEventListener('click',()=>{
    menus.classList.remove("display");
});

//scoll sticky navbar
window.addEventListener("scroll",()=>{
    if(document.documentElement.scrollTop>20){
        header.classList.add("sticky");
    }else{
        header.classList.remove("sticky");
    }

});

//static numbers
const countersEl = document.querySelectorAll(".numbers");
countersEl.forEach((counters)=>{
    counters.textContent = 0;//导致那个出行订票那4个数字都变成0了

    increamentCounters();

    function increamentCounters(){
        let currentNum =+ counters.textContent;
        const dataCeil = counters.getAttribute("data-ceil");

        const increament = dataCeil / 25;//调数字变化频率

        currentNum = Math.ceil(currentNum + increament);

        if(currentNum<dataCeil){
            counters.textContent = currentNum;
            setTimeout(increamentCounters,40);//调数字变化速度
        }else{
            counters.textContent = dataCeil;
        }
    }
});




