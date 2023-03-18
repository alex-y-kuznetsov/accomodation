const form = document.querySelector('#contactForm');

function formLogic() {
    
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

    console.log(detailsObject);
}

const submitButton = form.querySelector('#submitForm');
submitButton.addEventListener('click', formLogic);