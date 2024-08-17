// toggle icon navbar
document.addEventListener("DOMContentLoaded", () => {
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
    let navLinks = document.querySelectorAll('header nav a');
    let footer = document.querySelector('footer');

    if (!menuIcon) {
        console.error("Menu icon not found. Ensure the element with ID 'menu-icon' exists.");
        return;
    }

    if (!navbar) {
        console.error("Navbar not found. Ensure the element with class 'navbar' exists.");
        return;
    }

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };

    // sticky header and animation handling
    window.addEventListener('scroll', () => {
        let header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 100);

        // Check if a section is in view and handle animations
        let sections = document.querySelectorAll('section');
        sections.forEach(section => {
            let top = window.scrollY;
            let offset = section.offsetTop - 100;
            let height = section.offsetHeight;
            let id = section.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').includes(id)) {
                        link.classList.add('active');
                    }
                });

                // Active section for animation on scroll
                if (!section.classList.contains('show-animate')) {
                    section.classList.add('show-animate');
                }
            } else {
                // If you want the animation to repeat on scroll
                section.classList.remove('show-animate');
            }
        });

        // Remove the toggle icon and navbar visibility when scrolling
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');

        // Animation footer on scroll
        if (footer) {
            let windowHeight = window.innerHeight;
            let footerTop = footer.offsetTop;
            let scrollPosition = window.scrollY + windowHeight;

            if (scrollPosition >= footerTop) {
                footer.classList.add('show-animate');
            } else {
                footer.classList.remove('show-animate');
            }
        }
    });

    // Add event listener for nav links to hide menu when clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
        });
    });
});


// EmailJS functionality
// document.addEventListener("DOMContentLoaded", () => {
//   const contactForm = document.getElementById("contact-form");

//   if (!contactForm) {
//     console.error("Contact form not found. Ensure the element with ID 'contact-form' exists.");
//     return;
//   }

//   contactForm.addEventListener("submit", async (e) => {
//     e.preventDefault();

//     const formData = new FormData(contactForm);
//     const url = "https://api.emailjs.com/api/v1.0/email/send";

//     const response = await fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: "Bearer nkkushawaha2112004@gmial.com",
//       },
//       body: JSON.stringify({
//         service_id: "nkkushawaha2112004@gmial.com",
//         template_id: "nkkushawaha2112004@gmial.com",
//         user_id: "nkkushawaha2112004@gmial.com",
//         template_params: {
//           name: formData.get("name"),
//           email: formData.get("email"),
//           mobile: formData.get("mobile"),
//           subject: formData.get("subject"),
//           message: formData.get("message"),
//         },
//       }),
//     });

//     if (response.ok) {
//       console.log("Email sent successfully!");
//     } else {
//       console.error("Error sending email:", response.status);
//     }
//   });
// });
