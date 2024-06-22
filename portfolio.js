//loading technical proficiencies
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.l2 img');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    images.forEach(image => {
        observer.observe(image);
    });
});


//resume link
const resumeButton = document.getElementById('open-resume');
const resumeLink = 'https://drive.google.com/file/d/1Wyd2NOnqZ9ybbwlHlRtj_DFqu0sMPO6u/view?usp=sharing'; // Replace with your actual Google Drive link

resumeButton.addEventListener('click', () => {
    window.open(resumeLink, '_blank');
});

//extracurricular section

document.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('#extracurricular-section');
    const options = {
        root: null,
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    observer.observe(section);
});


//form validation
document.getElementById('hireMeForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let valid = true;

    // Name validation
    const name = document.getElementById('name').value.trim();
    const nameError = document.getElementById('nameError');
    if (name === '') {
        valid = false;
        nameError.textContent = 'Name is required.';
        nameError.style.display = 'block';
    } else {
        nameError.textContent = '';
        nameError.style.display = 'none';
    }

    // Email validation
    const email = document.getElementById('email').value.trim();
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === '') {
        valid = false;
        emailError.textContent = 'Email is required.';
        emailError.style.display = 'block';
    } else if (!emailPattern.test(email)) {
        valid = false;
        emailError.textContent = 'Invalid email format.';
        emailError.style.display = 'block';
    } else {
        emailError.textContent = '';
        emailError.style.display = 'none';
    }

    // Message validation
    const message = document.getElementById('message').value.trim();
    const messageError = document.getElementById('messageError');
    if (message === '') {
        valid = false;
        messageError.textContent = 'Message is required.';
        messageError.style.display = 'block';
    } else {
        messageError.textContent = '';
        messageError.style.display = 'none';
    }

    if (valid) {
        alert('Form submitted successfully!');

    }
});


