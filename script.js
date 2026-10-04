// ==========================================================================
// CONFIGURACIÓN GLOBAL DEL TOKEN ($THND) EN LA ROBINHOOD CHAIN
// ==========================================================================
const TOKEN_DATA = {
    contractAddress: "0x54BF9EcF6b09E86DE19688E636a0368cc8844020",
    ponsUrl: "https://ponsfamily.com",
    rpcUrl: "https://robinhoodchain.com", // Nodo público para consulta Web3
    targetEth: 4.2 // Meta inalterable de la curva de vinculación
};

// ==========================================================================
// DICCIONARIO MAESTRO i18n (VERIFICADO Y SIN CORTES)
// ==========================================================================
const translations = {
    es: {
        titulo_hero: "🏴‍☠️ Tender Parakeet ($THND) 🦜",
        desc_hero: "Las coordenadas están fijadas en la <strong>Robinhoodchain</strong>. Mientras los <em>Jeets</em> del suelo tiemblen ante la volatilidad, la tripulación despliega sus alas de diamante hacia el cofre dorado. Cero asignaciones de equipo, cero bloqueos de desarrolladores tramposos; esto es un <strong>Fair Launch absoluto</strong> resguardado en la curva de vinculación de Pons. ¡Prepara tus bolsas de <strong>$ETH</strong> y reclama tu botín antes de la inminente graduación hacia Uniswap!",
        btn_copy: "Cofre del Botín",
        btn_copy_success: "¡Copiado con éxito! 🏴‍☠️",
        btn_buy: "Tormenta Pons",
        btn_tg_text: "Mensajes de Alta Mar",
        btn_x_text: "Árbol de Merkle",
        progress_title: "📈 Progreso de la Curva de Vinculación",
        progress_desc: "Inyectando volumen en Pons para forzar la graduación de liquidez:",
        progress_loading: "Escaneando transacciones en Robinhood Chain...",
        progress_meta_prefix: "Meta de Graduación:",
        remaining_text: "Faltan",
        remaining_end: "para activar el Pool",
        manifesto_phrase_title: "👑 El Decreto del Nuevo Rey",
        manifesto_phrase_text: '"El tiempo de los no voladores está liquidado... ¡Un nuevo rey de las memecoins prepara su nido para conquistar absolutamente toda la blockchain y mandar al carajo a los Jeets terrestres!"',
        tok_title: "🪙 Manifiesto del Botín (Tokenomics)",
        tok_intro: "Las reglas del contrato son fijas e inalterables en la blockchain. En este barco operamos con las cartas sobre la mesa:",
        tok_1_title: "👥 100% Comunidad",
        tok_1_desc: "Suministro fijo e inyectado por completo a la curva de Pons desde el primer segundo. Cero tokens guardados para el equipo, cero preventas ocultas de las que preocuparse.",
        tok_2_title: "⚔️ 3% Creator Tax & Quema",
        tok_2_desc: "¡Mecánica letal! El 3% del código financia el marketing global de la flota. Pero al graduarse en Uniswap, el 50% de esas comisiones acumuladas se QUEMARÁ perpetuamente.",
        tok_3_title: "🌊 Especulación Pura",
        tok_3_desc: "Sin utilidades artificiales ni promesas vacías. Diseñado estrictamente para el entretenimiento puro, la adrenalina cripto y desplazar a los animales terrestres.",
        road_title: "🗺️ Mapa de Invasión (Roadmap de los Flyers)",
        road_intro: "Sin falsas promesas ni utilidades artificiales. Tres pasos claros hacia la descentralización absoluta en Robinhood Chain.",
        rivals_title: "🦅 El Vuelo frente a los Caminantes de Tierra",
        rivals_intro: "Mientras el resto del mercado cripto se arrastra en la lentitud de los suelos tradicionales, el Capitán Perico despliega sus alas directas al cofre dorado.",
        rival_frog_title: "🐸 Saltarines Terrestres",
        rival_frog_desc: "Anfibios atrapados en charcos antiguos. Intentan saltar alto operando en cámara lenta comparados con nuestro vuelo.",
        rival_dog_title: "🐶 Cachorros del Suelo",
        rival_dog_desc: "Caninos que ladran en la tierra firme esperando una recompensa que nunca llega. Carecen de la perspectiva del cielo.",
        rival_penguin_title: "🐧 Aves sin Alas",
        rival_penguin_desc: "Observan desde sus islas de hielo cómo se escapa el botín digital. Olvidaron el arte de volar hacia la descentralización.",
        rival_niulai_desc: "Un rival inesperado aparece desde el Imperio del Centro, forjado en el místico Templo del Dragón de Fuego. Surgió desde el mismo pueblo de la blockchain... ¿Será un aliado de nuestra flota o un enemigo encubierto listo para atacar en las sombras?",
        buy_steps_title: "🗺️ Abordaje Express (Ruta del Tesoro)",
        step_1_title: "⚓ Nuevo Barco",
        step_1_desc: "Construye una <strong>billetera secundaria (Burner Wallet)</strong> en MetaMask o Rabby exclusiva para explorar dApps de preventa. ¡Mantén a salvo tu tesoro principal!",
        step_2_title: "🪙 Carga Munición",
        step_2_desc: "Deposita fondos en <strong>$ETH</strong> dentro de tu nuevo barco. Esta será la pólvora necesaria para intercambiar por los preciados tokens <strong>$THND</strong>.",
        shield_title: "🛡️ El Escudo de Alta Mar (Seguridad Absoluta)",
        shield_intro: "Con la verdad por delante. En este barco protegemos la ética cripto y tu botín con reglas inquebrantables:",
        faq_main_title: "❓ Interrogatorios en el Puerto (FAQ)",
        faq_main_intro: "Todo lo que la tripulación degen necesita saber antes de abordar la tormenta cripto en alta mar:",
        chest_closed: "Cofre del Botín",
        chest_opened: "¡Copiado con éxito! 🏴‍☠️",
        chest_status_closed: "CERRADO",
        chest_status_opened: "¡COPIADO!"
    },
    en: {
        titulo_hero: "🏴‍☠️ Tender Parakeet ($THND) 🦜",
        desc_hero: "Coordinates are locked onto the <strong>Robinhoodchain</strong>. While the ground <em>Jeets</em> shake in fear of volatility, the crew deploys diamond wings straight toward the golden chest. Zero team allocation, zero shady dev locks; this is an <strong>absolute Fair Launch</strong> guarded inside the Pons bonding curve. Ready your <strong>$ETH</strong> bags and claim your loot before the imminent graduation to Uniswap!",
        btn_copy: "Loot Chest",
        btn_copy_success: "Loot Copied! 🏴‍☠️",
        btn_buy: "Sea Storm",
        btn_tg_text: "High Seas Msg",
        btn_x_text: "Merkle Tree",
        progress_title: "📈 Loot Progress (Bonding Curve)",
        progress_desc: "Target for graduation and automatic listing on Uniswap:",
        progress_loading: "Scanning transactions on Robinhood Chain...",
        progress_meta_prefix: "Target:",
        remaining_text: "Remaining",
        remaining_end: "to Uniswap",
        manifesto_phrase_title: "👑 The Decree of the New King",
        manifesto_phrase_text: '"The time of the non-flyers is done... A new king prepares his nest to conquer the absolute entire blockchain!"',
        tok_title: "🪙 Loot Manifesto (Tokenomics)",
        tok_intro: "The rules of the contract are fixed and unalterable on the blockchain. On this vessel, we play cards face up:",
        tok_1_title: "👥 100% Community",
        tok_1_desc: "Fixed supply fully injected into the Pons curve from second one. Zero team allocations, zero hidden pre-sales to worry about.",
        tok_2_title: "⚔️ 3% Creator Tax & Burn",
        tok_2_desc: "Lethal mechanics! 3% code tax funds global marketing of the fleet. But upon Uniswap listing, 50% of those accumulated fees will be PERPETUALLY TORCHED.",
        tok_3_title: "🌊 Pure Speculation",
        tok_3_desc: "No artificial utilities or empty promises. Designed strictly for pure entertainment, degen adrenaline, and displacing ground animals.",
        road_title: "🗺️ Invasion Map (Flyers Roadmap)",
        road_intro: "No fake roadmaps, no fake utilities. Clean steps straight to absolute decentralization on Robinhood Chain.",
        rivals_title: "🦅 Flight vs Groundlings",
        rivals_intro: "While the rest of the crypto market crawls in the slowness of traditional grounds, Captain Parakeet deploys his wings straight to the golden chest.",
        rival_frog_title: "🐸 Terrestrial Hoppers",
        rival_frog_desc: "Amphibians trapped in ancient puddles. They try to jump high using old meta, but operate in slow motion compared to our flight.",
        rival_dog_title: "🐶 Ground Puppies",
        rival_dog_desc: "Canines barking on dry ground waiting for a reward that never comes. They completely lack the perspective of the sky.",
        rival_penguin_title: "🐧 Wingless Birds",
        rival_penguin_desc: "Watching from their ice islands how digital loot slips away. They forgot the art of flying toward true decentralization.",
        rival_niulai_desc: "An unexpected rival appears from the Middle Empire, forged in the mystical Fire Dragon Temple. Born from the very depths of blockchain... Will it be an ally or a hidden shadow enemy ready to strike?",
        buy_steps_title: "🗺️ Express Boarding (The Treasure Route)",
        step_1_title: "⚓ New Vessel",
        step_1_desc: "Set up a <strong>secondary wallet (Burner Wallet)</strong> in MetaMask or Rabby exclusively to explore pre-launch dApps. Keep your primary treasure safe!",
        step_2_title: "🪙 Load Ammo",
        step_2_desc: "Deposit funds in <strong>$ETH</strong> inside your new vessel. This will be the necessary gunpowder to swap for precious <strong>$THND</strong> tokens.",
        shield_title: "🛡️ High Seas Shield (Absolute Security)",
        shield_intro: "Truth ahead. On this ship, we protect crypto ethics and your loot with unalterable rules:",
        faq_main_title: "❓ Port Interrogations (FAQ)",
        faq_main_intro: "Everything the degen crew needs to know before navigating the high seas crypto storm:",
        chest_closed: "Loot Chest",
        chest_opened: "Loot Copied! 🏴‍☠️",
        chest_status_closed: "CLOSED",
        chest_status_opened: "COPIED!"
    }, // <-- ESTA LLAVE CIERRA EL IDIOMA INGLÉS CORECTAMENTE
    
    // A PARTIR DE AQUÍ COMIENZAN LOS NUEVOS IDIOMAS SEGUROS:
    fr: {
        titulo_hero: "🏴‍☠️ Perruche Tendre ($THND) 🦜",
        desc_hero: "Les coordonnées sont fixées sur la <strong>Robinhoodchain</strong>. Alors que les <em>Jeets</em> du sol tremblent face à la volatilité, l'équipage déploie ses ailes de diamant vers le coffre doré. Zéro allocation d'équipe, zéro blocage de développeur suspect; c'est un <strong>Fair Launch absolu</strong> sécurisé par la courbe de liaison de Pons. Préparez vos sacs de <strong>$ETH</strong> et réclamez votre butin avant l'imminente graduation vers Uniswap!",
        btn_copy: "Coffre au Butin",
        btn_copy_success: "Copié avec succès! 🏴‍☠️",
        btn_buy: "Tempête Pons",
        btn_tg_text: "Messages de Haute Mer",
        btn_x_text: "Arbre de Merkle",
        progress_title: "📈 Progression de la Courbe de Liaison",
        progress_desc: "Campagne de volume sur Pons pour forcer la graduation de la liquidité:",
        progress_loading: "Analyse des transactions sur Robinhood Chain...",
        progress_meta_prefix: "Objectif de Graduation:",
        remaining_text: "Il reste",
        remaining_end: "pour activer le Pool",
        manifesto_phrase_title: "👑 Le Décret du Nouveau Roi",
        manifesto_phrase_text: '"Le temps des non-volants est révolu... Un nouveau roi des memecoins prépare son nid pour conquérir absolument toute la blockchain!"',
        tok_title: "🪙 Manifeste du Butin (Tokenomics)",
        tok_intro: "Les règles du contrat sont fixes et inalterables sur la blockchain:",
        tok_1_title: "👥 100% Communauté",
        tok_1_desc: "Offre fixe entièrement injectée dans la courbe Pons dès la première seconde. Zéro allocation d'équipe.",
        tok_2_title: "⚔️ 3% Taxe Créateur & Burn",
        tok_2_desc: "La taxe finance le marketing. Après la graduation sur Uniswap, 50% de ces frais accumulés seront BRÛLÉS.",
        tok_3_title: "🌊 Pure Spéculation",
        tok_3_desc: "Aucune utilité artificielle. Conçu pour le divertissement pur et chasser les animaux terrestres.",
        road_title: "🗺️ Carte d'Invasion (Feuille de Route)",
        road_intro: "Des étapes claires vers la décentralisation absolue sur Robinhood Chain.",
        rivals_title: "🦅 Le Vol face aux Rampants",
        rivals_intro: "Le Capitaine Perico déploie ses ailes vers le coffre doré.",
        rival_frog_title: "🐸 Grenouilles Terrestres",
        rival_frog_desc: "Amphibiens piégés dans de vieilles mares operating au ralenti.",
        rival_dog_title: "🐶 Chiots du Sol",
        rival_dog_desc: "Canidés qui attendent une récompense qui ne vient jamais.",
        rival_penguin_title: "🐧 Oiseaux sans Ailes",
        rival_penguin_desc: "Ils regardent depuis leurs îles de glace le butin numérique s'échapper.",
        rival_niulai_desc: "Un rival inattendu de l'Empire du Milieu né de la blockchain elle-même.",
        buy_steps_title: "🗺️ Abordage Express (La Route du Trésor)",
        step_1_title: "⚓ Nouveau Navire",
        step_1_desc: "Configurez un <strong>portefeuille secondaire (Burner Wallet)</strong> sur MetaMask ou Rabby.",
        step_2_title: "🪙 Chargez les Munitions",
        step_2_desc: "Déposez des fonds en <strong>$ETH</strong> pour acquérir vos tokens <strong>$THND</strong>.",
        shield_title: "🛡️ Le Bouclier de la Haute Mer",
        shield_intro: "Nous protégeons l'éthique crypto et votre butin avec des règles inviolables:",
        faq_main_title: "❓ FAQ",
        faq_main_intro: "Tout ce que l'équipage degen doit savoir avant de naviguer:",
        chest_closed: "Coffre au Butin",
        chest_opened: "Copié avec succès! 🏴‍☠️",
        chest_status_closed: "FERMÉ",
        chest_status_opened: "COPIÉ!"
    },
    pt: {
        titulo_hero: "🏴‍☠️ Periquito Terno ($THND) 🦜",
        desc_hero: "As coordenadas estão fixadas na <strong>Robinhoodchain</strong>. Enquanto os <em>Jeets</em> do chão tremem diante da volatilidade, a tripulação desdobra suas asas de diamante em direção ao baú dourado. Zero alocações de equipe, zero bloqueios de desenvolvedores suspeitos; isso é um <strong>Fair Launch absoluto</strong> protegido na curva de vinculação da Pons. Prepare suas bolsas de <strong>$ETH</strong> e resgate seu saque antes da iminente graduação para a Uniswap!",
        btn_copy: "Baú do Tesouro",
        btn_copy_success: "Copiado com sucesso! 🏴‍☠️",
        btn_buy: "Tempestade Pons",
        btn_tg_text: "Mensagens de Alto Mar",
        btn_x_text: "Árvore de Merkle",
        progress_title: "📈 Progresso da Curva de Vinculação",
        progress_desc: "Injetando volume na Pons para forçar a graduação da liquidez:",
        progress_loading: "Escaneando transações na Robinhood Chain...",
        progress_meta_prefix: "Meta de Graduación:",
        remaining_text: "Faltam",
        remaining_end: "para ativar o Pool",
        manifesto_phrase_title: "👑 O Decreto do Novo Rei",
        manifesto_phrase_text: '"O tempo dos não voadores acabou... Um novo rei das memecoins prepara seu ninho para conquistar a blockchain!"',
        tok_title: "🪙 Manifesto do Saque (Tokenomics)",
        tok_intro: "As regras do contrato são fixas e inalteráveis na blockchain.",
        tok_1_title: "👥 100% Comunidade",
        tok_1_desc: "Suprimento fixo totalmente injetado na curva Pons desde o primeiro segundo.",
        tok_2_title: "⚔️ 3% Taxa do Criador & Queima",
        tok_2_desc: "O código financia o marketing. Ao se graduar na Uniswap, 50% das taxas acumuladas serão QUEIMADAS.",
        tok_3_title: "🌊 Pura Especulação",
        tok_3_desc: "Sem utilidades artificiais. Projetado para entretenimento puro e adrenalina degen.",
        road_title: "🗺️ Mapa de Invasão (Roteiro)",
        road_intro: "Passos limpos direto para a descentralização absoluta na Robinhood Chain.",
        rivals_title: "🦅 O Voo contra os Terrestres",
        rivals_intro: "Capitão Perico desdobra suas asas em direção ao baú dourado.",
        rival_frog_title: "🐸 Sapos Terrestres",
        rival_frog_desc: "Anfíbios presos em lagoas antigas operando em câmera lenta.",
        rival_dog_title: "🐶 Cachorros do Chão",
        rival_dog_desc: "Caninos latindo na terra firme esperando uma recompensa que nunca chega.",
        rival_penguin_title: "🐧 Aves sem Asas",
        rival_penguin_desc: "Esqueceram a arte de voar rumo à descentralização.",
        rival_niulai_desc: "Um rival inesperado do Império do Meio que surgiu da própria blockchain.",
        buy_steps_title: "🗺️ Abordaje Express (A Rota do Tesouro)",
        step_1_title: "⚓ Novo Navio",
        step_1_desc: "Crie uma <strong>carteira secundária (Burner Wallet)</strong> na MetaMask ou Rabby.",
        step_2_title: "🪙 Carga de Munição",
        step_2_desc: "Deposite fundos em <strong>$ETH</strong> para trocar pelos tokens <strong>$THND</strong>.",
        shield_title: "🛡️ O Escudo do Alto Mar",
        shield_intro: "Neste navio protegemos a ética cripto e seu saque com regras inquebrantáveis:",
        faq_main_title: "❓ FAQ",
        faq_main_intro: "Tudo o que a tripulação degen precisa saber antes de navegar:",
        chest_closed: "Baú do Tesouro",
        chest_opened: "Copiado com sucesso! 🏴‍☠️",
        chest_status_closed: "FECHADO",
        chest_status_opened: "COPIADO!"
    } // <-- ESTA LLAVE CIERRA TODO EL OBJETO TRANSLATIONS COMPLETO
};

    }
};
// ==========================================================================
// MOTOR DE TRADUCCIÓN INTERNACIONAL RECOGNIZADO (i18n) - ¡CONTINUACIÓN EXACTA!
// ==========================================================================
function changeLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    document.querySelectorAll('.btn-idioma').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// ==========================================================================
// LOGICA INTERACTIVA DE LAS TARJETAS (CRYPTO DECK GRID)
// ==========================================================================

