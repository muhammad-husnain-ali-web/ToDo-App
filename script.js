let input = document.getElementById("inp");
let text = document.getElementById("ulList");
console.log(text)
let data = null;
document.querySelector("button").addEventListener("click", ()=>{
    if(input.value === "")
    {
        alert("Please Enter First");
    }
    else
    {
        data = `<li>
                    <span class="ToDo-text">${input.value}</span>
                    <span class="svg"><img src="close.svg" alt=""></span>
                </li>`
        text.innerHTML += data;
        input.value = "";
        let allsvg =text.querySelectorAll(".svg")
        allsvg.forEach(svg =>{
            svg.addEventListener("click", ()=>{
                svg.parentElement.remove();
            })
        })
    }
})