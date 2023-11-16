const btnSwitch = document.querySelector(".switch");

btnSwitch.addEventListener("click", e => {
    btnSwitch.classList.toggle("active");
    document.body.classList.toggle("active");

})

var inputs = document.getElementsByClassName("formulario-input");
for (var i=0; i < inputs.length; i++) {
    inputs[i].addEventListener("keyup", function(){
        if(this.value.length>=1) {
            this.nextElementSibling.classList.add("fijar")
        }
    })
}