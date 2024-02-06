let titleEl = document.getElementById("title");

let applyEl = document.getElementById("apply-button");






applyEl.addEventListener("click",function(){
    let inputEl = document.getElementById("input-text").value;
    let font = document.getElementById("fonts").value;
    let size = document.getElementById("size").value;
    let color = document.getElementById("color-picker").value;
            titleEl.textContent = inputEl;
            titleEl.style.fontFamily = font;
            titleEl.style.fontSize = size + "px";
            titleEl.style.color = color;
})