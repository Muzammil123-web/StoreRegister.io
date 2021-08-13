const p1=document.getElementById("p1");
    const model_container=document.getElementById("model_container");
    p1.addEventListener("click",()=>{
        model_container.classList.add("show1");
        model_1.classList.remove("show2");
        model_2.classList.remove("show3");
        p1.style.border="4px solid rgba(150, 66, 66, 0.247)";
        p1.style.background="rgba(185, 184, 184, 0.74)";
    
        
    });

  const p2=document.getElementById("p2"); 
  const model_1=document.getElementById("model_1");
  p2.addEventListener("click",()=>{
    model_1.classList.add("show2");
    model_container.classList.remove("show1");
    model_2.classList.remove("show3");
    p1.style.border="4px solid rgba(18, 120, 167, 0.521)";
    p1.style.background="rgba(102, 202, 228, 0.76)";

});

const p3=document.getElementById("p3"); 
const model_2=document.getElementById("model_2");
p3.addEventListener("click",()=>{
  model_2.classList.add("show3");
  model_container.classList.remove("show1");
  model_1.classList.remove("show2");

});
const chk =document.getElementById("chk");
chk.addEventListener("click",()=>{
  chk.style.background="blue";
});