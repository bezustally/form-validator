const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;
function validateForm() {
    if (!isValid) {
        isValid = form.checkValidity();
        message.textContent = 'Please, fill out all fields';
        message.style.color = 'rgba(243, 3, 3, 0.281)';
        return;
    }
    if (password1El.value === password2El.value) {
        passwordsMatch = true;
        password1El.style.borderColor = 'rgba(3, 243, 123, 0.363)';
        password2El.style.borderColor = 'rgba(3, 243, 123, 0.363)';
    } else {
        passwordsMatch = false;
        message.textContent = 'Make sure passwords match.'
        message.style.color = 'rgba(243, 3, 3, 0.281)';
        password1El.style.borderColor = 'rgba(243, 3, 3, 0.281)';
        password2El.style.borderColor = 'rgba(243, 3, 3, 0.281)';
        return;
    }
    if (isValid && passwordsMatch) {
        message.textContent = 'Succesfully Registered!';
        message.style.color = 'rgba(3, 243, 123, 0.363)';
    } 
}

function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    };
    console.log(user);
}

form.addEventListener('submit', processFormData);
function processFormData(e) {
    e.preventDefault();
    validateForm();
    if (isValid && passwordsMatch) {
        storeFormData();
    }
}
