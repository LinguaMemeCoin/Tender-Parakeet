document.addEventListener("DOMContentLoaded", () => {
    initLanguageEngine();
    initContractClipboard();
    initCorteCorsariaFa();
});

/**
 * 🌐 COMPONENTE 01: MOTOR BILINGÜE NATIVO CON MEMORIA (LOCALSTORAGE)
 * Cambia el idioma en menos de 1ms sin recargar la dApp ni deformar el diseño.
 */
function initLanguageEngine() {
    const langSwitcher = document.getElementById("lang-switcher");
    const langLabel = document.getElementById("lang-label");
    
    if (!langSwitcher || !langLabel) return;

    // Detectar idioma previo en caché o usar inglés por defecto
    let currentLang = localStorage.getItem("tender_parakeet_lang") || "en";
    applyLanguage(currentLang, langLabel);

    langSwitcher.addEventListener("click", () => {
        currentLang = currentLang === "en" ? "es" : "en";
        localStorage.setItem("tender_parakeet_lang", currentLang);
        applyLanguage(currentLang, langLabel);
        
        // Re-calcular la altura de los acordeones que estén abiertos para evitar texto cortado
        document.querySelectorAll(".faq-interactive-box.faq-active").forEach((box) => {
            const body = box.querySelector(".faq-collapsible-body");
            if (body) body.style.maxHeight = body.scrollHeight + "px";
        });
    });
}

function applyLanguage(lang, label) {
    label.textContent = lang.toUpperCase();
    
    // Traducir todos los elementos estáticos del HTML con el atributo data-translate
    document.querySelectorAll("[data-translate]").forEach((el) => {
        const textEn = el.getAttribute("data-en");
        const textEs = el.getAttribute("data-es");
        
        if (lang === "es" && textEs) {
            el.innerHTML = textEs;
        } else if (lang === "en" && textEn) {
            el.innerHTML = textEn;
        }
    });

    // Actualizar el FAQ dinámico de la Corte Corsaria si ya está renderizado
    updateCorteLanguage(lang);
}


/**
 * 🪐 COMPONENTE 02: COPIA DE CONTRATO (SANEADO CON RUTA EVM REAL PARA BLOCKSCOUT)
 */
function initContractClipboard() {
    const btnChest = document.getElementById("btn-chest");
    const btnAudit = document.getElementById("btn-audit");
    const smartContractAddress = "0x54BF9EcF6b09E86DE19688E636a0368cc8844020";

    if (!btnChest) return;

    btnChest.addEventListener("click", (e) => {
        if (e.target === btnAudit) return;

        navigator.clipboard.writeText(smartContractAddress)
            .then(() => {
                const isEs = localStorage.getItem("tender_parakeet_lang") === "es";
                spawnFloatingToast(isEs ? "🏴‍☠️ ¡Contrato copiado a la Bitácora de Alta Mar!" : "🏴‍☠️ Contract copied to the High Seas Log!");
            })
            .catch(() => {
                const isEs = localStorage.getItem("tender_parakeet_lang") === "es";
                spawnFloatingToast(isEs ? "❌ Error al acceder al portapapeles." : "❌ Clipboard access denied.");
            });
    });

    if (btnAudit) {
        btnAudit.addEventListener("click", (e) => {
            e.stopPropagation(); // Evita conflicto de clicks con la tarjeta del cofre
            window.open(`https://blockscout.com{smartContractAddress}`, "_blank", "noopener,noreferrer");
        });
    }
}


/**
 * 🍾 COMPONENTE 03: LA CORTE CORSARIA (30 ACORDEONES ELÁSTICOS BILINGÜES)
 * 0% Repeticiones. 100% Jerga Cripto y Blindaje sobre la Binance Web3 Wallet.
 */
