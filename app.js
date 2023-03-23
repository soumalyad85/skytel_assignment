//color picker

let colorInput = document.getElementById("color");

colorInput.addEventListener('input', () =>{
    let color = colorInput.value;

    document.getElementById("top").style.backgroundColor = color;
});


//header to sidebar

function myFunction() {
    var myElement = document.getElementById("top");
    myElement.classList.toggle("head");
    myElement.classList.toggle("side");
};
