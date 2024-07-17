/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault();

    // serviceID - templateID - #form - publicKey
    // Ini Data Dami
    emailjs.sendForm('service_8ii265v','template_85g6ftk','#contact-form','VQaq6RG_bXgUd7BNm')
        .then(() => {
            // Show sent message
            contactMessage.textContent = 'Message sent successfully '

            // Remove message after five second
            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)

            // Clear input fields
            contactForm.reset()

        }, () => {
            // Show error message
            contactMessage.textContent = 'Message not sent (services error)'
        })
}

contactForm.addEventListener('submit', sendEmail)