// 1. El Cofre del Tesoro (Copia Segura de CA)
function openAndCopyChest() {
    const contractText = TOKEN_DATA.contractAddress;
    const container = document.getElementById('chestContainer');
    const emoji = document.getElementById('chestEmoji');
    const label = document.getElementById('chestLabel');
    const badge = document.getElementById('chestBadge');

    navigator.clipboard.writeText(contractText).then(() => {
        emoji.innerText = "🔓";
        container.classList.add('chest-open-glow');
        label.innerText = translations[currentLang].chest_opened;
        if (badge) badge.innerText = translations[currentLang].chest_status_opened;

        setTimeout(() => {
            emoji.innerText = "🔒";
            container.classList.remove('chest-open-glow');
            label.innerText = translations[currentLang].chest_closed;
            if (badge) badge.innerText = translations[currentLang].chest_status_closed;
        }, 2500);
    }).catch(err => console.error('Error al abrir el cofre:', err));
}

// 2. Tormenta Marina de Pons (Frenado y Compra)
function triggerStormClick(event) {
    event.preventDefault();
    const btn = document.getElementById('stormBtn');
    if (btn.classList.contains('storm-calmed')) return;

    btn.classList.add('storm-calmed');
    const textSpan = btn.querySelector('.storm-btn-text');
    const originalText = textSpan.innerHTML;
    textSpan.innerHTML = currentLang === 'es' ? "¡TORMENTA DOMADA! MAR CALMO 🌊" : "STORM TAMED! CALM SEAS 🌊";

    setTimeout(() => {
        window.open("https://ponsfamily.com", "_blank");
        setTimeout(() => {
            btn.classList.remove('storm-calmed');
            textSpan.innerHTML = originalText;
        }, 1000);
    }, 600);
}