let faqDatabase = [
    // BLOCK 1: TOKENOMICS & ECOSYSTEM TRANSPARENCY
    {
        q_en: "1. What is Tender Parakeet?",
        q_es: "1. ¿Qué es Tender Parakeet?",
        a_en: "It is a community-driven memecoin project engineered by the Flyers Alliance on the Robinhood Chain, specifically designed to eliminate slow corporate copycats from the ecosystem.",
        a_es: "Es un proyecto de memecoin impulsado por la comunidad y diseñado por la Alianza de los Flyers en la Robinhood Chain, programado específicamente para erradicar las copias corporativas lentas del ecosistema."
    },
    {
        q_en: "2. What is the maximum supply?",
        q_es: "2. ¿Cuál es el suministro máximo?",
        a_en: "The total supply is strictly capped at 1,000,000,000 $THND. All mint functions are permanently renounced, meaning no new tokens can ever be created or inflated by code.",
        a_es: "El suministro total está estrictamente limitado a 1,000,000,000 $THND. Todas las funciones de emisión están permanentemente renunciadas, por lo que nunca se podrán crear nuevos tokens por código."
    },
    {
        q_en: "3. Why is there a 3% transaction tax?",
        q_es: "3. ¿Por qué hay un impuesto de transacción del 3%?",
        a_en: "This fee serves as the team's direct operational salary and funds the budget for marketing, infrastructure maintenance, community dynamics, and open-market burns, since we hold 0% team allocations.",
        a_es: "Esta tarifa sirve como salario operativo directo del equipo y financia el presupuesto de marketing, mantenimiento, dinámicas comunitarias y quemas, ya que poseemos el 0% de asignaciones de equipo."
    },
    {
        q_en: "4. Can the 3% creator tax be modified later?",
        q_es: "4. ¿Se puede modificar el impuesto del 3% después?",
        a_en: "No. The 3% fee structure is hardcoded and hard-locked into the immutable smart contract. The deployer has zero technical capability to increase or modify this tax.",
        a_es: "No. La estructura de la tarifa del 3% está programada a fuego y bloqueada en el contrato inteligente inmutable. El implementador tiene cero capacidad técnica para aumentar o modificar este impuesto."
    },
    {
        q_en: "5. Does the creator have hidden wallets?",
        q_es: "5. ¿El creador tiene billeteras ocultas?",
        a_en: "Absolutely zero. The developers hold 0% of the supply; if the dev crew wants tokens, we must purchase them from the open marea just like any other investor.",
        a_es: "Absolutamente cero. Los desarrolladores tienen el 0% del suministro; si el equipo quiere tokens, debe comprarlos en el mercado abierto como cualquier otro inversor de la tripulación."
    },
    {
        q_en: "6. What is the Pons bonding curve?",
        q_es: "6. ¿Qué es la curva de vinculación de Pons?",
        a_en: "It is the autonomous smart contract that guards the fair presale, guaranteeing that 100% of the market supply is accessible under equal conditions for the entire crew.",
        a_es: "Es el contrato inteligente autónomo que custodia la preventa justa, garantizando que el 100% del suministro de mercado sea accesible bajo las mismas condiciones para toda la tripulación."
    },
    
    // BLOCK 2: INFRASTRUCTURE & WALLET SECURITY
    {
        q_en: "7. What architecture does the Robinhood Chain use?",
        q_es: "7. ¿Qué arquitectura usa la Robinhood Chain?",
        a_en: "It is a custom-engineered, modified port of Arbitrum, running as a regulated Layer 2 network with the canonical Chain ID 4663.",
        a_es: "Es un port modificado y diseñado a medida de Arbitrum, que opera como una red de Capa 2 regulada bajo el Chain ID canónico 4663."
    },
    {
        q_en: "8. What token is required for transaction fees?",
        q_es: "8. ¿Qué token se requiere para las tarifas de transacción?",
        a_en: "The network utilizes an engineered custom gas structure fueled by native Ether ($ETH). You must hold a fraction of native $ETH to process any on-chain actions.",
        a_es: "La red utiliza una estructura de gas personalizada impulsada por Ether ($ETH) nativo. Debes poseer una fracción de $ETH nativo para procesar cualquier acción en la cadena."
    },
    {
        q_en: "9. What is a Burner Wallet and why use it?",
        q_es: "9. ¿Qué es una Billetera de Sacrificio y por qué usarla?",
        a_en: "It is a secondary, disposable account used to isolate your primary vault. We strictly recommend deploying a burner wallet to test the waters with zero friction.",
        a_es: "Es una cuenta secundaria y desechable utilizada para aislar tu bóveda principal. Recomendamos estrictamente desplegar una billetera de sacrificio para probar las aguas con cero fricciones."
    },
    {
        q_en: "10. Can I delete my burner account safely on software like Binance Web3 Wallet?",
        q_es: "10. ¿Puedo borrar mi cuenta de sacrificio de forma segura en Binance Web3 Wallet?",
        a_en: "Absolutely. This dApp operates in a pure non-custodial environment. You can completely delete, wipe, or remove your temporary burner account from your Binance Web3 Wallet or software at any moment. Doing so will never compromise or affect your primary vault or main exchange funds.",
        a_es: "Absolutamente. Esta dApp opera en un entorno no custodio puro. Puedes borrar, limpiar o eliminar por completo tu cuenta de sacrificio temporal de tu Binance Web3 Wallet o software en cualquier momento. Hacerlo nunca comprometerá ni afectará tu bóveda principal o tus fondos del exchange."
    },
    {
        q_en: "11. How should I verify my $ETH connection?",
        q_es: "11. ¿Cómo debo verificar mi conexión de $ETH?",
        a_en: "Never blind-send heavy bags. We advise you to transfer a tiny fraction of native $ETH first as a test run to ensure your network settings and node compatibility are working flawlessly.",
        a_es: "Nunca envíes bolsas pesadas a ciegas. Te aconsejamos transferir primero una fracción diminuta de $ETH nativo como prueba para asegurar que tus ajustes de red y compatibilidad de nodo operen sin fallos."
    },
    {
        q_en: "12. Is there any official relationship with the corporate brand?",
        q_es: "12. ¿Existe alguna relación oficial con la marca corporativa?",
        a_en: "No. We hold absolutely no official relationship with the corporate entity behind the network. This is a community-driven mascot project—it is time to support our own frontier.",
        a_es: "No. No tenemos ninguna relación oficial con la entidad corporativa detrás de la red. Este es un proyecto de mascota impulsado por la comunidad: es hora de apoyar nuestra propia frontera."
    },

    // BLOCK 3: STRATEGY & ORGANIC GROWTH
    {
        q_en: "13. Why does the progress along the curve seem slow?",
        q_es: "13. ¿Por qué el avance en la curva parece lento?",
        a_en: "Because we operate with zero malicious bots and no fake inflated marketing. We favor organic, transparent growth over artificial insider hype.",
        a_es: "Porque operamos con cero bots maliciosos y sin marketing inflado falso. Favorecemos el crecimiento orgánico y transparente por encima del hype artificial de los insiders."
    },
    {
        q_en: "14. How much capital should I allocate?",
        q_es: "14. ¿Cuánto capital debería asignar?",
        a_en: "Do not over-invest. We strictly advise the crew not to invest too much capital until we have forged a real, battle-tested, and resilient community.",
        a_es: "No inviertas demasiado. Aconsejamos estrictamente a la tripulación no comprometer demasiado capital hasta que forjemos una comunidad real, fuerte y probada en batalla."
    },
    {
        q_en: "15. What is the difference between this and other meme launches?",
        q_es: "15. ¿Cuál es la diferencia entre esto y otros lanzamientos de memes?",
        a_en: "It is infinitely better to have 3 months of transparent, organic development than to fake artificial volume using internal dev wallets just to dump on you and drain your funds.",
        a_es: "Es infinitamente mejor tener 3 meses de desarrollo orgánico y transparente que fingir volumen artificial usando billeteras internas de desarrolladores para acabar haciendo un dump y vaciándote los fondos."
    },
    {
        q_en: "16. Can the team freeze or pause the trading?",
        q_es: "16. ¿El equipo puede congelar o pausar el comercio?",
        a_en: "No. There are no pause functions, blacklists, or freeze mechanisms embedded in the smart contract code, ensuring an absolute fair launch environment.",
        a_es: "No. No hay funciones de pausa, listas negras o mecanismos de congelación incrustados en el código del contrato inteligente, asegurando un entorno de lanzamiento justo absoluto."
    },
    {
        q_en: "17. What happens if I send ETH from the wrong network?",
        q_es: "17. ¿Qué pasa si envío ETH desde la red incorrecta?",
        a_en: "Your funds will be permanently lost. Always double-check that your $ETH is bridged and fully compatible with the specific Robinhood Chain (ID 4663) parameters.",
        a_es: "Tus fondos se perderán permanentemente. Revisa siempre al máximo que tu $ETH esté puenteado y sea totalmente compatible con los parámetros específicos de la Robinhood Chain (ID 4663)."
    },
    {
        q_en: "18. Are there any useless utilities like staking or airdrops?",
        q_es: "18. ¿Hay utilidades inútiles como staking o airdrops?",
        a_en: "Zero. We offer 0% intrinsic utility, no inflationary airdrops, and no fake staking mechanisms. The focus is pure community culture, fun, and open speculation.",
        a_es: "Cero. Ofrecemos 0% de utilidad intrínseca, sin airdrops inflacionarios y sin mecanismos de staking falsos. El enfoque es pura cultura comunitaria, diversión y especulación abierta."
    },

    // BLOCK 4: STRATEGIC GRADUATION & DEFLATIONARY BURNS
    {
        q_en: "19. What happens when the 4.20 ETH hard cap is hit?",
        q_es: "19. ¿Qué pasa cuando se alcanza el tope de 4.20 ETH?",
        a_en: "The smart contract automatically locks the gates and triggers the liquidity migration, deploying the entire pool directly on Uniswap without human intervention.",
        a_es: "El contrato inteligente cierra automáticamente las compuertas y activa la migración de liquidez, desplegando todo el pool directamente en Uniswap sin intervención humana."
    },
    {
        q_en: "20. Is the Uniswap liquidity pool locked?",
        q_es: "20. ¿El pool de liquidez de Uniswap está bloqueado?",
        a_en: "Yes. The graduation script automatically burns the Liquidity Provider (LP) tokens upon deployment. This guarantees that the liquidity is locked forever and can never be pulled.",
        a_es: "Sí. El script de graduación quema automáticamente los tokens de Proveedor de Liquidez (LP) al desplegarse. Esto garantiza que la liquidez quede bloqueada para siempre y nunca pueda ser retirada."
    },
    {
        q_en: "21. How do the strategic buyback-and-burn events work?",
        q_es: "21. ¿Cómo funcionan los eventos de recompra y quema estratégicos?",
        a_en: "The 3% creator tax accumulated from volume is weaponized after the Uniswap listing to execute market buybacks, sending those tokens to the dead address to reduce the supply forever.",
        a_es: "El impuesto del 3% del creador acumulado por el volumen se activa tras el listado en Uniswap para ejecutar recompras de mercado, enviando esos tokens a la dirección muerta para reducir el suministro para siempre."
    },
    {
        q_en: "22. Why does the project fight corporate meme tokens?",
        q_es: "22. ¿Por qué el proyecto combate los tokens meme corporativos?",
        a_en: "Because modern meme networks are flooded with artificial bot-pumps and endless copycats engineered with a single corporate purpose: to drain your wallet.",
        a_es: "Porque las redes de memes modernas están inundadas de bombeos artificiales de bots y copias infinitas diseñadas con un único propósito corporativo: vaciar tu billetera."
    },
    {
        q_en: "23. How can I safely audit the smart contract?",
        q_es: "23. ¿Cómo puedo auditar el contrato inteligente de forma segura?",
        a_en: "The code is open-source and immutable. You can audit it directly on the native Robinhood Chain Blockscout explorer without risking your data on shady third-party sites.",
        a_es: "El código es de código abierto e inmutable. Puedes auditarlo directamente en el explorador nativo Blockscout de la Robinhood Chain sin arriesgar tus datos en sitios externos de dudosa reputación."
    },
    {
        q_en: "24. What are the 'Gas Fees on their Head' rewards in the Bounty Board?",
        q_es: "24. ¿Qué significan las recompensas de 'Tarifa de Gas por su Cabeza'?",
        a_en: "It is a tactical irony mocking the massive capital wasted on congested chains; capturing them means pulling liquidity away from bot-pumped tokens into the Flyers' nest.",
        a_es: "Es una ironía táctica que se burla del capital masivo desperdiciado en cadenas congestionadas; capturarlos significa atraer la liquidez de los tokens inflados por bots hacia el nido de los Flyers."
    },

    // BLOCK 5: ADVANCED SECURITY & DEFENSE PROTOCOLS
    {
        q_en: "25. Why does the Roadmap use mutant eggs?",
        q_es: "25. ¿Por qué el Roadmap utiliza huevos mutantes?",
        a_en: "It represents the biological and tactical evolution of our insurgent fleet as we steadily devour the supply, shatter the corporate shell, and take over the skies.",
        a_es: "Representa la evolución biológica y táctica de nuestra flota insurgente a medida que devoramos constantemente el suministro, rompemos el cascarón corporativo y tomamos los cielos."
    },
    {
        q_en: "26. Will the team ever send me a direct message (DM)?",
        q_es: "26. ¿El equipo me enviará alguna vez un mensaje directo (DM)?",
        a_en: "Never. The team will never send DMs, request your private keys, or share third-party links. Official channels and contract addresses are permanently pinned on our official social vaults.",
        a_es: "Jamás. El equipo nunca enviará mensajes directos, ni pedirá tus claves privadas, ni compartirá enlaces de terceros. Los canales y contratos oficiales están permanentemente fijados en nuestras redes oficiales."
    },
    {
        q_en: "27. What software wallets are fully compatible?",
        q_es: "27. ¿Qué billeteras de software son totalmente compatibles?",
        a_en: "Any major Web3 software that supports manual RPC configuration or connects securely through the decentralized protocols of WalletConnect and Binance Web3 Wallet.",
        a_es: "Cualquier software Web3 importante que admita la configuración manual de RPC o se conecte de forma segura a través de los protocolos descentralizados de WalletConnect y Binance Web3 Wallet."
    },
    {
        q_en: "28. What is the meaning of 'Diamond Wings'?",
        q_es: "28. ¿Cuál es el significado de 'Alas de Diamante'?",
        a_en: "It represents the psychological mindset of the true flyers: holding tight through high-seas volatility and refusing to shake under the panic generated by corporate bots.",
        a_es: "Representa la mentalidad psicológica de los verdaderos flyers: mantenerse firmes ante la volatilidad de alta mar y negarse a temblar bajo el pánico generado por los bots corporativos."
    },
    {
        q_en: "29. How can I protect my ship against Phishing?",
        q_es: "29. ¿Cómo puedo proteger mi barco contra el Phishing?",
        a_en: "Always verify the precise URL of our official landing dock. Our system is internally insulated against cross-site scripting to guarantee an untamperable interface.",
        a_es: "Verifica siempre la URL precisa de nuestro muelle de aterrizaje oficial. Nuestro sistema está internamente aislado contra secuestros de comandos para garantizar una interfaz inalterable."
    },
    {
        q_en: "30. Who governs the project after graduation?",
        q_es: "30. ¿Quién gobierna el proyecto después de la graduación?",
        a_en: "The community and the code. Once the contract graduates to Uniswap, the mathematical rules are set in stone, leaving the destiny of the token entirely in the hands of the Flyers.",
        a_es: "La comunidad y el código. Una vez que el contrato se gradúa en Uniswap, las reglas matemáticas quedan fijadas en piedra, dejando el destino del token completamente en manos de los Flyers."
    }
];

