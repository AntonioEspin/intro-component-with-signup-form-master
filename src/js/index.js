let name = document.getElementById('name');
let lastName = document.getElementById('lastName');
let email = document.getElementById('email');
let password = document.getElementById('password');
let infoLabel = document.querySelectorAll('label');
let expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
let parrafo = document.getElementsByClassName('styleParrafo')
console.log(parrafo)

let buttonClaim = document.getElementById('buttonClaim')
buttonClaim.addEventListener('click', (e)=>{
  if(name.value == ''){
    e.preventDefault()
    name.classList.add('invalidError')
    parrafo[0].style.display = 'block'
    
  }
  if(lastName.value == ''){
    e.preventDefault()
    lastName.classList.add('invalidError')
    parrafo[1].style.display = 'block'
  }
  if(!expReg.test(email.value)){
    e.preventDefault()
    email.classList.add('invalidError')
    parrafo[2].style.display = 'block'
  }
  if(password.value < 3){
    e.preventDefault();
    password.classList.add('invalidError')
    parrafo[3].style.display = 'block'
  }

})
