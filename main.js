let btnEl=document.querySelector(".generate"),serialEl=document.querySelector(".serial");btnEl.addEventListener("click",()=>{let e="1234567890abcdefghijklmnopqrstuvwxyzABXDEFGHIJKLMNOPQRSTUVWXYZ",l=10,r="";for(let t=0;t<l;t++)r+=e[Math.floor(Math.random()*e.length)];serialEl.innerHTML=r});