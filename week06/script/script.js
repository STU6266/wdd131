
const contactButton = document.getElementById('contact-button');
const contactModal = document.getElementById('contact-modal');
const modalOverlay = document.getElementById('modal-overlay');
const closeButton = document.getElementById('close-button');
const sendButton = document.getElementById('send-button');

contactButton.addEventListener('click', () => {
    contactModal.style.display = 'block';
    modalOverlay.style.display = 'block';
});


closeButton.addEventListener('click', () => {
    contactModal.style.display = 'none';
    modalOverlay.style.display = 'none';
});


modalOverlay.addEventListener('click', () => {
    contactModal.style.display = 'none';
    modalOverlay.style.display = 'none';
});


sendButton.addEventListener('click', () => {
    const message = contactModal.querySelector('textarea').value;
    if (message.trim() !== '') {
        
        window.location.href = `mailto:stevenkemendics@gmail.com?subject=${encodeURIComponent('Nachricht von der Webseite')}&body=${encodeURIComponent(message)}`;
        contactModal.querySelector('textarea').value = '';
        contactModal.style.display = 'none';
        modalOverlay.style.display = 'none';
    } else {
        alert('Bitte geben Sie eine Nachricht ein, bevor Sie senden.');
    }
});

