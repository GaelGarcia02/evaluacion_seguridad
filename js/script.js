document.addEventListener("DOMContentLoaded", function () {
  // Obtener la URL actual
  const currentUrl = window.location.pathname;

  // Seleccionar los enlaces
  const attacksLink = document.getElementById("attacksLink");
  const confidentialityLink = document.getElementById("confidentialityLink");
  const principlesLink = document.getElementById("principlesLink");

  // Verificar qué enlace debe estar activo y añadir una clase
  if (currentUrl.includes("section_1.html")) {
    attacksLink.classList.add("active");
  } else if (currentUrl.includes("section_2.html")) {
    confidentialityLink.classList.add("active");
  } else if (currentUrl.includes("section_3.html")) {
    principlesLink.classList.add("active");
  }
});
