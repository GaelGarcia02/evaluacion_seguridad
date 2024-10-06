document.addEventListener("DOMContentLoaded", function () {
  // Obtener la URL actual
  const currentUrl = window.location.pathname;

  // Seleccionar los enlaces
  const attacksLink = document.getElementById("attacksLink");
  const confidentialityLink = document.getElementById("confidentialityLink");
  const principlesLink = document.getElementById("principlesLink");

  // Verificar qué enlace debe estar activo y añadir una clase
  if (currentUrl.includes("cyber_attacks.html")) {
    attacksLink.classList.add("active");
  } else if (currentUrl.includes("information_confidentiality.html")) {
    confidentialityLink.classList.add("active");
  } else if (currentUrl.includes("information_security_principles.html")) {
    principlesLink.classList.add("active");
  }
});
