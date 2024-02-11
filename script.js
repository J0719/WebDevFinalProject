const form = document.getElementById('form');
const email = document.getElementById('email');
const contact = document.getElementById('contact');
const webmail = document.getElementById('webmail');
const contact2 = document.getElementById('contact2');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const serError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const emailValue = email.value.trim();
    const contactlValue = contact.value.trim();
    const webmailValue = webmail.value.trim();
    const contact2Value = contact2.value.trim();

    if(!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(contactValue.length != 11 ) {
        setError(contact, 'Contact must be 11 digits.');
    } else {
        setSuccess(contact);
    }

    if(!isValidEmail(email2Value)) {
        setError(email2, 'Provide a valid email address');
    } else {
        setSuccess(email2);
    }

    if(contact2Value.length != 11 ) {
        setError(contact2, 'Contact must be 11 digits.');
    } else {
        setSuccess(contact2);
    }
};
