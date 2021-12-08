const form = document.querySelector('.login-form')

form.addEventListener('submit',onSubmitForm)

function onSubmitForm(event) {
   event.preventDefault();
    const formEl = event.currentTarget.elements;
    const email = formEl.email.value;
    const password = formEl.password.value;
     const dataUser = {
        email,
        password,
    }
      
     if (email === '' || password === '') {
          alert('Все поля должны быть заполнены')
     } else {
     console.log(dataUser)
     form.reset();
     }
   
}


