let input = document.querySelector(".input");
let btn = document.querySelector(".add-note");
let ul = document.querySelector("ul");

let material = () => {
        let text = input.value;
    let li = document.createElement("li");
    li.innerText = text;
    ul.appendChild(li);
    li.classList.add("li")
    input.value = "";
    li.style.marginBottom = "10px";
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("btn")
    li.appendChild(deleteBtn);
    deleteBtn.addEventListener("click" , () => {
        ul.removeChild(li);
    })
    document.addEventListener("keydown" , (e) => {
        if(e.code === "Escape"){
            e.preventDefault();
            deleteBtn.focus();
            ul.removeChild(li);
        }
    })
}
btn.addEventListener("click" , () => material())

input.addEventListener("keydown" , (e) => {
    if(e.key === "Enter"){
       material();
    }
})  