let submitButton=document.querySelector('#sub')
let thankyouBox=document.querySelector('#popup')
let stopPopup=document.querySelector('#remove-popup')
let buttonpress=document.querySelector('.button')
let buttons=document.querySelectorAll('.number')
let middle=document.querySelector('#middle')
let container=document.querySelector('.container')
let btn=document.querySelector('#btn')

submitButton.addEventListener('click',()=>{
    container.style.display='none'
    thankyouBox.classList.add('active-popup')
})

buttons.forEach(button=>{
    button.addEventListener('click', ()=>{
        let val=button.value
        console.log(val)
        middle.innerHTML=val
    })
})

btn.addEventListener('click',()=>{
    container.style.display='flex'
    thankyouBox.classList.remove('active-popup')
})