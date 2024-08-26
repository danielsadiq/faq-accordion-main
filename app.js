const buttons = document.querySelectorAll('.drop-down')
var button = document.querySelector(".drop-down")
console.log(buttons);

var toggle = function(){for (let i=0; i<buttons.length; i++){
    let button = buttons[i];
    if (button.firstElementChild.classList.contains("no-show")){
        button.lastElementChild.classList.add("no-show")
        button.firstElementChild.classList.remove("no-show")
    }else{  
        button.firstElementChild.classList.add("no-show")
        button.lastElementChild.classList.remove("no-show")
    }
}}

// var toggle = function(){
//     if (button.firstElementChild.classList.contains("no-show")){
//         button.lastElementChild.classList.add("no-show")
//         button.firstElementChild.classList.remove("no-show")
//     }else{  
//         button.firstElementChild.classList.add("no-show")
//         button.lastElementChild.classList.remove("no-show")
//     }
// }

for (let i=0; i<buttons.length; i++){
    let button = buttons[i]
    button.addEventListener('click')
}
