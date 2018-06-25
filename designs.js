const inputHeight = document.getElementById('inputHeight');
const inputWidth = document.getElementById('inputWidth');
const canvas = document.getElementById('pixelCanvas');
const size = document.getElementById('sizePicker');
const color = document.getElementById('colorPicker');
let tr;
let td;
// function to run when makeGrid is called
function makeGrid() {
    // get the size of row and columns
    const height = inputHeight.value;
    const width = inputWidth.value;
    // clear the canvas on browser reload
    canvas.innerHTML = "";
    // create the row and append to table
    for (let i = 1; i <= height; i++) {
        tr = document.createElement('tr');
        canvas.appendChild(tr);
        // create the columns and append to table
        for (let j = 1; j <= width; j++) {
            td = document.createElement('td');
            tr.appendChild(td);
        }
    }
    canvas.addEventListener('click', function(e) {
        e.preventDefault();
        if (e.target.nodeName === 'TD') {
            e.target.style.backgroundColor = color.value;
        }
    });
}
// call the makeGrid function and prevent the default behaviour of the submit event when the form is submitted
size.addEventListener('submit', function(e) {
    e.preventDefault();
    makeGrid();
});