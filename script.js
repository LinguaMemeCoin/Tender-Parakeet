// ==========================================================================
// CONFIGURACIÓN GLOBAL DEL TOKEN (\$THND) EN LA ROBINHOOD CHAIN
// ==========================================================================
const TOKEN_DATA = {
    contractAddress: "0x54BF9EcF6b09E86DE19688E636a0368cc8844020",
    ponsUrl: "https://ponsfamily.com",
    rpcUrl: "https://robinhoodchain.com", // Nodo público para consulta Web3
    targetEth: 4.2 // Meta inalterable de la curva de vinculación
};

// Variable interna fija para el control inicial de texto del radar
const RADAR_TEXTS = {
    inyectados: "degen inyectados en la curva",
    sincronizando: "Radar en línea (Sincronizando Pons...)"
};

// ==========================================================================
// LOGICA INTERACTIVA DE LAS TARJETAS (CRYPTO DECK GRID)
// ==========================================================================

// 1. El Cofre del Tesoro (Copia Segura de CA en la misma página)
function openAndCopyChest() {
    const contractText = TOKEN_DATA.contractAddress;
    const container = document.getElementById('chestContainer');
    const emoji = document.getElementById('chestEmoji');
    const label = document.getElementById('chestLabel');
    const badge = document.getElementById('chestBadge');

    navigator.clipboard.writeText(contractText).then(() => {
        emoji.innerText = "🔓";
        container.classList.add('chest-open-glow');
        label.innerText = "¡Copiado con éxito! 🏴‍☠️";
        if (badge) badge.innerText = "¡COPIADO!";

        setTimeout(() => {
            emoji.innerText = "🔒";
            container.classList.remove('chest-open-glow');
            label.innerText = "Cofre del Botín";
            if (badge) badge.innerText = "CERRADO";
        }, 2500);
    }).catch(err => console.error('Error al abrir el cofre y copiar el CA:', err));
}

// 2. Tormenta Marina de Pons (Abre Compra Real en Pestaña Nueva - _blank)
function triggerStormClick(event) {
    event.preventDefault();
    const btn = document.getElementById('stormBtn');
    if (!btn || btn.classList.contains('storm-calmed')) return;

    btn.classList.add('storm-calmed');
    const textSpan = btn.querySelector('.storm-btn-text');
    const originalText = textSpan.innerHTML;

    textSpan.innerHTML = "¡TORMENTA DOMADA! MAR CALMO 🌊";

    setTimeout(() => {
        // Abre la preventa de Pons Launchpad estrictamente en una nueva pestaña para comodidad del usuario
        window.open("https://ponsfamily.com", "_blank");
        
        setTimeout(() => {
            btn.classList.remove('storm-calmed');
            textSpan.innerHTML = originalText;
        }, 1000);
    }, 600);
}

// 3. Botellas de la Comunidad de Telegram (Mensajes de Alta Mar en Pestaña Nueva - _blank)
const COMMUNITY_COMMENTS = [
    "¡Sin preventas eternas ni tokens para el equipo! 🔥",
    "¡Alas abiertas, de una para Uniswap al graduarnos! 🦜",
    "¡Transparencia total en Pons Family! ¡Zarpamos! 🏴‍☠️"
];

function triggerTelegramClick(event) {
    event.preventDefault();
    
    const container = document.getElementById('beachMessageContainer');
    if (!container) return;

    container.innerHTML = "";

    // Lanza las 3 notificaciones flotantes asíncronas consecutivas en español en la pantalla
    COMMUNITY_COMMENTS.forEach((text, index) => {
        setTimeout(() => {
            const toast = document.createElement('div');
            toast.className = 'community-bottle-toast';
            toast.innerHTML = `<span class="toast-bottle-emoji">🍾</span><span class="toast-msg-text">${text}</span>`;
            container.appendChild(toast);
        }, index * 250);
    });

    // Abre el canal oficial de Telegram estrictamente en una nueva pestaña a los 1.8 segundos
    setTimeout(() => {
        window.open("https://t.me", "_blank");
        setTimeout(() => { container.innerHTML = ""; }, 1000);
    }, 1800);
}

