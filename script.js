// ==========================================================================
// CONFIGURACIÓN GLOBAL DEL TOKEN ($THND) EN LA ROBINHOOD CHAIN
// ==========================================================================
const TOKEN_DATA = {
    contractAddress: "0x54BF9EcF6b09E86DE19688E636a0368cc8844020",
    ponsUrl: "https://pons.family",
    rpcUrl: "https://robinhoodchain.com", // Nodo público DeFi
    targetEth: 4.2 // Meta inalterable de la curva de vinculación
};

// ==========================================================================
// INTERACTIVIDAD NATIVA (100% LIMPIA EN ESPAÑOL)
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    console.log("Radar de alta mar activado en Robinhood Chain. Suministro listo.");
});

// Función nativa para copiar el contrato oficial al portapapeles con un clic
function copyContract() {
    navigator.clipboard.writeText(TOKEN_DATA.contractAddress).then(() => {
        const copyBtn = document.querySelector(".btn-copy");
        if (copyBtn) {
            copyBtn.textContent = "¡Copiado con éxito! 🏴‍☠️";
            setTimeout(() => {
                copyBtn.textContent = "📋 Copiar Contrato";
            }, 2000);
        }
    }).catch(err => {
        console.error("Error al acceder al portapapeles en alta mar: ", err);
    });
}
