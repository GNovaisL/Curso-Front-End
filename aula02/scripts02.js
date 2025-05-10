const input = document.querySelector("#texto")
const press = document.querySelector("#falar")
const up = document.querySelector("#up")

input.addEventListener("mouseEnter", () => { 
    up.style.backgroundColor = `lightGrey` 
});
input.addEventListener("blur", () => { 
    up.style.backgroundColor = `white` 
});
press.addEventListener("mouseenter", () => {
    press.style.backgroundColor = "red"
})
press.addEventListener("mouseleave", () => {
    press.style.backgroundColor = "white"
})
input.addEventListener("keyup", (event) => { up.textContent = `Você soltou a tecla: ${event.key}` });
input.addEventListener("keydown", (event) => { press.textContent = `Você apertou a tecla: ${event.key}` });