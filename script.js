const sections = document.getElementsByClassName('section')
const buttons = document.querySelectorAll('.drop-down')
const responses = document.querySelectorAll('.response')
const iconsPlus = document.querySelectorAll('.icon-plus')
const iconsMinus = document.querySelectorAll('.icon-minus')

for (let i=0; i<sections.length; i++){
    sections[i].addEventListener("click", function() {
        iconsPlus[i].classList.toggle("no-show");
        iconsMinus[i].classList.toggle("no-show");
        responses[i].classList.toggle("open");

    })
}

// for (let i=0; i<sections.length; i++){
//     let section = sections[i]
//     section.addEventListener("click", ()=>{
//         if (iconsPlus[i].classList.contains("no-show")){
//             iconsMinus[i].classList.add("no-show")
//             iconsPlus[i].classList.remove("no-show")
//             responses[i].classList.add("no-show")
//             console.log('goes here');
//         }else{  
//             iconsPlus[i].classList.add("no-show")
//             iconsMinus[i].classList.remove("no-show")
//             responses[i].classList.remove("no-show")
//         }
//     })
// }