const userinput = document.getElementById("input-field");
const clickbox = document.getElementById("button");
const container = document.getElementById("blank-container");
let storeinput;
userinput.addEventListener("input",(el)=>{
     storeinput = Number(el.target.value);

})
clickbox.addEventListener("click",()=>{
    container.innerHTML = "";
    for(let row = storeinput; row>=1;row--){
        for(let col =1; col<row;col++){
            container.innerHTML += "*"
        }
        container.innerHTML += "<br>"
    }

})