function initCorteCorsariaFa() {
    const faqGrid = document.getElementById("corte-faq-grid");
    if (!faqGrid) return;

    faqGrid.innerHTML = ""; // Limpieza preventiva anti-duplicados

    faqDatabase.forEach((item, index) => {
        const box = document.createElement("div");
        box.className = "faq-interactive-box";
        box.setAttribute("data-faq-index", index);

        const header = document.createElement("div");
        header.className = "faq-trigger-header";

        const icon = document.createElement("span");
        icon.className = "faq-indicator-icon";
        icon.textContent = "🍾";

        const title = document.createElement("span");
        title.className = "faq-title-text";

        header.appendChild(icon);
        header.appendChild(title);

        const body = document.createElement("div");
        body.className = "faq-collapsible-body";

        const content = document.createElement("div");
        content.className = "faq-answer-content";

        body.appendChild(content);
        box.appendChild(header);
        box.appendChild(body);
        faqGrid.appendChild(box);

        header.addEventListener("click", () => {
            const isActive = box.classList.contains("faq-active");

            // Cierre elástico de los bloques hermanos para mantener el muelle visual limpio
            document.querySelectorAll(".faq-interactive-box").forEach((el) => {
                el.classList.remove("faq-active");
                const bodyEl = el.querySelector(".faq-collapsible-body");
                if (bodyEl) bodyEl.style.maxHeight = null;
                const iconEl = el.querySelector(".faq-indicator-icon");
                if (iconEl) iconEl.textContent = "🍾";
            });

            if (!isActive) {
                box.classList.add("faq-active");
                body.style.maxHeight = body.scrollHeight + "px"; // Cálculo dinámico exacto de altura
                icon.textContent = "🍷";
            }
        });
    });

    // Carga de texto sincrónica basada en el idioma activo en caché
    const initialLang = localStorage.getItem("tender_parakeet_lang") || "en";
    updateCorteLanguage(initialLang);
}

