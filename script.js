function copyCA() {
    const textToCopy = document.getElementById('contract').innerText;
    
    navigator.clipboard.writeText(textToCopy).then(() => {
        // Alerta interactiva en el navegador
        alert('¡Contrato copiado al portapapeles, marinero! 🦜🏴‍☠️');
    }).catch(err => {
        console.error('Error al intentar copiar el contrato: ', err);
    });
}
