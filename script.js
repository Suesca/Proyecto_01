document.addEventListener("DOMContentLoaded", function () {
  // Reseñas
  const reviewForm = document.getElementById("review-form");
  reviewForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const review = document.getElementById("review").value.trim();

    const nameError = validateName(name);
    const reviewError = validateReview(review);
    const forbiddenWordsError = validateForbiddenWords(review);

    if (nameError) {
      alert(nameError);
      return;
    }

    if (reviewError) {
      alert(reviewError);
      return;
    }

    if (forbiddenWordsError) {
      alert(forbiddenWordsError);
      return;
    }

    alert("Reseña enviada con éxito. Gracias por tu opinión.");
    reviewForm.reset(); // Limpiar el formulario

    // Aquí podrías agregar lógica para enviar la reseña al servidor o agregarla a la lista de reseñas
  });

  // Formulario de contacto
  const contactForm = document.querySelector("form");
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    const contactError = validateContactForm(nombre, email, mensaje);
    if (contactError) {
      alert(contactError);
      return;
    }

    alert(
      "Formulario enviado con éxito. Nos pondremos en contacto contigo pronto."
    );
    contactForm.reset(); // Limpiar el formulario
  });

  // Validación de funciones
  function validateName(name) {
    if (name === "") {
      return "Por favor, completa todos los campos.";
    }
    if (name.length < 3) {
      return "El nombre debe tener al menos 3 caracteres.";
    }
    return null;
  }

  function validateReview(review) {
    if (review === "") {
      return "Por favor, completa todos los campos.";
    }
    if (review.length < 10) {
      return "La reseña debe tener al menos 10 caracteres.";
    }
    return null;
  }

  function validateForbiddenWords(review) {
    const forbiddenWords = ["spam", "publicidad"];
    for (let word of forbiddenWords) {
      if (review.toLowerCase().includes(word)) {
        return "Tu reseña contiene palabras no permitidas.";
      }
    }
    return null;
  }

  function validateContactForm(nombre, email, mensaje) {
    if (nombre === "" || email === "" || mensaje === "") {
      return "Por favor, completa todos los campos.";
    }
    if (!validateEmail(email)) {
      return "Por favor, ingresa un correo electrónico válido.";
    }
    return null;
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
});
