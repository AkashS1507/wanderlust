// Bootstrap Form Validation
(() => {
  'use strict'
  const forms = document.querySelectorAll('.needs-validation')

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()



//Browser Default Form Validation
const form = document.querySelector("form");
  const requiredFields = form.querySelectorAll("[required]");

  requiredFields.forEach(field => {
    field.addEventListener("input", () => {
      field.setCustomValidity(""); // clear the custom message
    });

    field.addEventListener("invalid", () => {
      field.setCustomValidity("Please enter this field");
    });
  });