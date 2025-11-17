// let btn = document.querySelector("button")
// btn.addEventListener("click", (e)=>{
//     // console.log(e);
//     e.target.innerHTML = "Downloading...."
//     setTimeout(()=>{
//         e.target.innerHTML = "Downlaod Now"
//     },2000)
// })


// Question 4.
// let ul = document.querySelector("ul");
// let inp = document.querySelector("input");
// let addBtn = document.querySelector("#add");
// let removeBtn = document.querySelector("#remove");
// let li;


// addBtn.addEventListener("click", (e)=>{
//     if(inp.value.trim() === ""){
//         alert("Cannot add empty items");
//     }else{
//         li = document.createElement("li");
//         li.textContent = inp.value;
//         ul.appendChild(li);
//         inp.value = "";
//     }
// })
// removeBtn.addEventListener("click", (e)=>{
//     ul.removeChild(li);
// })



// Question 5
// let time = document.querySelector("h3");
// let startBtn = document.querySelector("#start");
// let stopBtn = document.querySelector("#stop");
// let resetBtn = document.querySelector("#reset");
// let timer = 0;
// time.innerText = timer;
// let intervalId = null;
// startBtn.addEventListener("click", (e)=>{
//     if(intervalId === null){
//         intervalId = setInterval(() => {
//             time.innerText = timer;
//             timer++;
//         }, 1000);  
//     }
// })
// stopBtn.addEventListener("click", (e)=>{
//     clearInterval(intervalId);
//     intervalId = null;
// })

// resetBtn.addEventListener("click", (e)=>{
//     timer = 0;
//     time.innerText = timer;
//     intervalId = null;
// })

// Question 7
let progress = document.querySelector("#progress")
let count = 0;
let intervalId = setInterval(() => {
    if(count === 100){
        clearInterval(intervalId)
    }
    count++;
    progress.style.width = count+"%"
}, 50);


