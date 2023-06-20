const userinput = document.getElementById("input-field");
const buttonclick = document.getElementById("button");
const astriskspace = document.getElementById("blank-container");
let storageninput;
userinput.addEventListener("input",(e)=>{
    storageninput = Number(e.target.value)

})
//evenlister ek information container hai buttonclick
buttonclick.addEventListener("click",()=>{
    astriskspace.innerHTML = "";

            //8
    for(let row = storageninput; row >=1;row--){

        for( let col=1;col<row;col++){
            astriskspace.innerHTML += "*";
        }
        astriskspace.innerHTML += "<br>"

    }
})

