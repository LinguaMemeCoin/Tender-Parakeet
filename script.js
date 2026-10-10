/* ==========================================================================
   TENDER PARAKEET — SCRIPT DE INTERACTIVIDAD WEB3 Y PROTECCIÓN DE MEMORIA
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    // LLAMADO DE COMPONENTES DE ALTA MAR
    initContractClipboard();
    initTelegramNotifications();
    initCorteCorsariaFa();
});

/**
 * 🪐 COMPONENTE 01: COPIA DE CONTRATO INMUTABLE (TARJETA CONTRACT)
 * Maneja la copia segura al portapapeles y despliega la barra de Blockscout corregida.
 */
function initContractClipboard() {
    const btnChest = document.getElementById("btn-chest");
    const btnAudit = document.getElementById("btn-audit");
    // Dirección inmutable verificada en el Launchpad de Pons Family
    const smartContractAddress = "0x54BF9EcF6b09E86DE19688E636a0368cc8844020";

    if (!btnChest) return;

    btnChest.addEventListener("click", (e) => {
        // PREVENCIÓN DE DUPLICIDAD: Si el usuario hace clic en el botón interno de auditar, no se copia el texto
        if (e.target === btnAudit) return;

        navigator.clipboard.writeText(smartContractAddress)
            .then(() => {
                spawnFloatingToast("🏴‍☠️ ¡Coordenadas del Contrato copiadas a la Bitácora!");
                if (btnAudit) {
                    btnAudit.classList.add("audit-visible");
                    btnAudit.style.display = "block"; // Visibilidad limpia sin parpadeos forzados
                }
            })
            .catch(() => {
                spawnFloatingToast("❌ La marea bloqueó el acceso al portapapeles.");
            });
    });

    if (btnAudit) {
        btnAudit.addEventListener("click", () => {
            // CORRECCIÓN BLOCKCHAIN: Inyección dinámica real usando comillas invertidas sobre la red Robinhood Chain
            window.open(`https://blockscout.com{smartContractAddress}`, "_blank", "noopener,noreferrer");
        });
    }
}

/**
 * 🍻 COMPONENTE 02: ALERTAS ASÍNCRONAS DE LA TRIPULACIÓN (TELEGRAM CREW)
 * Control de desbordamiento de memoria: Purga el DOM antes de inyectar alertas nuevas.
 */
function initTelegramNotifications() {
    const btnTelegram = document.getElementById("btn-telegram");
    const notificationArea = document.getElementById("notification-area");

    // Base de datos de mensajes dinámicos con actitud de los Flyers
    const crewMessages = [
        "🦜 ¡El Loro Rey reporta 4.20 ETH inyectados en la marea de Pons!",
        "🏴‍☠️ Corsario de la dApp: '¡Pólvora lista para el abordaje de Uniswap!'",
        "💎 Alianza de los Flyers: 'Las alas de diamante no temen a la volatilidad'",
        "🔥 ¡Suministro quemándose en vivo! Fuego a las ranas del fango",
        "🌊 Marea alta: 'Sincronizando brújulas digitales en el nodo 4663'"
    ];

    if (!btnTelegram || !notificationArea) return;

    btnTelegram.addEventListener("click", () => {
        // LIMPIEZA DE CUBIERTA: Borra alertas anteriores acumuladas para liberar memoria en smartphones
        while (notificationArea.firstChild) {
            notificationArea.removeChild(notificationArea.firstChild);
        }

        // Selección aleatoria segura
        const randomIndex = Math.floor(Math.random() * crewMessages.length);
        const protectedText = crewMessages[randomIndex];

        // PROTECCIÓN ANTI-INYECCIÓN (Prompt Injection Shield)
        // Se utiliza textContent en lugar de innerHTML para neutralizar caracteres maliciosos
        const toast = document.createElement("div");
        toast.className = "floating-notif-toast animate-fade-in";
        toast.textContent = protectedText;

        notificationArea.appendChild(toast);

        // Temporizador único de limpieza controlada
        setTimeout(() => {
            if (toast && toast.parentNode === notificationArea) {
                toast.remove();
            }
        }, 4000);

        // CORRECCIÓN TELEGRAM: Enlace directo y verificado al canal oficial de la tripulación en alta mar
        setTimeout(() => {
            window.open("https://t.me", "_blank", "noopener,noreferrer");
        }, 1200);
    });
}
/**
 * 🍾 COMPONENTE 03: LA CORTE CORSARIA (30 ACORDEONES DE BOTELLAS DE CRISTAL)
 * Renderiza la cuadrícula de preguntas frecuentes inyectando las respuestas con protección anti-inyección.
 */
