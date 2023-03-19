// Form
const form = document.querySelector('#contactForm');

function sendForm(evt) {
    evt.preventDefault();
    
    const personalizedMessage = document.querySelector('#personalizedMessage');
    const errorMessage = document.querySelector('#errorMessage');
    const firstName = form.querySelector('#firstName');
    const secondName = form.querySelector('#secondName');
    const email = form.querySelector('#email');
    const phoneNumber = form.querySelector('#phoneNumber');

    let detailsObject = {
        firstName: firstName.value,
        secondName: secondName.value,
        email: email.value,
        phoneNumber: phoneNumber.value
    }

    function getContactMethod() {
        let contactMethod;
        if (detailsObject.email.length && !detailsObject.phoneNumber) {
            contactMethod = `email (${detailsObject.email})`
        }
        if (detailsObject.phoneNumber && detailsObject.email) {
            contactMethod = `email (${detailsObject.email}) or phone (${detailsObject.phoneNumber})`
        }
        return contactMethod;
    };

    let isFormValid = true;

    function validateForm() {
        const reqFields = [firstName, secondName, email];
        reqFields.forEach(item => {
            item.classList.remove('error');
            if (!item.value) {
                item.classList.add('error');
                isFormValid = false;
            }
        })
    };
    
    validateForm();

    if (isFormValid) {
        const message = `Thank you for your submission, ${detailsObject.firstName}. 
                    Our manager will contact you shortly via ${getContactMethod()}`
        personalizedMessage.innerHTML = message;
        form.classList.add('hidden');
        errorMessage.classList.add('hidden');
        personalizedMessage.classList.remove('hidden');
    } else {
        errorMessage.classList.remove('hidden');
    }
}

const submitButton = form.querySelector('#submitForm');
submitButton.addEventListener('click', sendForm);