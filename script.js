document.addEventListener("DOMContentLoaded", () => {
  // Diccionario de aves emblemáticas por código de país (ISO Alpha-2)
  const bitacoraAves = {
    "MX": { nombre: "el Águila Real 🦅", emoji: "🦅" },
    "AR": { nombre: "el Hornero 🪺", emoji: "🐦" },
    "BR": { nombre: "el Guacamayo Azul 🦜", emoji: "🦜" },
    "CO": { nombre: "el Cóndor de los Andes 🦅", emoji: "🦅" },
    "CL": { nombre: "el Cóndor Andino 🏔️", emoji: "🦅" },
    "PE": { nombre: "el Tunqui 🐓", emoji: "🐓" },
    "VE": { nombre: "el Turpial 🪶", emoji: "🪶" },
    "HN": { nombre: "la Guacamaya Roja 🦜", emoji: "🦜" },
    "US": { nombre: "el Águila Calva 🦅", emoji: "🦅" },
    "UY": { nombre: "el Tero 🪶", emoji: "🪶" },
    "BO": { nombre: "el Cóndor Boliviano 🇧🇴", emoji: "🦅" },
    "EC": { nombre: "el Colibrí 🐦", emoji: "🐦" }
  };

  // Ave por defecto en caso de navegar desde aguas internacionales (otros continentes)
  const avePredeterminada = { nombre: "el Perico Capitán 🦜", emoji: "🦜" };

  async function detectarPuertoYTripulante() {
    const contenedorCarga = document.getElementById("cargando-puerto");
    const contenedorMensaje = document.getElementById("mensaje-tripulante");
    const elementoAve = document.getElementById("ave-emblema");
    const elementoTitulo = document.getElementById("saludo-titulo");

    try {
      // Consulta rápida a la API de geolocalización por IP
      const respuesta = await fetch("https://ipapi.co");
      if (!respuesta.ok) throw new Error("Fallo en el radar de coordenadas");
      
      const datos = await respuesta.json();
      const codigoPais = datos.country_code; // Ej: "MX", "AR", "HN"
      
      // Busca si el país está registrado en nuestra bitácora de América
      const aveAsignada = bitacoraAves[codigoPais] || avePredeterminada;

      // Inyecta los datos dinámicos en el mensaje del Capitán
      elementoAve.textContent = aveAsignada.emoji;
      elementoTitulo.innerHTML = `¡Bienvenido Tripulante de <strong>${aveAsignada.nombre}</strong>!`;

    } catch (error) {
      console.error("Error al detectar las costas del usuario:", error);
      // Fallback seguro si falla la API o hay bloqueadores de anuncios
      elementoAve.textContent = avePredeterminada.emoji;
      elementoTitulo.innerHTML = `¡Bienvenido Tripulante de <strong>${avePredeterminada.nombre}</strong>!`;
    } finally {
      // Oculta el mensaje de carga y muestra el saludo con animación
      if (contenedorCarga) contenedorCarga.style.display = "none";
      if (contenedorMensaje) {
        contenedorMensaje.classList.remove("puerto-mensaje-oculto");
        contenedorMensaje.classList.add("puerto-mensaje-visible");
      }
    }
  }

  // Ejecuta la detección automáticamente al anclar en la página
  detectarPuertoYTripulante();
});
