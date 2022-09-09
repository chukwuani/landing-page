
const form = document.querySelector(".form");

function submitted(){

    const input = document.querySelector(".input").value;
    const label = document.querySelector(".label")

if(input === ""){

    label.style.cssText = "display: block; transition: all 1000s ease-in-out;"

   form.style.cssText = "border: 1px hsl(0, 93%, 68%)  solid;"

}else{

}

}

form.addEventListener('submit', submitted);