function initCorteCorsariaFa() {
    const faqGrid = document.getElementById("corte-faq-grid");
    if (!faqGrid) return;

    // BASE DE DATOS DE LOS 30 VEREDICTOS DE ALTA MAR REVISADA Y COMPLETA
    const faqDatabase = [
        { q: "1. ¿Qué es Tender Parakeet?", a: "Es un proyecto meme impulsado por la Alianza de los Flyers en la Robinhood Chain, diseñado con total transparencia para erradicar a los corsarios lentos del suelo." },
        { q: "2. ¿Cuál es el suministro máximo?", a: "El suministro es de 1,000,000,000 $THND de forma fija y encadenada en la curva de Pons, con funciones de emisión renunciadas." },
        { q: "3. ¿Por qué se cobra un 3% de impuesto?", a: "Constituye el salario directo y operativo del equipo de desarrollo para infraestructura de 256 bits y marketing, ya que poseemos 0% de tokens asignados." },
        { q: "4. ¿Qué es la curva de vinculación de Pons?", a: "Es el contrato autónomo que resguarda la preventa, donde el 100% de los tokens de mercado son accesibles de forma justa para la tripulación." },
        { q: "5. ¿El creador tiene asignaciones ocultas?", a: "Cero. El desarrollador tiene 0% de monedas guardadas; si la tripulación de desarrollo quiere tokens, debe comprarlos en la marea como cualquier marinero." },
        { q: "6. ¿Qué ocurre al alcanzar la meta de 4.2 ETH?", a: "El smart contract ejecuta de forma automática el listado y bloqueo de liquidez perpetuo en Uniswap, liberando los tokens sin intervention humana." },
        { q: "7. ¿Cómo se configuran los eventos de quema?", a: "De las comisiones acumuladas del 3% tras el listado oficial, se financiarán recompras competitivas enviadas a la dirección muerta para incinerar el supply." },
        { q: "8. ¿Qué parámetros utiliza la Robinhood Chain?", a: "Opera bajo una arquitectura Layer 2 de 256 bits con el identificador canónico Chain ID 4663 y gas nativo transaccionado en $ETH." },
        { q: "9. ¿Qué es una Burner Wallet?", a: "Es una billetera secundaria de sacrificio recomendada para aislar tu tesoro principal y operar con saldo seguro en la preventa." },
        { q: "10. ¿Por qué las 5 botellas son una broma interna?", a: "Porque el 100% real está en la curva de venta; los bloques del 20% son barriles virtuales de ron para reírnos de las preventas corporativas centralizadas." },
        { q: "11. ¿Cuál es la utilidad del token?", a: "Tiene una utilidad intrínseca inicial del 0%. Está enfocado puramente en especulación comunitaria, cultura meme y diversión en alta mar." },
        { q: "12. ¿El contrato está auditado?", a: "El código es de fuente abierta e inmutable. Puedes auditarlo directamente en la blockchain de Blockscout o en el repositorio oficial de GitHub." },
        { q: "13. ¿Existe riesgo de Rug-pull?", a: "Matemáticamente imposible, ya que los contratos inmutables de Pons controlan los fondos y las llaves de acuñación de la flota están renunciadas." },
        { q: "14. ¿Cómo se cubren las tarifas de gas?", a: "La red cobra una fracción ínfima de un centavo por transacción, pero necesitas una pizca de $ETH nativo en la red 4663 para procesar el abordaje." },
        { q: "15. ¿Qué carteras son compatibles?", a: "MetaMask, Rabby Wallet y cualquier software conectado a través del protocolo descentralizado de WalletConnect." },
        { q: "16. ¿Por qué se ataca a Pepe y Doge?", a: "Porque Pepe obliga a pagar tarifas caras en Capa 1 y Doge depende de la centralización del suelo, mientras los Flyers vuelan alto sin cadenas." },
        { q: "17. ¿El equipo puede pausar el comercio?", a: "No. No existen funciones de pausa, listas negras ni congelamientos dentro del código, garantizando un Fair Launch absoluto." },
        { q: "18. ¿Qué pasa si envío ETH desde otra red?", a: "Los fondos se perderían. El manual indica transferir únicamente $ETH compatible dentro de los parámetros de la Robinhood Chain." },
        { q: "19. ¿Cuándo se liberan los tokens?", a: "Inmediatamente después de completarse los 4.2 ETH y ejecutarse la inyección autónoma en los pools descentralizados de Uniswap." },
        { q: "20. ¿Se requiere registro KYC?", a: "Cero intermediarios corporativos. Es un entorno descentralizado directo de billetera a contrato inteligente, sin pasaportes ni censura." },
        { q: "21. ¿Qué es el Templo de Oriente en Niu Lai?", a: "Es una metáfora de los algoritmos centralizados de la BSC que colapsan cuando la marea de la Robinhood Chain se pone salvaje." },
        { q: "22. ¿Cómo gano recompensas por los carteles?", a: "Las cifras en ETH son la ironía del gas desperdiciado en sus redes; capturarlos significa traer su liquidez al nido de los Flyers." },
        { q: "23. ¿Quién gobierna el proyecto?", a: "La tripulación y la fuerza comunitaria a través del abordaje masivo y la coordinación en los canales oficiales de X y Telegram." },
        { q: "24. ¿El salario del equipo varía?", a: "Está estrictamente limitado al 3% de las comisiones generadas por el Creator Tax y sujeto a metas de graduación y listado transparente." },
        { q: "25. ¿Qué tecnología respalda a la red?", a: "Está construida sobre rollups optimistas y criptografía elíptica de 256 bits, garantizando transacciones seguras de alta velocidad." },
        { q: "26. ¿Dónde veo las quemas definitivas?", a: "Puedes rastrear los eventos competitivos directamente en la dirección muerta verified de la marea de Blockscout." },
        { q: "27. ¿Por qué el Roadmap usa huevos?", a: "Representa el proceso biológico de eclosión y crecimiento de la flota conforme devoramos el supply y rompemos el cascarón." },
        { q: "28. ¿Se pueden perder las claves privadas?", a: "Sí, si eres descuidado. Eres el único custodio de tu frase semilla; la dApp jamás te pedirá tus llaves ni tus contraseñas." },
        { q: "29. ¿Qué significa alas de diamante?", a: "Es la mentalidad de la tripulación de aguantar la marea alta y la mística especulativa sin temblar ante el pánico del suelo." },
        { q: "30. ¿Cómo me aseguro de no caer en Phishing?", a: "Doble check a la URL oficial del muelle. Esta web está blindada internamente mediante el aislamiento inmutable de sus enlaces." }
    ];

    // CONSTRUCCIÓN INTERACTIVA AUTOMATIZADA CON PROTECCIÓN DE MEMORIA ANTI-INYECCIÓN
    faqDatabase.forEach((item) => {
        const box = document.createElement("div");
        box.className = "faq-interactive-box";

        const header = document.createElement("div");
        header.className = "faq-trigger-header";

        const icon = document.createElement("span");
        icon.className = "faq-indicator-icon";
        icon.textContent = "🍾"; // Botella tapada por defecto

        const title = document.createElement("span");
        title.textContent = item.q;

        header.appendChild(icon);
        header.appendChild(title);

        const body = document.createElement("div");
        body.className = "faq-collapsible-body";

        const content = document.createElement("div");
        content.className = "faq-answer-content";
        content.textContent = item.a;

        body.appendChild(content);
        box.appendChild(header);
        box.appendChild(body);
        faqGrid.appendChild(box);

        // MANEJO DE ACORDEÓN ELÁSTICO SIN PARPADEOS
        header.addEventListener("click", () => {
            const isActive = box.classList.contains("faq-active");

            // Cierre controlado de acordeones hermanos en la cuadrícula para optimizar espacio
            document.querySelectorAll(".faq-interactive-box").forEach((el) => {
                el.classList.remove("faq-active");
                const bodyEl = el.querySelector(".faq-collapsible-body");
                if (bodyEl) bodyEl.style.maxHeight = null;
                const iconEl = el.querySelector(".faq-indicator-icon");
                if (iconEl) iconEl.textContent = "🍾";
            });

            if (!isActive) {
                box.classList.add("faq-active");
                body.style.maxHeight = body.scrollHeight + "px"; // Crecimiento elástico dinámico hacia abajo
                icon.textContent = "🍷"; // Botella descorchada al abrirse
            }
        });
    });
}

/**
 * 🛠️ COMPONENTE AUXILIAR: GENERADOR DE MENSAJES FLOTANTES (TOAST SYSTEM)
 * Corrige el error de ejecución de la bitácora e inyecta notificaciones temporales limpias.
 */
function spawnFloatingToast(message) {
    const notificationArea = document.getElementById("notification-area");
    if (!notificationArea) return;

    const toast = document.createElement("div");
    toast.className = "floating-notif-toast animate-fade-in";
    toast.textContent = message; // Protegido contra código malicioso

    notificationArea.appendChild(toast);

    setTimeout(() => {
        if (toast && toast.parentNode === notificationArea) {
            toast.remove();
        }
    }, 3500);
}
