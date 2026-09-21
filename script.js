document.addEventListener("DOMContentLoaded", () => {
  
  // 1. CONTADOR REAL DE VISITAS (USANDO COUNTAPI)
  async function inicializarContador() {
    const namespace = window.location.hostname || "tender-parakeet-local";
    const key = "vuelo-visitas";
    try {
      const res = await fetch(`https://countapi.xyz{namespace}/${key}`);
      if (res.ok) {
        const data = await res.json();
        document.getElementById("contador-real").textContent = data.value.toLocaleString();
      } else { throw new Error(); }
    } catch {
      document.getElementById("contador-real").textContent = "42,069"; // Caída segura (Fallback)
    }
  }
  inicializarContador();

  // 2. DETECTOR GEOGRÁFICO DE AVES AMERICANAS
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
  const aveGlobal = { nombre: "el Perico Capitán 🦜", emoji: "🦜" };

  async function mapearPuertoTripulante() {
    const contenedorCarga = document.getElementById("cargando-puerto");
    const contenedorMensaje = document.getElementById("mensaje-tripulante");
    const elAve = document.getElementById("ave-emblema");
    const elTitulo = document.getElementById("saludo-titulo");

    try {
      const res = await fetch("https://ipapi.co");
      if (!res.ok) throw new Error();
      const datos = await res.json();
      const aveAsignada = bitacoraAves[datos.country_code] || aveGlobal;

      elAve.textContent = aveAsignada.emoji;
      elTitulo.innerHTML = `¡Bienvenido Tripulante de <strong>${aveAsignada.nombre}</strong>!`;
    } catch {
      elAve.textContent = aveGlobal.emoji;
      elTitulo.innerHTML = `¡Bienvenido Tripulante de <strong>${aveGlobal.nombre}</strong>!`;
    } finally {
      if (contenedorCarga) contenedorCarga.style.display = "none";
      if (contenedorMensaje) {
        contenedorMensaje.classList.remove("puerto-mensaje-oculto");
        contenedorMensaje.classList.add("puerto-mensaje-visible");
      }
    }
  }
  mapearPuertoTripulante();

  // 3. BOTÓN PARA COPIAR CONTRATO (CA)
  const btnCopiar = document.getElementById("btn-copiar-ca");
  const textoCa = document.getElementById("contrato-ca").textContent;

  btnCopiar.addEventListener("click", () => {
    navigator.clipboard.writeText(textoCa).then(() => {
      btnCopiar.textContent = "¡COPIADO!";
      btnCopiar.style.backgroundColor = "#2ae68e";
      setTimeout(() => {
        btnCopiar.textContent = "COPIAR";
      }, 2000);
    }).catch(err => {
      console.error("No se pudo copiar el contrato: ", err);
    });
  });

  // 4. CONTROL ACCESIBLE DEL PERGAMINO DEL MAPA (FAQ)
  const btnToggleFaq = document.getElementById("btn-toggle-faq");
  const faqContenido = document.getElementById("faq-contenido-desplegable");

  btnToggleFaq.addEventListener("click", () => {
    const estaAbierto = faqContenido.style.maxHeight && faqContenido.style.maxHeight !== "0px";
    if (estaAbierto) {
      faqContenido.style.maxHeight = "0px";
    } else {
      faqContenido.style.maxHeight = faqContenido.scrollHeight + "px";
    }
  });

  const preguntas = document.querySelectorAll(".faq-pregunta");
  preguntas.forEach(pregunta => {
    pregunta.addEventListener("click", (e) => {
      e.stopPropagation();
      const item = pregunta.parentElement;
      const respuesta = item.querySelector(".faq-respuesta");
      const subAbierto = respuesta.style.maxHeight && respuesta.style.maxHeight !== "0px";

      if (subAbierto) {
        respuesta.style.maxHeight = "0px";
      } else {
        respuesta.style.maxHeight = respuesta.scrollHeight + "px";
        faqContenido.style.maxHeight = (faqContenido.scrollHeight + respuesta.scrollHeight) + "px";
      }
    });
  });
});
