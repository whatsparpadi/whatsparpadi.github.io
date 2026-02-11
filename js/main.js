// Copy Code Functionality (for blog pages)
function copyCode(btn) {
    const codeBlock = btn.nextElementSibling.querySelector('code');
    const text = codeBlock.innerText;

    navigator.clipboard.writeText(text).then(() => {
        const originalText = btn.textContent;
        btn.textContent = 'Copied!';
        setTimeout(() => {
            btn.textContent = originalText;
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

// Contact Form Logic (for about.html)
const contactForm = document.getElementById('contact-form');
const popupOverlay = document.getElementById('popup-overlay');
const popupTitle = document.getElementById('popup-title');
const popupMessage = document.getElementById('popup-message');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        if (!name || !email || !message) {
            showPopup('Error', 'All fields are required.');
            return;
        }

        const allowedDomains = ['gmail.com', 'yahoo.com', 'protonmail.com'];
        const emailDomain = email.split('@')[1];

        if (!allowedDomains.includes(emailDomain)) {
            showPopup('Validation Error', 'Only @gmail.com, @yahoo.com, and @protonmail.com addresses are supported.');
            return;
        }

        const GOOGLE_FORM_URL = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfmyPbrNP2Mtl0V7b2MiT3sZktneKb_WLIL3eHr6DuoLrib5g/formResponse';

        const formData = new FormData();
        formData.append('entry.624475988', name);
        formData.append('entry.1912588981', email);
        formData.append('entry.1870233339', message);

        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        fetch(GOOGLE_FORM_URL, {
            method: 'POST',
            mode: 'no-cors',
            body: formData
        })
            .then(() => {
                showPopup('Message Submitted!', 'Thanks for reaching out. I will get back to you soon.');
                contactForm.reset();
            })
            .catch((error) => {
                console.error('Error:', error);
                showPopup('Error', 'Something went wrong. Please try again later.');
            })
            .finally(() => {
                submitBtn.textContent = originalBtnText;
                submitBtn.disabled = false;
            });
    });
}

// Popup Functions
function showPopup(title, message) {
    if (popupTitle) popupTitle.textContent = title;
    if (popupMessage) popupMessage.textContent = message;
    if (popupOverlay) popupOverlay.classList.remove('hidden');
}

function closePopup() {
    if (popupOverlay) popupOverlay.classList.add('hidden');
}

window.closePopup = closePopup;