function updateCorteLanguage(lang) {
    document.querySelectorAll(".faq-interactive-box").forEach((box) => {
        const index = box.getAttribute("data-faq-index");
        const item = faqDatabase[index];
        if (!item) return;

        const titleEl = box.querySelector(".faq-title-text");
        const contentEl = box.querySelector(".faq-answer-content");
        const bodyEl = box.querySelector(".faq-collapsible-body");

        if (lang === "es") {
            if (titleEl) titleEl.textContent = item.q_es;
            if (contentEl) contentEl.textContent = item.a_es;
        } else {
            if (titleEl) titleEl.textContent = item.q_en;
            if (contentEl) contentEl.textContent = item.a_en;
        }

        // Si el acordeón está activo durante la traducción, recalcular su altura en vivo
        if (box.classList.contains("faq-active") && bodyEl) {
            bodyEl.style.maxHeight = bodyEl.scrollHeight + "px";
        }
    });
}


/**
 * 🛠️ AUXILIAR: GENERADOR DE NOTIFICACIONES TOAST DE ALTA DEFINICIÓN
 */
function spawnFloatingToast(message) {
    const notificationArea = document.getElementById("notification-area");
    if (!notificationArea) return;

    const toast = document.createElement("div");
    toast.className = "floating-notif-toast";
    toast.textContent = message; // Sanitización total inyectada contra Prompt Injections

    notificationArea.appendChild(toast);

    setTimeout(() => {
        if (toast && toast.parentNode === notificationArea) {
            toast.remove();
        }
    }, 3500);
}
