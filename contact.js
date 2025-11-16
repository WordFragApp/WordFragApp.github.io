// ===== Contact Form Functionality =====

const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
const sendAnotherBtn = document.getElementById('sendAnother');
const commentsField = document.getElementById('comments');
const charCount = document.getElementById('charCount');

// Character counter for comments field
if (commentsField && charCount) {
    commentsField.addEventListener('input', () => {
        const length = commentsField.value.length;
        const maxLength = 1000;

        charCount.textContent = length;

        // Change color when approaching limit
        if (length > maxLength * 0.9) {
            charCount.style.color = 'var(--accent-primary)';
        } else {
            charCount.style.color = 'var(--text-tertiary)';
        }

        // Prevent exceeding max length
        if (length > maxLength) {
            commentsField.value = commentsField.value.substring(0, maxLength);
            charCount.textContent = maxLength;
        }
    });
}

// Form submission handler
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const comments = document.getElementById('comments').value.trim();

        // Basic validation
        if (!name || !email || !comments) {
            showNotification('Please fill in all required fields.', 'error');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('Please enter a valid email address.', 'error');
            return;
        }

        // Submit form via AJAX to FormSubmit
        submitFormToEmail();
    });
}

// Send another message button
if (sendAnotherBtn) {
    sendAnotherBtn.addEventListener('click', () => {
        formSuccess.classList.remove('show');
        contactForm.style.display = 'block';
        contactForm.reset();
        charCount.textContent = '0';

        // Smooth scroll to form
        contactForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
}

// Submit form to FormSubmit service (sends email to wordfraggame@gmail.com)
function submitFormToEmail() {
    // Show loading state
    const submitBtn = contactForm.querySelector('.btn-submit');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
        <span class="btn-text">Sending...</span>
        <svg class="btn-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10" opacity="0.25"/>
            <path d="M12 2a10 10 0 0 1 10 10" opacity="0.75">
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 12 12"
                    to="360 12 12"
                    dur="1s"
                    repeatCount="indefinite"/>
            </path>
        </svg>
    `;

    // Get form data
    const formData = new FormData(contactForm);

    // Submit to FormSubmit via AJAX
    fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        // Reset button
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;

        if (response.ok) {
            // Show success message
            contactForm.style.display = 'none';
            formSuccess.classList.add('show');

            // Smooth scroll to success message
            formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });

            // Show success notification
            showNotification('Message sent successfully!', 'success');

            console.log('Email sent to wordfraggame@gmail.com');
        } else {
            throw new Error('Form submission failed');
        }
    })
    .catch(error => {
        // Reset button
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;

        // Handle error
        console.error('Error:', error);
        showNotification('An error occurred. Please try again.', 'error');
    });
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove any existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close" aria-label="Close notification">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
            </button>
        </div>
    `;

    // Add styles dynamically if not already present
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            .notification {
                position: fixed;
                top: 100px;
                right: 20px;
                max-width: 400px;
                padding: 1rem 1.5rem;
                background: var(--bg-secondary);
                border: 1px solid var(--border-color);
                border-radius: var(--radius-md);
                box-shadow: var(--shadow-lg);
                z-index: 10000;
                animation: slideInRight 0.3s ease;
            }

            .notification-error {
                border-left: 4px solid #ef4444;
            }

            .notification-success {
                border-left: 4px solid #10b981;
            }

            .notification-content {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 1rem;
            }

            .notification-message {
                color: var(--text-primary);
                font-weight: 500;
            }

            .notification-close {
                background: none;
                border: none;
                color: var(--text-secondary);
                cursor: pointer;
                padding: 0.25rem;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: color var(--transition-fast);
            }

            .notification-close:hover {
                color: var(--text-primary);
            }

            @keyframes slideInRight {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }

            @keyframes slideOutRight {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(400px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Add to page
    document.body.appendChild(notification);

    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    });

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Form field animations
const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
formInputs.forEach(input => {
    // Add floating label effect
    input.addEventListener('focus', () => {
        input.parentElement.classList.add('focused');
    });

    input.addEventListener('blur', () => {
        if (!input.value) {
            input.parentElement.classList.remove('focused');
        }
    });

    // Check if already has value on page load
    if (input.value) {
        input.parentElement.classList.add('focused');
    }
});

// Add smooth scroll for all anchor links on contact page
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();
        const target = document.querySelector(href);

        if (target) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navHeight - 20;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

console.log('📧 Contact form loaded and ready! Submissions will be sent to wordfraggame@gmail.com');
