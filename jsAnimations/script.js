// let btn = document.querySelector("button")
// btn.addEventListener("click", (e)=>{
//     // console.log(e);
//     e.target.innerHTML = "Downloading...."
//     setTimeout(()=>{
//         e.target.innerHTML = "Downlaod Now"
//     },2000)
// })


// Question 4.
let ul = document.querySelector("ul");
let inp = document.querySelector("input");
let addBtn = document.querySelector("#add");
let removeBtn = document.querySelector("#remove");
let li;


addBtn.addEventListener("click", (e)=>{
    if(inp.value.trim() === ""){
        alert("Cannot add empty items");
    }else{
        li = document.createElement("li");
        li.textContent = inp.value;
        ul.appendChild(li);
        inp.value = "";
    }
})
removeBtn.addEventListener("click", (e)=>{
    ul.removeChild(li);
})