// ==========================================================================
// 3. Botellas de la Comunidad de Telegram (Mensajes de Alta Mar)
// ==========================================================================
const COMMUNITY_COMMENTS = {
    es: [
        "¡Sin preventas eternas ni tokens para el equipo! 🔥",
        "¡Alas abiertas, de una para Uniswap al graduarnos! 🦜",
        "¡Transparencia total en Pons Family! ¡Zarpamos! 🏴‍☠️"
    ],
    en: [
        "No team tokens, 100% fair launch! Let's go! 🔥",
        "Wings wide open, straight to Uniswap graduation! 🦜",
        "Absolute transparency on Pons Family. We sail! 🏴‍橙"
    ]
};

function triggerTelegramClick(event) {
    event.preventDefault();
    
    const container = document.getElementById('beachMessageContainer');
    if (!container) return;

    container.innerHTML = "";
    
    // Obtiene los mensajes en base al idioma actual activo de tu web
    const messages = COMMUNITY_COMMENTS[currentLang] || COMMUNITY_COMMENTS['es'];

    messages.forEach((text, index) => {
        setTimeout(() => {
            const toast = document.createElement('div');
            toast.className = 'community-bottle-toast';
            toast.innerHTML = `<span class="toast-bottle-emoji">🍾</span><span class="toast-msg-text">${text}</span>`;
            container.appendChild(toast);
        }, index * 250);
    });

    setTimeout(() => {
        window.open("https://t.me", "_blank"); // Recuerda añadir aquí tu enlace real
        setTimeout(() => { container.innerHTML = ""; }, 1000);
    }, 1800);
}

