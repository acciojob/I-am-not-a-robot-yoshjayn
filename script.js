//your code here

let main=document.querySelector("main")

let imgArray=["img1","img2","img3","img4","img5"]
let random = Math.floor(Math.random()*imgArray.length)
imgArray.push(imgArray[random])
// main.innerText=imgArray
imgArray.sort(()=>Math.random()-0.5)


// State 1 (Initial state):

// No tiles clicked.
// Show message: "Please click on the identical tiles to verify that you are not a robot."
// No Reset or Verify buttons.

// document.append(document.createElement("h3").id="h")
let para = document.createElement("h3")
para.innerText="Please click on the identical tiles to verify that you are not a robot."
para.id="h"
main.append(para)


for(let i of imgArray){
    let img= document.createElement("img");
    img.className=i;
    main.append(img)
    img.addEventListener("click",verify)
}


// State 2 (At least one tile clicked):


// Reset button appears.
function verify(e){
    if(!document.getElementById("reset")){
        let btn = document.createElement("button")
        btn.innerText="Reset"
        btn.setAttribute("id","reset")
        main.append(btn)
        btn.addEventListener("click",reset)
    }
    //ignore multiple clicks on same img
    if(e.target.getAttribute("class")=="selected") return;
    
    //adding style for selection
    e.target.classList.add("selected")
    
    
    
    
    
    // State 3 (Both tiles clicked):
    
    // Verify button appears after the second click.
    if(document.querySelectorAll(".selected").length==2){
        let btn = document.createElement("button")
        btn.innerText="Verify"
        btn.setAttribute("id","verify")
        main.append(btn)
        btn.addEventListener("click",check)
    }
    
}

// Clicking the Reset button should return to State 1.
// let resetBtn=document.querySelector("#reset")
// resetBtn.addEventListener("click",()=>{
    
//    function reset(){
// let selected=document.getElementByClass("selected")
// selected.classList.remove("selected")

// let resetBtn=document.getElementById("reset")
// resetBtn.remove()
// }

function reset() {
    let selectedImages = document.querySelectorAll(".selected");
    selectedImages.forEach(img => img.classList.remove("selected"));

    let resetBtn = document.getElementById("reset");
    if (resetBtn) resetBtn.remove();

    let verifyBtn = document.getElementById("verify");
    if (verifyBtn) verifyBtn.remove();

    let paraText = document.getElementById("para");
    if (paraText) paraText.remove();
}

// State 4 (After clicking Verify):

// The Verify button disappears.
// Depending on the selection:
// If the tiles are identical, display: "You are a human. Congratulations!"
// If not identical, display: "We can't verify you as a human. You selected the non-identical tiles."

function check(){
    // reset()
    let selectedImage = document.querySelectorAll(".selected");

    let para = document.createElement("p")
    para.id = "para"

    if(selectedImage.length==2){

    if(selectedImage[0].classList[0] == selectedImage[1].classList[0]){
       para.innerText = "You are a human. Congratulations!"
    }else{
       para.innerText = "We can't verify you as a human. You selected the non-identical tiles."
    }
    main.append(para)
    
    e.target.remove()
    }

    else{
    para.innerText = "Select only two tiles"

    main.append(para)
    
    e.target.remove()
    }
}