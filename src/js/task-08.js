const form = document.querySelector('.login-form')

form.addEventListener('submit',onSubmitForm)

function onSubmitForm(event) {

    event.preventDefault();

    const formEl = event.currentTarget.elements;

    const email = formEl.email.value;

    const password = formEl.password.value;

    if (email === null || email === '') {
        
        alert('Все поля должны быть заполнены')
    }

    if (password.length < 6 || password === null ) {


        alert('Все поля должны быть заполнены')
    }

    const dataUser = {
        email,
        password,
    }
   
    console.log(dataUser)

     form.reset();
    
}


