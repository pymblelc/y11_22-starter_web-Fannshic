



let button = document.getElementById("wwwbtn")
let div = document.getElementById("whatbtn")

button.addEventListener(
    "click",
    function(){
        alert("Hello World!");
        div.innerHTML = "button1"
        div.style.backgroundColor = "grey"
    }
);

jj