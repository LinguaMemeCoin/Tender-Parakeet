/* ==========================================================================
   TENDER PARAKEET ($THND) — SCRIPT.JS (MOTOR BILINGÜE E INTERACTIVIDAD)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    const smartContractAddress = "0x54BF9EcF6b09E86DE19688E636a0368cc8844020";
    const officialRpcUrl = "https://robinhood.com";
    let currentLang = localStorage.getItem("tp_lang") || "en";

    const notifAnchor = document.getElementById("notification-area");
    function showToast(message) {
        if (!notifAnchor) return;
        const toast = document.createElement("div");
        toast.className = "floating-notif-toast";
        toast.textContent = message;
        notifAnchor.appendChild(toast);
        setTimeout(() => {
            toast.style.opacity = "0";
            toast.style.transition = "opacity 0.4s ease";
            setTimeout(() => toast.remove(), 400);
        }, 4800);
    }

    function copyTextSafe(textToCopy, successMsg) {
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(textToCopy).then(() => showToast(successMsg));
        } else {
            const tempInput = document.createElement("input");
            tempInput.value = textToCopy;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand("copy");
            document.body.removeChild(tempInput);
            showToast(successMsg);
        }
    }

    // Botón Alerta ETH-RH (Red 4663)
    const btnEthInfo = document.getElementById("btn-eth-info");
    if (btnEthInfo) {
        btnEthInfo.addEventListener("click", () => {
            const msg = currentLang === "en"
                ? "⚠️ RH-ETH NOTICE (ID: 4663): Do NOT send Ethereum Mainnet ETH directly. Bridge pennies of ETH via Arbitrum One or Base to Robinhood Chain (Chain ID: 4663)."
                : "⚠️ AVISO ETH-RH (RED 4663): NO envíes ETH directo de Ethereum Mainnet. Cruza centavos de ETH por Arbitrum One o Base hacia Robinhood Chain (Chain ID: 4663).";
            showToast(msg);
        });
    }

    // Botón Copiar RPC
    const btnCopyRpc = document.getElementById("btn-copy-rpc");
    if (btnCopyRpc) {
        btnCopyRpc.addEventListener("click", () => {
            const msg = currentLang === "en"
                ? "📋 Official RPC URL copied to clipboard!"
                : "📋 ¡URL oficial de RPC copiada al portapapeles!";
            copyTextSafe(officialRpcUrl, msg);
        });
    }

    // Botón Copiar Contrato ($THND)
    const btnCopyCa = document.getElementById("btn-copy-ca");
    if (btnCopyCa) {
        btnCopyCa.addEventListener("click", () => {
            const msg = currentLang === "en"
                ? "📋 Contract 0x54BF...4020 copied! Always paste the contract address."
                : "📋 ¡Contrato 0x54BF...4020 copiado! Pega siempre la dirección exacta.";
            copyTextSafe(smartContractAddress, msg);
        });
    }

    // DATOS: 50 ALERTAS DE ALTA MAR (1–25 MONSTRUOS MARINOS + 26–50 ICEBERGS)
    const alertasData = [
        { type: "monster", en_q: "1. The Ghost Support", es_q: "1. El Soporte Fantasma", en_a: "No real support team will ever message you first via DM.", es_a: "Ningún soporte real te escribe primero por mensaje directo." },
        { type: "monster", en_q: "2. The Poisoned Gift", es_q: "2. El Regalo Envenenado", en_a: "Never touch or try to sell 'free' unknown tokens that appear uninvited in your wallet.", es_a: "No toques ni intentes vender tokens 'gratis' que aparecen solos en tu cartera." },
        { type: "monster", en_q: "3. The Evil Twin Clone", es_q: "3. El Clon Gemelo", en_a: "Always search by exact contract address (0x54BF...4020), never by token name or logo.", es_a: "Busca siempre por dirección de contrato (0x54BF...4020), nunca por nombre o logo." },
        { type: "monster", en_q: "4. The Hypnotic Clock", es_q: "4. El Reloj Hipnótico", en_a: "Countdown timers are designed to stop you from thinking before buying.", es_a: "Los contadores regresivos buscan que no pienses antes de comprar." },
        { type: "monster", en_q: "5. The Bot Choir", es_q: "5. El Coro de Bots", en_a: "50,000-member groups where you get banned immediately for asking real questions.", es_a: "Grupos de 50,000 miembros donde te banean por hacer preguntas reales." },
        { type: "monster", en_q: "6. The Cardboard Stamp", es_q: "6. El Sello de Cartón", en_a: "Paid audit PDFs that check the token template while leaving the money vault unaudited.", es_a: "PDFs de auditoría que revisan el token pero dejan sin auditar la bóveda del dinero." },
        { type: "monster", en_q: "7. The Mousetrap", es_q: "7. La Ratonera", en_a: "Contracts where the creator can pause selling or raise taxes to 99%.", es_a: "Contratos donde el creador puede pausar ventas o subir impuestos al 99%." },
        { type: "monster", en_q: "8. The VIP Whitelist", es_q: "8. La Lista Blanca VIP", en_a: "Private insider spots created so the founder's friends can dump on you at launch.", es_a: "Cupos privados para que los amigos del creador vendan sobre ti al abrir." },
        { type: "monster", en_q: "9. The Deceptive Bonus", es_q: "9. El Bono Engañoso", en_a: "'50% extra in presale' is pure dilution that crushes the price on launch day.", es_a: "'50% extra en preventa' es dilución pura que aplasta el precio al salir." },
        { type: "monster", en_q: "10. The Magic Yield", es_q: "10. El Rendimiento Mágico", en_a: "Distrust promises of fixed 10% annual dollar yields inside private websites.", es_a: "Desconfía de promesas de 10% anual fijo en dólares dentro de webs privadas." },
        { type: "monster", en_q: "11. The Infinite Printer", es_q: "11. La Impresora Infinita", en_a: "60%+ APY on a new token guarantees massive future sell pressure.", es_a: "60%+ de APY en un token nuevo es presión vendedora futura garantizada." },
        { type: "monster", en_q: "12. The Volume Mirage", es_q: "12. El Espejismo del Volumen", en_a: "Millions moving in minutes is usually a single wash-trading bot trading with itself.", es_a: "Millones moviéndose en minutos suele ser el mismo bot operando solo." },
        { type: "monster", en_q: "13. The Tier-1 Secret", es_q: "13. El Secreto Tier-1", en_a: "They promise secret listings on giant exchanges yet launch on their own closed website.", es_a: "Prometen listados secretos en exchanges gigantes pero lanzan en su propia web." },
        { type: "monster", en_q: "14. The Empty Pool", es_q: "14. La Piscina Vacía", en_a: "Liquidity below 60% allows just two sells to crash the price to zero.", es_a: "Liquidez menor al 60% permite que dos ventas hundan el precio a cero." },
        { type: "monster", en_q: "15. The Fake Rescuer", es_q: "15. El Falso Rescatista", en_a: "Nobody can rescue locked blockchain funds; anyone asking for money to unlock your balance scams you twice.", es_a: "Nadie puede rescatar fondos bloqueados en blockchain; quien pide dinero para liberar tu saldo te estafa dos veces." },
        { type: "monster", en_q: "16. The 20-Language Disguise", es_q: "16. El Disfraz de 20 Idiomas", en_a: "Broken translations on day one and paid press releases used to fake legitimacy.", es_a: "Traducciones rotas el día uno y prensa pagada para fingir legitimidad." },
        { type: "monster", en_q: "17. The Prophet of the Past", es_q: "17. El Profeta del Pasado", en_a: "Explaining red candles after the price already crashed is not analysis—it is storytelling.", es_a: "Explicar velas rojas después de que el precio cayó no es análisis, es contar historia." },
        { type: "monster", en_q: "18. The Signal Seller", es_q: "18. El Vendedor de Señales", en_a: "Anyone who wins every trade would never need to charge you $20 a month for a VIP group.", es_a: "Quien siempre gana no necesitaría cobrarte $20 al mes por un grupo VIP." },
        { type: "monster", en_q: "19. The Hidden Link", es_q: "19. El Enlace Oculto", en_a: "Recommendations secretly driven by hidden affiliate or referral commissions.", es_a: "Recomendaciones motivadas por comisiones de referido ocultas." },
        { type: "monster", en_q: "20. The Bought Influencer", es_q: "20. El Influencer Comprado", en_a: "Shills screaming 'guaranteed 1000x!' received free tokens before you did.", es_a: "Quienes gritan '¡x1000 seguro!' recibieron tokens gratis antes que tú." },
        { type: "monster", en_q: "21. The Hidden DEX Toll", es_q: "21. El Peaje Oculto del DEX", en_a: "Creators owning manual pools who charge 1% fees on every trade while you lose.", es_a: "Creadores dueños de pools manuales cobrando 1% de comisión sobre tus pérdidas." },
        { type: "monster", en_q: "22. The Eternal Vesting", es_q: "22. La Liberación Eterna", en_a: "Vesting excuses used to freeze your tokens while insiders sell at the top.", es_a: "Excusas de vesting para congelarte mientras ellos venden arriba." },
        { type: "monster", en_q: "23. The Slow Bleed", es_q: "23. El Desangrado Lento", en_a: "5% daily drops paired with empty promises to keep you buying the dip.", es_a: "Caídas del 5% diario con promesas vacías para que sigas comprando la bajada." },
        { type: "monster", en_q: "24. The Eternal Approval", es_q: "24. El Permiso Eterno", en_a: "Signing unlimited spending approvals that allow malicious contracts to drain your wallet months later.", es_a: "Firmar aprobaciones ilimitadas que vacían tu cartera meses después." },
        { type: "monster", en_q: "25. The Miracle Promise", es_q: "25. La Promesa Milagrosa", en_a: "Anything that sounds too good to be true is a trap waiting for your ship.", es_a: "Todo lo que suena demasiado bueno para ser verdad es una trampa esperando tu barco." },
        { type: "iceberg", en_q: "26. Sailing Without a Lifeboat", es_q: "26. Navegar sin Bote Salvavidas", en_a: "Using your main savings wallet to test new contracts instead of an isolated burner wallet.", es_a: "Usar tu billetera de ahorros para probar contratos nuevos." },
        { type: "iceberg", en_q: "27. The Cloud Screenshot", es_q: "27. La Captura en la Nube", en_a: "Saving your 12 recovery words in phone photos or messaging chats.", es_a: "Guardar tus 12 palabras en fotos o chats." },
        { type: "iceberg", en_q: "28. The 20% Slippage Trap", es_q: "28. El Antideslizamiento al 20%", en_a: "Leaving slippage at the 20% default instead of manually setting it to 4% minimum.", es_a: "Dejar el slippage por defecto en 20% en lugar de ajustarlo al 4%." },
        { type: "iceberg", en_q: "29. The Wrong Network", es_q: "29. La Red Equivocada", en_a: "Sending ETH via Ethereum Mainnet instead of bridged RH-ETH on Robinhood Chain (4663) sinks your coins forever.", es_a: "Enviar ETH por la red incorrecta en vez de ETH-RH (Red 4663) hunde tus monedas para siempre." },
        { type: "iceberg", en_q: "30. Skipping the Penny Test", es_q: "30. No Hacer la Prueba de los Centavos", en_a: "Sending your entire balance at once without running a small penny test first.", es_a: "Mandar todo de golpe sin probar primero con centavos." },
        { type: "iceberg", en_q: "31. Midnight FOMO", es_q: "31. El FOMO de Medianoche", en_a: "Buying a coin purely because it already pumped 500% today.", es_a: "Comprar una moneda solo porque ya subió 500% hoy." },
        { type: "iceberg", en_q: "32. Running Without Checking the Map", es_q: "32. Correr sin Mirar el Mapa", en_a: "Failing to triple-check the destination address before hitting send.", es_a: "No revisar 3 veces la dirección antes de enviar." },
        { type: "iceberg", en_q: "33. Paying More Gas Than the Treasure", es_q: "33. Pagar Gas Más Caro que el Tesoro", en_a: "If claiming costs more than the token is worth, let it go.", es_a: "Si reclamar cuesta más que el valor del token, déjalo ir." },
        { type: "iceberg", en_q: "34. Gambling Grocery Money", es_q: "34. Apostar el Dinero de la Comida", en_a: "Never use money needed for daily living expenses or paying debts.", es_a: "Nunca uses dinero necesario para vivir o pagar deudas." },
        { type: "iceberg", en_q: "35. Leaving Doors Wide Open", es_q: "35. Dejar Puertas Abiertas", en_a: "Failing to revoke old spending approvals on your burner wallet.", es_a: "No revocar permisos viejos de tu billetera desechable." },
        { type: "iceberg", en_q: "36. Trusting the Name, Not the Code", es_q: "36. Confiar en el Nombre, no en el Código", en_a: "Not opening The Periscope (Blockscout) to verify the smart contract.", es_a: "No abrir El Periscopio (Blockscout) para verificar el contrato." },
        { type: "iceberg", en_q: "37. Trading in a Rush", es_q: "37. Operar Apurado", en_a: "Rushing always ends in clicking the wrong button.", es_a: "Las prisas siempre terminan en un clic equivocado." },
        { type: "iceberg", en_q: "38. Buying on Neighbor's Tips", es_q: "38. Entrar por Consejos del Vecino", en_a: "When everyone is talking about a coin, the opportunity is already gone.", es_a: "Cuando todos hablan de una moneda, la oportunidad ya pasó." },
        { type: "iceberg", en_q: "39. Ignoring Total Supply", es_q: "39. No Entender el Suministro", en_a: "Thinking a coin is 'cheap' without checking how many trillions exist.", es_a: "Creer que algo es barato sin mirar cuántos trillones existen." },
        { type: "iceberg", en_q: "40. Falling in Love with a Chart", es_q: "40. Quedarse Enamorado de un Gráfico", en_a: "Pouring more money in out of pride after making a bad entry.", es_a: "Seguir metiendo dinero por orgullo tras un error." },
        { type: "iceberg", en_q: "41. Ignoring Liquidity", es_q: "41. Ignorar la Liquidez", en_a: "Buying without checking if there is enough liquidity to sell later.", es_a: "Comprar sin revisar si hay suficiente respaldo para vender después." },
        { type: "iceberg", en_q: "42. Deleting Wallet Without Backup", es_q: "42. Borrar la Cartera sin Anotar", en_a: "Uninstalling the app before writing down your 12 words or withdrawing funds.", es_a: "Eliminar la app antes de respaldar las 12 palabras o sacar el saldo." },
        { type: "iceberg", en_q: "43. Clicking Google Ads", es_q: "43. Hacer Clic en Anuncios de Google", en_a: "Entering fake sponsored phishing links at the top of search engines.", es_a: "Entrar a enlaces patrocinados falsos en buscadores." },
        { type: "iceberg", en_q: "44. Confusing Sub-Account with New Wallet", es_q: "44. Confundir Subcuenta con Cartera Nueva", en_a: "Using a sub-account on the same master seed instead of an isolated wallet.", es_a: "Usar la misma semilla maestra en vez de una billetera aislada." },
        { type: "iceberg", en_q: "45. Believing in Magic Candles", es_q: "45. Creer en Velas Mágicas", en_a: "Thinking drawn lines can predict small, volatile memecoin markets.", es_a: "Pensar que líneas dibujadas predicen mercados volátiles pequeños." },
        { type: "iceberg", en_q: "46. Underestimating Pennies", es_q: "46. Subestimar los Centavos", en_a: "Disrespecting small amounts of money that took real sweat to earn.", es_a: "No respetar el dinero pequeño que cuesta esfuerzo ganar." },
        { type: "iceberg", en_q: "47. Wanting to Get Rich in One Day", es_q: "47. Querer Hacerse Rico en un Día", en_a: "Chasing a quick 1000x is the fastest highway to zero.", es_a: "Buscar el x1000 rápido es el camino directo a cero." },
        { type: "iceberg", en_q: "48. Staying Silent Out of Embarrassment", es_q: "48. Callarse por Vergüenza", en_a: "Not asking questions out of fear of looking like a beginner.", es_a: "No preguntar por miedo a parecer novato." },
        { type: "iceberg", en_q: "49. Repeating the Same Mistake", es_q: "49. Repetir el Mismo Tropiezo", en_a: "Failing to write down the lessons learned from past losses.", es_a: "No anotar las lecciones aprendidas de errores pasados." },
        { type: "iceberg", en_q: "50. Forgetting the Real Treasure", es_q: "50. Olvidar el Verdadero Tesoro", en_a: "The highest yield of your life is real knowledge that nobody can ever steal.", es_a: "El mejor rendimiento de tu vida es el conocimiento que nadie te puede quitar." }
    ];

    // DATOS: LAS 50 SOMBRAS DEL PERICO TIERNO (MI TRAVESÍA DESDE HONDURAS)
    const sombrasData = [
        { cap_en: "🇭🇳 Chapter 1: Roots in Honduras & Value of Every Penny (01–10)", cap_es: "🇭🇳 Capítulo 1: Raíces en Honduras y el Valor de Cada Centavo (01–10)", icon: "🇭🇳", en_q: "01. Sweat Behind Every Dollar", es_q: "01. El Sudor Detrás de Cada Dólar", en_a: "In Honduras every dollar takes real sweat to earn; nobody here plays at throwing money out the window.", es_a: "En Honduras cada dólar cuesta sudor ganarlo; por eso aquí nadie juega a tirar dinero por la ventana." },
        { icon: "🇭🇳", en_q: "02. Starting with $0 Budget", es_q: "02. Empezar con $0 de Presupuesto", en_a: "Starting with a $0 budget is not an excuse—it is the best filter to keep opportunists away.", es_a: "Empezar con $0 de presupuesto no es una excusa, es el mejor filtro para alejar interesados." },
        { icon: "🇭🇳", en_q: "03. Loading Trucks & Working in a Bakery", es_q: "03. Cargar Camiones y Panadería", en_a: "When you have worked loading trucks or in a bakery, you know easy money does not exist.", es_a: "Cuando has trabajado cargando camiones o en panadería, sabes que el dinero fácil no existe." },
        { icon: "🇭🇳", en_q: "04. No Famous Last Names", es_q: "04. Sin Apellidos Famosos", en_a: "We were not born with connections or famous names—we were born with hunger to learn and refuse to be scammed.", es_a: "No nacimos con contactos ni apellidos famosos, nacimos con ganas de aprender y no dejarnos engañar." },
        { icon: "🇭🇳", en_q: "05. Defending Money Online", es_q: "05. Defender Nuestro Dinero en Internet", en_a: "In Latin America we were taught to work hard, yet nobody taught us how to defend our money online.", es_a: "En Latinoamérica nos enseñaron a trabajar duro, pero nadie nos enseñó a defender nuestro dinero en internet." },
        { icon: "🇭🇳", en_q: "06. Knowing Where Not to Land", es_q: "06. Saber Dónde No Aterrizar", en_a: "A parakeet does not need to be an imperial eagle to fly high—it just needs to know where not to land.", es_a: "Un perico no necesita ser águila imperial para volar alto; solo necesita saber dónde no aterrizar." },
        { icon: "🇭🇳", en_q: "07. Headquarters of Common Sense", es_q: "07. Cuartel de Sentido Común", en_a: "We have no luxury offices or funds: our headquarters is a computer, internet, and common sense.", es_a: "No tenemos oficinas de lujo ni fondos: nuestro cuartel es una computadora, internet y sentido común." },
        { icon: "🇭🇳", en_q: "08. Ingenuity of the Americas", es_q: "08. Ingenio de América en Web3", en_a: "The cultures of the Americas carry a history of resilience; here we apply that ingenuity to Web3.", es_a: "Las culturas de América tienen historia de resistencia; aquí aplicamos ese ingenio en Web3." },
        { icon: "🇭🇳", en_q: "09. Starting with $2 Dollars", es_q: "09. Empezar con $2 Dólares", en_a: "Nobody is looked down on here for starting with $2; anyone who disrespects pennies does not deserve dollars.", es_a: "Aquí no se discrimina a nadie por empezar con $2 dólares; quien no respeta los centavos no merece dólares." },
        { icon: "🇭🇳", en_q: "10. Honest Parakeet Over Shark in a Suit", es_q: "10. Perico Honesto Antes que Tiburón", en_a: "We prefer being an honest parakeet in Honduras over a scammer shark in a suit.", es_a: "Preferimos ser un perico honesto en Honduras que un tiburón estafador en traje." },
        { cap_en: "🖥️ Chapter 2: Tech Nostalgia, Old PCs & Learning the Hard Way (11–20)", cap_es: "🖥️ Capítulo 2: Nostalgia Tech, PC Viejas y Aprender a Golpes (11–20)", icon: "🖥️", en_q: "11. Pentium 3 & CRT Monitor", es_q: "11. Pentium 3 y Monitor de Tubo", en_a: "Anyone who learned computing on a Pentium 3 with a CRT monitor and 1MB internet fears no code.", es_a: "Quien aprendió informática en una Pentium 3 con pantalla de tubo y 1MB de internet no le teme a ningún código." },
        { icon: "🖥️", en_q: "12. Deleting System32 Out of Curiosity", es_q: "12. Borrar System32 por Curiosidad", en_a: "Deleting System32 out of curiosity and having to fix the PC myself was my first tech master's degree.", es_a: "Borrar System32 por curiosidad y tener que arreglar la PC a la fuerza fue mi primer máster en tecnología." },
        { icon: "🖥️", en_q: "13. Saving for 5 Years", es_q: "13. Ahorrar 5 Años en Casa", en_a: "Saving for 5 years while giving my paycheck at home and keeping just enough for a soda taught me patience.", es_a: "Ahorrar 5 años dando el sueldo en casa y quedándome solo para una soda me enseñó lo que vale la paciencia." },
        { icon: "🖥️", en_q: "14. Counting Every Penny at the Cybercafé", es_q: "14. Calcular Cada Centavo en el Cyber", en_a: "Sneaking into town to play at the cybercafé teaches you to calculate every penny before spending it.", es_a: "Escaparse a la ciudad para jugar en el cyber te enseña a calcular cada centavo antes de gastarlo." },
        { icon: "🖥️", en_q: "15. Calculator-Screen Phone for 5 Years", es_q: "15. Celular de Pantalla de Calculadora", en_a: "A calculator-screen phone that lasted 5 years taught me that simple and functional beats flashy.", es_a: "Un celular de pantalla de calculadora que duró 5 años me enseñó que lo sencillo y funcional le gana a lo bonito." },
        { icon: "🖥️", en_q: "16. Rebuilding After Mistakes", es_q: "16. Equivocarse y Volver a Armar", en_a: "I did not need an expensive institute; the best school was making mistakes and rebuilding from scratch.", es_a: "No necesité un instituto caro; la mejor escuela fue equivocarme y volver a armar." },
        { icon: "🖥️", en_q: "17. Burning a Motherboard", es_q: "17. Quemar una Motherboard", en_a: "Anyone who has fried a motherboard from plugging a cable wrong knows why we insist on checking 3 times.", es_a: "Quien ha quemado una motherboard por conectar mal un cable sabe por qué insistimos en revisar 3 veces." },
        { icon: "🖥️", en_q: "18. Tech for Everyday People", es_q: "18. Tecnología para la Gente Común", en_a: "The best technology is the kind that serves everyday people without charging them a fortune.", es_a: "La mejor tecnología es la que le sirve a la gente común sin cobrarle fortunas." },
        { icon: "🖥️", en_q: "19. Refusing to Sell Out", es_q: "19. Nunca Vendernos al Engaño", en_a: "We did not want factory jobs for life, nor did we sell out to the first digital scammer.", es_a: "No queríamos ser empleados de maquila toda la vida, pero tampoco nos vendimos al primer estafador digital." },
        { icon: "🖥️", en_q: "20. Empirical Knowledge Over Diplomas", es_q: "20. Conocimiento Empírico sobre Diplomas", en_a: "Empirical knowledge—what you learn by getting your hands dirty—is worth more than a thousand diplomas.", es_a: "El conocimiento empírico —el que aprendes metiendo las manos— vale más que mil diplomas." },
        { cap_en: "📉 Chapter 3: My Stumbles in Crypto (21–30)", cap_es: "📉 Capítulo 3: Mis Tropiezos en Cripto (21–30)", icon: "📉", en_q: "21. First Tuition at FOMO University", es_q: "21. Primera Matrícula en la Universidad del FOMO", en_a: "Buying penny tokens thinking 'one of them has to moon' was my first tuition at FOMO University.", es_a: "Comprar tokens de centavos pensando 'alguno tiene que pegar' fue mi primera matrícula en la universidad del FOMO." },
        { icon: "📉", en_q: "22. Buying High, Selling Low", es_q: "22. Comprar Arriba y Vender Abajo", en_a: "Buying the top out of euphoria and selling the bottom in panic: every rookie's sport before waking up.", es_a: "Comprar arriba por euforia y vender abajo por pánico: el deporte de todo novato antes de despertar." },
        { icon: "📉", en_q: "23. Watching a 'Cheap' Token Bleed to Zero", es_q: "23. Ver Caer un Token Barato a Cero", en_a: "Watching a 'cheap' token drop 20% every week until hitting zero cures blind enthusiasm fast.", es_a: "Ver cómo un token 'barato' cae un 20% cada semana hasta llegar a cero te cura el entusiasmo rápido." },
        { icon: "📉", en_q: "24. Saying No to 50 Bitcoins in 2011", es_q: "24. Decirle No a 50 Bitcoins en 2011", en_a: "Turning down 50 Bitcoins in 2011 out of fear of a scam teaches you to always research deeply.", es_a: "Decirle que no a 50 Bitcoins en 2011 por miedo a una estafa te enseña a investigar siempre." },
        { icon: "📉", en_q: "25. Candlesticks Sweeping Your Stop", es_q: "25. Velas Japonesas Barriendo tu Stop", en_a: "Studying Japanese candlesticks only to watch the market sweep your stop in 5 minutes puts your feet back on the ground.", es_a: "Estudiar velas japonesas y ver cómo el mercado barre tu stop en 5 minutos te devuelve los pies a la tierra." },
        { icon: "📉", en_q: "26. The $100 XRP Market Cap Math", es_q: "26. La Matemática de $100 por un XRP", en_a: "Realizing that $100 per XRP requires more money than Apple and Microsoft combined vaccinates you against false prophets.", es_a: "Entender que $100 por un XRP exige más dinero que Apple y Microsoft juntos te vacuna contra falsos profetas." },
        { icon: "📉", en_q: "27. Losing Money in Latam Hurts Twice", es_q: "27. Perder Dinero en Latam Duele el Doble", en_a: "Losing money while living in Latin America hurts twice as hard because you know how many hours of sweat it took to save.", es_a: "Perder dinero viviendo en Latam duele el doble, porque sabes cuántas horas de trabajo costó juntarlo." },
        { icon: "📉", en_q: "28. Getting Banned for Basic Questions", es_q: "28. Bloqueado por Hacer Preguntas Básicas", en_a: "Asking basic questions in crypto groups and getting instantly blocked proved to me that something smelled rotten.", es_a: "Hacer preguntas básicas en grupos cripto y que te bloqueen al instante me demostró que algo olía mal." },
        { icon: "📉", en_q: "29. Experience vs. Real Wisdom", es_q: "29. Experiencia vs. Sabiduría Real", en_a: "Experience is not always wisdom; sometimes it just means making old mistakes earlier than newcomers.", es_a: "La experiencia no siempre es sabiduría; a veces solo es haber conocido errores viejos antes que los nuevos." },
        { icon: "📉", en_q: "30. Turning Scars into Written Pages", es_q: "30. Convertir Golpes en Páginas Escritas", en_a: "Every market scar became a written page so others do not have to pay the exact same price.", es_a: "Cada golpe en el mercado se convirtió en una página escrita para que otros no paguen el mismo precio." },
        { cap_en: "⚓ Chapter 4: Birth of the Parakeet & The War Against Hype (31–40)", cap_es: "⚓ Capítulo 4: El Nacimiento del Perico y la Batalla contra el Humo (31–40)", icon: "⚓", en_q: "31. September Launch Rookie Mistake", es_q: "31. El Error de Novato en Septiembre", en_a: "In September 2026 we launched the contract on Pons making the rookie mistake of using FOMO language; today we own it openly.", es_a: "En septiembre de 2026 lanzamos el contrato en Pons cometiendo el error de novato de usar lenguaje FOMO; hoy lo contamos sin vergüenza." },
        { icon: "⚓", en_q: "32. Hype Builds Nothing Real", es_q: "32. El Humo No Construye Nada Real", en_a: "The token did not pump because hype builds nothing real, and that was the best lesson to change direction.", es_a: "El token no levantó porque el humo no construye comunidad real, y esa fue la mejor lección para cambiar de rumbo." },
        { icon: "⚓", en_q: "33. Saturated by Bot Farms on X", es_q: "33. Saturados por Granjas de Bots en X", en_a: "We tried educating on X with a $0 budget and got saturated by bot farms and banned for speaking truths.", es_a: "Fuimos a intentar educar en X con presupuesto $0 y fuimos saturados por granjas de bots y baneados por decir verdades." },
        { icon: "⚓", en_q: "34. Refusing Insider Token Handouts", es_q: "34. No Dar Control a Desconocidos", en_a: "Learning never to hand real control to strangers sliding into DMs asking for free tokens saved the project.", es_a: "Aprender a no darle control real a ningún desconocido que llega pidiendo tokens por privado salvó el proyecto." },
        { icon: "⚓", en_q: "35. Finding Real Readers on Binance Square", es_q: "35. Lectores Reales en Binance Square", en_a: "We left X without looking back because our real articles in The Clinic (Binance Square) proved people still read the truth.", es_a: "Dejamos X sin mirar atrás porque nuestros artículos reales en La Consulta (Binance Square) demostraron que la gente sí lee la verdad." },
        { icon: "⚓", en_q: "36. Moving to Farcaster", es_q: "36. Mudarnos a Farcaster", en_a: "We moved to The Apothecary (Farcaster) because we prefer a decentralized, human harbor over a spam-filled algorithm.", es_a: "Nos mudamos a El Boticario (Farcaster) porque preferimos un puerto descentralizado y humano antes que un algoritmo lleno de spam." },
        { icon: "⚓", en_q: "37. Why Robinhood Chain (ID: 4663)", es_q: "37. Por Qué Robinhood Chain (Red 4663)", en_a: "We chose The Crypto Hospital (Robinhood Chain) because it allows anyone in Latin America to practice spending pennies.", es_a: "Elegimos El Hospital Cripto (Robinhood Chain) porque es una red donde un usuario de Latinoamérica puede practicar gastando centavos." },
        { icon: "⚓", en_q: "38. Zero Referral Links", es_q: "38. Cero Enlaces de Referido", en_a: "We never use referral links because we want you to know we recommend tools for safety, never for kickbacks.", es_a: "No usamos enlaces de referido porque quiero que sepas que recomiendo herramientas por seguridad, no por comisión." },
        { icon: "⚓", en_q: "39. No Paid Signals or VIP Groups", es_q: "39. Sin Señales ni Grupos VIP", en_a: "We do not sell signals or VIP groups because charging people to guess goes against our ethics.", es_a: "No vendemos señales ni grupos VIP porque cobrar por adivinar no va con nuestra ética." },
        { icon: "⚓", en_q: "40. The Alarm When Sharks Are Near", es_q: "40. La Alarma Cuando Hay Tiburones", en_a: "The Tender Parakeet was not born to be king of memecoins—it was born to sound the alarm when sharks are near.", es_a: "El Perico Tierno no nació para ser rey de las memecoins, nació para ser la alarma cuando hay tiburones cerca." },
        { cap_en: "🧭 Chapter 5: The Future Step by Step (41–50)", cap_es: "🧭 Capítulo 5: El Futuro Paso a Paso (41–50)", icon: "🧭", en_q: "41. 10 Contract Auditors Over 1,000 Blind Buyers", es_q: "41. 10 Auditores Antes que 1,000 a Ciegas", en_a: "We have no rush to fill a curve 100%; we prefer 10 people who know how to audit a contract over 1,000 buying blind.", es_a: "No tenemos prisa por llenar una curva al 100%; preferimos 10 personas que sepan auditar un contrato que 1,000 comprando a ciegas." },
        { icon: "🧭", en_q: "42. Unofficial Mascot Earned by Trust", es_q: "42. Mascota No Oficial por Cariño Real", en_a: "If one day we become the unofficial mascot of Robinhood Chain, it will be by people's affection and never paid marketing.", es_a: "Si algún día somos la mascota no oficial de Robinhood Chain, será por cariño de la gente y nunca por marketing pagado." },
        { icon: "🧭", en_q: "43. Transparent 3% Creator Fee", es_q: "43. Comisión Transparente del 3%", en_a: "The 3% ETH creator fee is transparent: it sustains real educational work and allocates at least half to milestone burns.", es_a: "La comisión del 3% en ETH es transparente: sostiene el trabajo real y destina al menos la mitad a quemas por hitos comunitarios." },
        { icon: "🧭", en_q: "44. Never Banned for Beginner Questions", es_q: "44. Nadie Bloqueado por Preguntar", en_a: "Nobody here will ever block you for asking a beginner question; every single one of us started from zero.", es_a: "Aquí nadie te va a bloquear por hacer una pregunta de principiante; todos empezamos desde cero." },
        { icon: "🧭", en_q: "45. Our Greatest Pride", es_q: "45. Nuestro Mayor Orgullo", en_a: "Our greatest pride is hearing someone say: 'Thanks to what I read here, I avoided getting my wallet drained.'", es_a: "Nuestro mayor orgullo es que alguien nos diga: 'Gracias a lo que leí aquí, evité que me vaciaran la cartera'." },
        { icon: "🧭", en_q: "46. A Multilingual Community Across the Americas", es_q: "46. Comunidad Multilengua en Toda América", en_a: "We want a multilingual community where all voices of the Americas understand each other without barriers.", es_a: "Queremos una comunidad multilengua donde todas las voces de América se entiendan sin barreras." },
        { icon: "🧭", en_q: "47. One Honest Core Over Million-Dollar Agencies", es_q: "47. Un Mononúcleo Honesto desde Honduras", en_a: "One single core working honestly from Honduras can make more positive noise than an agency with millions.", es_a: "Un mononúcleo trabajando desde Honduras con honestidad puede hacer más ruido positivo que una agencia con millones." },
        { icon: "🧭", en_q: "48. Make Mistakes Only with Pennies", es_q: "48. Equivócate Solo con Centavos", en_a: "If you are going to make mistakes in Web3, make them in a burner wallet with pennies—never with your savings.", es_a: "Si te vas a equivocar en Web3, equivócate en una billetera desechable con centavos, nunca con tus ahorros." },
        { icon: "🧭", en_q: "49. Still Learning Every Day Together", es_q: "49. Seguimos Aprendiendo Cada Día Juntos", en_a: "We keep learning every day alongside you; nobody here pretends to be a guru or own the truth.", es_a: "Seguimos aprendiendo cada día junto a ustedes; aquí nadie se cree gurú ni dueño de la verdad." },
        { icon: "🧭", en_q: "50. The Journey of the Tender Parakeet", es_q: "50. La Travesía del Perico Tierno", en_a: "This is the journey of the Tender Parakeet: born in Honduras with $0, powered by truth, and open to everyone willing to learn.", es_a: "Esta es la travesía del Perico Tierno: nacida en Honduras con $0, impulsada por la verdad y abierta para todo el que quiera aprender." }
    ];

    function renderAccordionGrid(containerId, itemsArray, isAlertsSection) {
        const grid = document.getElementById(containerId);
        if (!grid) return;

        itemsArray.forEach((item, index) => {
            if (isAlertsSection && index === 0) {
                const divMonster = document.createElement("div");
                divMonster.className = "capitulo-divider";
                divMonster.setAttribute("data-translate", "");
                divMonster.setAttribute("data-en", "🐙 THE 25 SEA MONSTERS (EXTERNAL TRAPS THAT ATTACK YOU)");
                divMonster.setAttribute("data-es", "🐙 LOS 25 MONSTRUOS MARINOS (TRAMPAS EXTERNAS QUE TE ATACAN)");
                divMonster.textContent = currentLang === "en" ? divMonster.getAttribute("data-en") : divMonster.getAttribute("data-es");
                grid.appendChild(divMonster);
            }
            if (isAlertsSection && index === 25) {
                const divIceberg = document.createElement("div");
                divIceberg.className = "capitulo-divider";
                divIceberg.setAttribute("data-translate", "");
                divIceberg.setAttribute("data-en", "🧊 THE 25 ICEBERGS (USER MISTAKES THAT SINK YOUR SHIP)");
                divIceberg.setAttribute("data-es", "🧊 LOS 25 ICEBERGS (ERRORES PROPIOS QUE HUNDEN TU BARCO)");
                divIceberg.textContent = currentLang === "en" ? divIceberg.getAttribute("data-en") : divIceberg.getAttribute("data-es");
                grid.appendChild(divIceberg);
            }
            if (!isAlertsSection && item.cap_en) {
                const capDiv = document.createElement("div");
                capDiv.className = "capitulo-divider";
                capDiv.setAttribute("data-translate", "");
                capDiv.setAttribute("data-en", item.cap_en);
                capDiv.setAttribute("data-es", item.cap_es);
                capDiv.textContent = currentLang === "en" ? item.cap_en : item.cap_es;
                grid.appendChild(capDiv);
            }

            const box = document.createElement("div");
            box.className = "faq-interactive-box";

            const header = document.createElement("div");
            header.className = "faq-trigger-header";

            const iconSpan = document.createElement("span");
            iconSpan.className = "faq-indicator-icon";
            iconSpan.textContent = isAlertsSection ? (item.type === "monster" ? "🐙" : "🧊") : item.icon;

            const qSpan = document.createElement("span");
            qSpan.setAttribute("data-translate", "");
            qSpan.setAttribute("data-en", item.en_q);
            qSpan.setAttribute("data-es", item.es_q);
            qSpan.textContent = currentLang === "en" ? item.en_q : item.es_q;

            header.appendChild(iconSpan);
            header.appendChild(qSpan);

            const body = document.createElement("div");
            body.className = "faq-collapsible-body";

            const ansContent = document.createElement("div");
            ansContent.className = "faq-answer-content";
            ansContent.setAttribute("data-translate", "");
            ansContent.setAttribute("data-en", item.en_a);
            ansContent.setAttribute("data-es", item.es_a);
            ansContent.textContent = currentLang === "en" ? item.en_a : item.es_a;

            body.appendChild(ansContent);
            box.appendChild(header);
            box.appendChild(body);
            grid.appendChild(box);

            header.addEventListener("click", () => {
                const isOpen = box.classList.contains("faq-active");
                grid.querySelectorAll(".faq-interactive-box").forEach((otherBox) => {
                    otherBox.classList.remove("faq-active");
                    const otherBody = otherBox.querySelector(".faq-collapsible-body");
                    if (otherBody) otherBody.style.maxHeight = null;
                });
                if (!isOpen) {
                    box.classList.add("faq-active");
                    body.style.maxHeight = body.scrollHeight + "px";
                }
            });
        });
    }

    renderAccordionGrid("alertas-faq-grid", alertasData, true);
    renderAccordionGrid("sombras-faq-grid", sombrasData, false);

    // MOTOR DE TRADUCCIÓN BILINGÜE INTEGRAL (EN / ES)
    const langSwitcher = document.getElementById("lang-switcher");
    const langLabel = document.getElementById("lang-label");

    function applyLanguage(lang) {
        document.documentElement.lang = lang;
        if (langLabel) langLabel.textContent = lang.toUpperCase();

        document.querySelectorAll("[data-translate]").forEach((el) => {
            const translation = el.getAttribute(`data-${lang}`);
            if (translation) {
                if (translation.includes("<strong>")) {
                    el.innerHTML = translation;
                } else {
                    el.textContent = translation;
                }
            }
        });

        document.querySelectorAll(".faq-active .faq-collapsible-body").forEach((openBody) => {
            openBody.style.maxHeight = openBody.scrollHeight + "px";
        });
    }

    applyLanguage(currentLang);

    if (langSwitcher) {
        langSwitcher.addEventListener("click", () => {
            currentLang = currentLang === "en" ? "es" : "en";
            localStorage.setItem("tp_lang", currentLang);
            applyLanguage(currentLang);
        });
    }
});
