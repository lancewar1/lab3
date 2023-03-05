/* TB: Create shortcut variables first */
const box = document.getElementById("box");
const xVal = document.getElementById("x-value");
const yVal = document.getElementById("y-value");

box.addEventListener("mousemove", (e) => {
    // TB: offsetX is based on the current
    // container's position in the document.
    // clientX/Y is based on the document.
    xVal.textContent = e.offsetX;
    yVal.textContent = e.offsetY;
});

box.addEventListener("click", (e) => {
    box.classList.toggle("change");
    console.log(e);
});
