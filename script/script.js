const form = document.querySelector('#contactForm');

function formLogic(evt) {
    evt.preventDefault();
    
    const personalizedMessage = document.querySelector('#personalizedMessage');
    const firstName = form.querySelector('#firstName').value;
    const secondName = form.querySelector('#secondName').value;
    const email = form.querySelector('#email').value;
    const phoneNumber = form.querySelector('#phoneNumber').value;

    let detailsObject = {
        firstName,
        secondName,
        email,
        phoneNumber
    }

    function getContactMethod() {
        let contactMethod;
        if (detailsObject.email.length && !detailsObject.phoneNumber) {
            contactMethod = `email (${detailsObject.email})`
        }
        if (detailsObject.phoneNumber && !detailsObject.email) {
            contactMethod = `phone (${detailsObject.phoneNumber})`
        }
        if (detailsObject.phoneNumber && detailsObject.email) {
            contactMethod = `email (${detailsObject.email}) or phone (${detailsObject.phoneNumber})`
        }
        return contactMethod;
    };
    

    const message = `Thank you for your submission, ${detailsObject.firstName}. 
                    Our manager will contact you shortly via ${getContactMethod()}`
    personalizedMessage.innerHTML = message;
    form.classList.add('hidden');
    personalizedMessage.classList.remove('hidden');
}

const submitButton = form.querySelector('#submitForm');
submitButton.addEventListener('click', formLogic);