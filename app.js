// variables
const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const submitBtn = document.querySelector("#submit-btn");
const imageCardSection = document.querySelector(".image-card-section-box");

const card1 = document.querySelector(".card-1");
const card2 = document.querySelector(".card-2");
const card3 = document.querySelector(".card-3");
const card4 = document.querySelector(".card-4");

// Function to validate the form
function validateForm() {
  const errors = [];

  // Validate name
  if (nameInput.value.trim() === "") {
    errors.push("Please enter your name.");
  }

  // Validate email
  const email = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errors.push("Please enter a valid email address.");
  }

  // Validate phone
  const phone = phoneInput.value.trim();
  const phoneRegex = /^\+1[0-9]{10}$/;
  if (!phoneRegex.test(phone)) {
    errors.push("Please enter a valid phone number.");
  }

  return errors;
}
 
// Event listener for the form submission
form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    const errors = validateForm();
  
    if (errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      // Submit the form or take further actions
      imageCardSection.classList.remove("hidden");
    }
  });
// ***************************************************************************

// Event listener for selecting card
card1.addEventListener('click', (e) => {
    card1.style.backgroundColor = 'red';
})