// 4. Árbol de Merkle (Pulso de Bloques en X en Pestaña Nueva - _blank)
function triggerXClick(event) {
    event.preventDefault();
    const btn = document.getElementById('xBtn');
    if (btn.classList.contains('tree-connected')) return;

    btn.classList.add('tree-connected');
    const textSpan = btn.querySelector('.tree-btn-text');
    const originalText = textSpan.innerHTML;
    textSpan.innerHTML = "¡NODO DE MERKLE VERIFICADO! 🌿";

    setTimeout(() => {
        // Abre la cuenta oficial en X estrictamente en una nueva pestaña para comodidad del tripulante
        window.open("https://x.com", "_blank");
        setTimeout(() => {
            btn.classList.remove('tree-connected');
            textSpan.innerHTML = originalText;
        }, 1000);
    }, 600);
}

// ==========================================================================
// FAQ ACORDEÓN INTERACTIVO DE CONTROL DE CORTINA (EFECTO BOTELLAS DENTRO DE LA WEB)
// ==========================================================================
function toggleFaq(button) {
    const currentItem = button.parentElement;
    const isActive = currentItem.classList.contains('faq-active');

    // Cierra de forma masiva las otras botellas FAQ abiertas para mantener el orden y la comodidad en la página
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('faq-active');
    });

    // Abre la botella correspondiente dentro de la misma página si no estaba activa
    if (!isActive) {
        currentItem.classList.add('faq-active');
    }
}

// ==========================================================================
// MOTOR BLOCKCHAIN REAL WEB3 (LECTURA RPC EN TIEMPO REAL - PORCENTAJES FIJOS 25%)
// ==========================================================================
async function initPonsRadarRealTime() {
    const ethRaisedElement = document.getElementById('ethRaised');
    const pericoFlyer = document.getElementById('pericoFlyer');
    const percentageDisplay = document.getElementById('percentageDisplay');
    
    if (!ethRaisedElement) return;

    try {
        const provider = new ethers.providers.JsonRpcProvider(TOKEN_DATA.rpcUrl);
        const balanceWei = await provider.getBalance(TOKEN_DATA.contractAddress);
        const realEthRaised = parseFloat(ethers.utils.formatEther(balanceWei));
        
        ethRaisedElement.innerHTML = `<strong>${realEthRaised.toFixed(4)} ETH</strong> ${RADAR_TEXTS.inyectados}`;
        
        // Calcula el porcentaje real acumulado en la blockchain
        const rawPercentage = (realEthRaised / TOKEN_DATA.targetEth) * 100;
        
        // Lógica de saltos estrictos de 25% en 25% ordenada por el capitán
        let fixedPercentage = 0;
        if (rawPercentage >= 100) {
            fixedPercentage = 100;
        } else if (rawPercentage >= 75) {
            fixedPercentage = 75;
        } else if (rawPercentage >= 50) {
            fixedPercentage = 50;
        } else if (rawPercentage >= 25) {
            fixedPercentage = 25;
        } else {
            fixedPercentage = 0;
        }

        // Renderiza el indicador de porcentaje fijo impreso en texto en la interfaz
        if (percentageDisplay) {
            percentageDisplay.innerText = `${fixedPercentage}%`;
        }
        
        // Controla la posición física del perico verde monarca en la plancha CSS basado en el porcentaje fijo (Rango: 15% a 75%)
        const plankPosition = 15 + (fixedPercentage * 0.6); 
        if (pericoFlyer) {
            pericoFlyer.style.left = `${plankPosition}%`; 
        }

    } catch (error) {
        console.error("Radar blockchain sin respuesta temporal del nodo RPC:", error);
        ethRaisedElement.innerHTML = `<strong>${RADAR_TEXTS.sincronizando}</strong>`;
    }
}

// ==========================================================================
// INICIALIZADOR GLOBAL DOM
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    // Lanza el escáner blockchain Web3 en el primer segundo
    initPonsRadarRealTime();
    
    // Configura el ciclo automático de sincronización en tiempo real cada 30 segundos exactos
    setInterval(initPonsRadarRealTime, 30000);
});
