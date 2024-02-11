let num = document.querySelector("#num");
let result = document.querySelector(".result");
let btn = document.querySelector(".btn");
let btnResetFirst = document.querySelector(".btn-first-reset");

btnResetFirst.addEventListener('click' , () =>{
    num.value = "";
    result.innerHTML = "";
    console.clear();
})

btn.addEventListener('click' , ()=>{
    
    result.innerHTML = "Please check console for result"
    let star;
    
    for(i = 0; i <= parseInt(num.value) ; i++){
        for(j = 0; j < i;j++){
            star += "*";
        }
        console.log(star)
        star = '';
    }


})