// 4. Árbol de Merkle (Pulso de Bloques en X)
function triggerXClick(event) {
    event.preventDefault();
    const btn = document.getElementById('xBtn');
    if (btn.classList.contains('tree-connected')) return;

    btn.classList.add('tree-connected');
    const textSpan = btn.querySelector('.tree-btn-text');
    const originalText = textSpan.innerHTML;
    textSpan.innerHTML = currentLang === 'es' ? "¡NODO DE MERKLE VERIFICADO! 🌿" : "MERKLE NODE VERIFIED! 🌿";

    setTimeout(() => {
        window.open("https://x.com", "_blank");
        setTimeout(() => {
            btn.classList.remove('tree-connected');
            textSpan.innerHTML = originalText;
        }, 1000);
    }, 600);
}

// ==========================================================================
// FAQ ACORDEÓN INTERACTIVO DE CONTROL DE CORTINA
// ==========================================================================
function toggleFaq(button) {
    const currentItem = button.parentElement;
    const isActive = currentItem.classList.contains('faq-active');

    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('faq-active');
    });

    if (!isActive) {
        currentItem.classList.add('faq-active');
    }
}

// ==========================================================================
// MOTOR BLOCKCHAIN REAL WEB3 (LECTURA EN TIEMPO REAL RPC)
// ==========================================================================
async function initPonsRadarRealTime() {
    const ethRaisedElement = document.getElementById('ethRaised');
    const pericoFlyer = document.getElementById('pericoFlyer');
    const tokensLeftNumber = document.getElementById('tokensLeftNumber');
    
    if (!ethRaisedElement) return;

    try {
        const provider = new ethers.providers.JsonRpcProvider(TOKEN_DATA.rpcUrl);
        const balanceWei = await provider.getBalance(TOKEN_DATA.contractAddress);
        const realEthRaised = parseFloat(ethers.utils.formatEther(balanceWei));
        
        ethRaisedElement.innerHTML = currentLang === 'es' 
            ? `<strong>${realEthRaised.toFixed(4)} ETH</strong> degen inyectados en la curva`
            : `<strong>${realEthRaised.toFixed(4)} ETH</strong> injected into the curve`;
        
        const progressPercentage = (realEthRaised / TOKEN_DATA.targetEth) * 100;
        const plankPosition = 15 + (Math.min(progressPercentage, 100) * 0.6); 
        
        if (pericoFlyer) {
            pericoFlyer.style.left = `${plankPosition}%`; 
        }

        if (tokensLeftNumber) {
            const tokenPriceRatio = 1 - (realEthRaised / TOKEN_DATA.targetEth);
            const remainingTokens = Math.max(Math.floor(1000000000 * tokenPriceRatio), 0);
            tokensLeftNumber.innerText = remainingTokens.toLocaleString();
        }

    } catch (error) {
        console.error("Radar blockchain sin respuesta temporal del RPC:", error);
        ethRaisedElement.innerHTML = currentLang === 'es'
            ? `<strong>Radar en línea</strong> (Sincronizando Pons...)`
            : `<strong>Radar online</strong> (Syncing Pons...)`;
    }
}

// ==========================================================================
// INICIALIZADOR GLOBAL DOM
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.btn-idioma').forEach(button => {
        button.addEventListener('click', (e) => {
            const lang = e.target.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });

    changeLanguage(currentLang);

    initPonsRadarRealTime();
    setInterval(initPonsRadarRealTime, 30000);
});
