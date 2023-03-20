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

// Modal
const body = document.querySelector('body');
const thumbnailImages = document.querySelectorAll('.gallery-item');
const modalWrap = document.querySelector('#modalWrap');
const modalOverlay = modalWrap.querySelector('#modalOverlay');
const modalClose = modalWrap.querySelector('#modalClose');

function openImageModal(evt) {
    const modalImage = modalWrap.querySelector('#modalImage');
    modalImage.setAttribute('src', evt.currentTarget.dataset.url);
    modalWrap.classList.remove('hidden');
    body.classList.add('modal-open');
    evt.currentTarget.blur();
};

function closeImageModal() {
    modalWrap.classList.add('hidden');
    body.classList.remove('modal-open');
}

function closeOnEsc(evt) {
    if (evt.key === 'Escape') {
        closeImageModal()
    }
};

thumbnailImages.forEach(item => {
    item.addEventListener('click', openImageModal);
})

modalClose.addEventListener('click', closeImageModal);
modalOverlay.addEventListener('click', closeImageModal);
document.addEventListener('keydown', closeOnEsc);