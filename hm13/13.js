const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const messageInput = document.getElementById('message');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');

const nameErrors = document.getElementById('nameErrors');
const messageErrors = document.getElementById('messageErrors');
const phoneErrors = document.getElementById('phoneErrors');
const emailErrors = document.getElementById('emailErrors');

nameInput.addEventListener('input', validateName);
messageInput.addEventListener('input', validateMessage);
phoneInput.addEventListener('input', validatePhone);
emailInput.addEventListener('input', validateEmail);

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!validateName() || !validateMessage() || !validatePhone() || !validateEmail()) {
        console.log('error');
    } else {
        console.log('Name:', nameInput.value);
        console.log('Message:', messageInput.value);
        console.log('Phone:', phoneInput.value);
        console.log('Email:', emailInput.value);

        nameInput.value = '';
        messageInput.value = '';
        phoneInput.value = '';
        emailInput.value = '';
    }
});

function validateName() {
    const value = nameInput.value.trim();
    const nameRegex = /^[a-zA-Zа-яА-ЯёЁіІїЇєЄ]+$/;
    if (value === '') {
        nameErrors.textContent = 'Name is required.';
        return false;
    } else if (!nameRegex.test(value)) {
        nameErrors.textContent = 'Name can only contain letters.';
        return false;
    } else {
        nameErrors.textContent = '';
        return true;
    }
}

function validateMessage() {
    const value = messageInput.value.trim();
    if (value.length < 5) {
        messageErrors.textContent = 'Message must be at least 5 characters long.';
        return false;
    } else {
        messageErrors.textContent = '';
        return true;
    }
}

function validatePhone() {
    const value = phoneInput.value.trim();
    const phoneRegex = /^\+380\d{9}$/;
    if (!phoneRegex.test(value)) {
        phoneErrors.textContent = 'Phone number must start with +380 and contain 9 digits after.';
        return false;
    } else {
        phoneErrors.textContent = '';
        return true;
    }
}

function validateEmail() {
    const value = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
        emailErrors.textContent = 'Invalid email format.';
        return false;
    } else {
        emailErrors.textContent = '';
        return true;
    }
}