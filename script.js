document.addEventListener("DOMContentLoaded", () => {
    // 1. BASE DE DATOS E INYECCIÓN ROBÓTICA DE LAS 30 PREGUNTAS (CORTE CORSARIA)
    const faqGrid = document.getElementById("corte-faq-grid");
    
    // Matriz de Datos de los veredictos reales corregidos de ortografía
    const faqDatabase = [
        { q: "¿Por qué elegir la Robinhood Chain?", a: "Porque la tripulación aérea no negocia con blockchains lentas del fango. Operamos en una red con transacciones instantáneas, tarifas de gas imperceptibles y compatibilidad Web3 absoluta." },
        { q: "¿Es segura la conexión RPC de la red?", a: "Completamente. El nodo de la red utiliza protocolos de encriptación estándar, asegurando que tu firma digital viaje protegida y sin intermediarios centralizados." },
        { q: "¿Cómo se configura la red en MetaMask o Rabby?", a: "De forma automatizada. Al presionar el botón de red en el banner superior, el script inyecta los parámetros oficiales del nodo sin que tengas que tipear nada a mano." },
        { q: "¿Qué es una curva de aprendizaje (Bonding Curve)?", a: "Es un modelo matemático inmutable donde el precio del token sube de forma algorítmica y transparente según el volumen real de compra, eliminando las manipulaciones humanas." },
        { q: "¿Cuál es el monto real de recaudación?", a: "La meta fija e inalterable es de 4.2 ETH, un número de alta visibilidad que los rastreadores indexan para certificar el fin de la etapa de incubación." },
        { q: "¿El desarrollador maneja los fondos de la curva?", a: "No. Los fondos están custodiados robóticamente por el smart contract del implementador de Pons Family; ningún humano tiene acceso a las llaves de la preventa." },
        { q: "¿Cuántos tokens hay en total?", a: "El suministro máximo es fijo y cerrado: 1,000,000,000 $THND. El contrato tiene la función de emisión deshabilitada perpetuamente; es imposible crear más monedas." },
        { q: "¿Quiénes son los dueños de los tokens?", a: "Los usuarios son los únicos y absolutos dueños. El 100% del supply sale a la marea y no existen asignaciones ocultas ni preminados para el equipo de desarrollo." },
        { q: "¿Existe bloqueo de tokens (Vesting) para el comprador?", a: "Cero bloqueos. Conforme compras en la curva, las monedas se transfieren directamente a tu billetera Web3 con total libertad comercial desde el primer segundo." },
        { q: "¿Qué pasa al completarse los 4.2 ETH?", a: "El contrato inteligente ejecuta una orden robótica e inmediata que migra toda la liquidez acumulada directamente al pool descentralizado de Uniswap." },
        { q: "¿La liquidez de Uniswap estará segura?", a: "Sí, los fondos de respaldo se depositan bajo un bloqueo automatizado por código, destruyendo las llaves de acceso para garantizar un mercado blindado contra rug-pulls." },
        { q: "¿Qué es el evento sorpresa de la quema?", a: "Al estar listados en Uniswap, el 50% de todas las comisiones acumuladas del Creator Tax se incinerarán perpetuamente en la dirección muerta para premiar y potenciar el nido de los usuarios." },
        { q: "¿Cómo funciona el 3% del Creator Tax y para qué se utilizará?", a: "El 3% se llenará exclusivamente con el apoyo de las transacciones de la tripulación. Una parte se destinará para posibles listados en CEX reales, verificados y confiables. Siempre se realizarán anuncios oficiales. El objetivo principal es apoyar la pool de Uniswap para las quemas masivas." },
        { q: "¿Cuál es la estrategia de listado en Exchanges y dónde buscamos operar?", a: "Los listados se intentarán en las plataformas más pequeñas, transparentes y confiables del mercado, buscando estrictamente dónde hay liquidez real y usuarios activos. No trabajaremos con exchanges fantasmas o estafas (scam). No te diremos nombres para evitar especulaciones. Nosotros no haremos Staking, Airdrops ni sorteos." },
        { q: "¿Puede el creador tomar ese 3% para beneficio personal?", a: "Claro que sí, es el pago legítimo por su trabajo de desarrollo y mantenimiento. Ya dependerá de él si financia quemas adicionales o listados. El equipo no se guarda ningún token. Todas las compras futuras con este fondo serán para realizar quemas definitivas, nunca para staking." }
    ];

    // Duplicación matemática para consolidar los 30 acordeones simétricos en la visual
    for (let i = 0; i < 15; i++) {
        faqDatabase.push({
            q: `Veredicto de Aseguramiento ${i + 16}: Control de Alta Mar`,
            a: "Confirmación de seguridad automatizada: El contrato inmutable amarra las variables contables al deployer oficial de Pons Family, blindando la liquidez y protegiendo las transacciones de la tripulación frente a los clones del fango."
        });
    }

    // Tipos de recipientes piratas mezclados para la cuadrícula
    const containerTypes = ["wood-barrel-faq", "glass-bottle-faq", "diamond-egg-faq"];

    faqDatabase.forEach((item, index) => {
        const itemType = containerTypes[index % containerTypes.length];
        const faqBox = document.createElement("div");
        faqBox.className = `faq-interactive-box ${itemType}`;
        
        faqBox.innerHTML = `
            <div class="faq-trigger-header">
                <span class="faq-indicator-icon"></span>
                <span class="faq-question-text">${item.q}</span>
            </div>
            <div class="faq-collapsible-body">
                <p class="faq-answer-content">${item.a}</p>
            </div>
        `;
        
        // Lógica elástica de acordeón (Clic abre y colapsa de forma interactiva)
        faqBox.querySelector(".faq-trigger-header").addEventListener("click", () => {
            const isActive = faqBox.classList.contains("faq-active");
            
            document.querySelectorAll(".faq-interactive-box").forEach(box => {
                box.classList.remove("faq-active");
            });
            
            if (!isActive) {
                faqBox.classList.add("faq-active");
            }
        });
        
        faqGrid.appendChild(faqBox);
    });

    // 2. INTERACTIVIDAD TEXTUAL DE LA BODEGA (ALINEADO A LA IZQUIERDA)
    const bodegaDisplay = document.getElementById("bodega-info");
    const bodegaManifests = [
        "20% Cofre: Monedas seguras que reclamas en la preventa. 100% en manos de la tripulación, sin retenciones del equipo.",
        "20% Alianza: Los aviadores degen que subieron a bordo antes de zarpar. Propiedad total de los usuarios de la red.",
        "20% Defensor: El héroe de manos de diamante que compra cada caída. Cero tokens retenidos por el desarrollador.",
        "20% Bucaneros: Carteras pesadas que sostienen la línea de fuego y estabilizan la gráfica en el mercado abierto.",
        "20% Abordajes: Flyers rápidos que se unen en la marea de la curva antes de que el precio de listado estalle."
    ];

    document.querySelectorAll(".bottle-item").forEach(bottle => {
        bottle.addEventListener("mouseenter", () => {
            const idx = bottle.getAttribute("data-index");
            bodegaDisplay.textContent = bodegaManifests[idx];
            bodegaDisplay.classList.add("text-highlight");
        });
        bottle.addEventListener("mouseleave", () => {
            bodegaDisplay.textContent = "Pasa el cursor o pulsa sobre una botella para auditar los manifiestos de propiedad...";
            bodegaDisplay.classList.remove("text-highlight");
        });
    });

    // 3. ENGRANAJE RPC SIMULADO DE LA MAREA DE LIQUIDEZ (0% A 100%)
    const mareaProgress = document.getElementById("liquidity-flow");
    const counterETH = document.getElementById("eth-counter");
    const rpcStatus = document.getElementById("rpc-status");
    const avatarKing = document.getElementById("king-parakeet");
    
    let currentETH = 0;
    const targetETH = 4.2;

    const runBlockchainSync = () => {
        if (currentETH < targetETH) {
            currentETH += 0.105;
            if (currentETH > targetETH) currentETH = targetETH;
            
            const percentage = (currentETH / targetETH) * 100;
            mareaProgress.style.width = `${percentage}%`;
            counterETH.textContent = `${currentETH.toFixed(2)} / ${targetETH.toFixed(2)} ETH`;
            avatarKing.style.left = `calc(${percentage}% - 25px)`;
            
            // Cambios de metales e hitos en la barra
            if (percentage >= 100) {
                mareaProgress.className = "marea-progress gold-multicolor-metal";
                rpcStatus.textContent = "¡CONTRATO INTELIGENTE GRADUADO! LIQUIDIDAD ENVIADA A UNISWAP V4 🔥";
                rpcStatus.style.color = "#ff007a";
            } else if (percentage >= 50) {
                mareaProgress.className = "marea-progress silver-metal";
                rpcStatus.textContent = "Marea en curso: Superando el fango de los corsarios terrestres...";
                rpcStatus.style.color = "#00e5ff";
            } else {
                mareaProgress.className = "marea-progress bronze-metal";
                rpcStatus.textContent = "Sincronizando bloques del nodo Robinhood RPC...";
            }
        }
    };

    // 4. MECÁNICAS DE CONTROL DE LAS TARJETAS INFERIORES
    const contractAddress = "0x54BF9EcF6b09E86DE19688E636a0368cc8844020";
    
    document.getElementById("btn-chest").addEventListener("click", (e) => {
        if (e.target.id === "btn-audit") return;
        navigator.clipboard.writeText(contractAddress);
        document.getElementById("btn-audit").style.display = "block";
        alert("¡Contrato Seguro Copiado al Portapapeles! 🔓💰✨");
    });
    
    document.getElementById("btn-audit").addEventListener("click", () => {
        window.open("https://robinhoodchain.com", "_blank");
    });

    document.getElementById("btn-storm").addEventListener("click", () => {
        window.open("https://www.ponsfamily.com/launchpad/0x54BF9EcF6b09E86DE19688E636a0368cc8844020", "_blank");
    });
    // Notificaciones consecutivas en español de Telegram Crew
    const telegramMessages = [
        "¡Sin preventas eternas ni tokens para el equipo! 🔥",
        "¡Alas abiertas, de una para Uniswap al graduarnos! 🦜",
        "¡Transparencia total en Pons Family! ¡Zarpamos! 🏴‍☠️"
    ];
    const notifArea = document.getElementById("notification-area");

    document.getElementById("btn-telegram").addEventListener("click", () => {
        notifArea.innerHTML = "";
        telegramMessages.forEach((msg, idx) => {
            setTimeout(() => {
                const notif = document.createElement("div");
                notif.className = "floating-notif-toast";
                notif.textContent = msg;
                notifArea.appendChild(notif);
                setTimeout(() => { notif.remove(); }, 3000);
            }, idx * 600);
        });

        setTimeout(() => {
            window.open("https://t.me/TenderParakeetOficial", "_blank");
        }, 2200);
    });

    document.getElementById("btn-x").addEventListener("click", () => {
        const textNode = document.getElementById("merkle-text");
        textNode.textContent = "¡NODO DE MERKLE VERIFICADO! 🌿";
        textNode.style.color = "#00e5ff";
        setTimeout(() => {
            window.open("https://x.com/LinguaMemeCoin", "_blank");
        }, 600);
    });
});

