// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    const isDark = body.classList.contains('dark');
    themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// Contact Form
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic validation
    if (!name || !email || !message) {
        formMessage.textContent = 'Please fill out all fields.';
        formMessage.style.color = 'red';
        return;
    }

    // Simulate form submission (replace with actual backend API call)
    formMessage.textContent = 'Message sent successfully!';
    formMessage.style.color = 'green';
    contactForm.reset();
});