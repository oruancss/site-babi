function digitarTexto(texto, elementoId, delay = 100, pausaFinal = 500) {
    let index = 0;

    function digitar() {
        if (index < texto.length) {
            document.getElementById(elementoId).textContent += texto.charAt(index);
            index++;
            setTimeout(digitar, delay);
        }
    }

    // Inicia a digitação
    digitar();

    // Aguarda até o texto ser digitado completamente
    setTimeout(() => {
        if (elementoId === "texto-quarto" || elementoId === "texto-quinto" || elementoId === "texto-sexto") {
            document.getElementById("texto-principal").textContent = "";
        }
    }, texto.length * delay + pausaFinal);
}

// Definindo os textos
const textoPrincipal = "Oii amor, tudo bem com você? ❤️";
const textoSecundario = "Aposto que sim!";
const textoTerceiro = "Você provavelmente não esperava que eu ia fazer algo assim, sei disso.";
const textoQuarto = "Eu só queria te homenagear de uma forma diferente, e como eu sou um programador, por que não usar disso né?";
const textoQuinto = "Enfim, saiba que eu te amo muitãoo, parabéns pelo seu aniversário, e eu quero te surpreender em todos eles 😘❤️";
const textoSexto = "Pra finalizar essa pequena homenagem, quero dedicar uma música pra você (não é a nossa) hehe";

// Iniciando a digitação dos textos
digitarTexto(textoPrincipal, "texto-principal", 100, 500);
setTimeout(() => digitarTexto(textoSecundario, "texto-secundario", 100), (textoPrincipal.length * 100) + 1000);
setTimeout(() => digitarTexto(textoTerceiro, "texto-terceiro", 100), (textoPrincipal.length * 100) + (textoSecundario.length * 100) + 2000);
setTimeout(() => {
    document.getElementById("texto-principal").textContent = ""; 
    digitarTexto(textoQuarto, "texto-principal", 100);
}, (textoPrincipal.length * 100) + (textoSecundario.length * 100) + (textoTerceiro.length * 100) + 3000);
setTimeout(() => {
    document.getElementById("texto-secundario").textContent = ""; 
    digitarTexto(textoQuinto, "texto-secundario", 100);
}, (textoPrincipal.length * 100) + (textoSecundario.length * 100) + (textoTerceiro.length * 100) + (textoQuarto.length * 100) + 4000);
setTimeout(() => {
    document.getElementById("texto-terceiro").textContent = ""; 
    digitarTexto(textoSexto, "texto-terceiro", 100);
}, (textoPrincipal.length * 100) + (textoSecundario.length * 100) + (textoTerceiro.length * 100) + (textoQuarto.length * 100) + (textoQuinto.length * 100) + 4000);

// Após o sexto texto, limpar tudo e exibir o vídeo
setTimeout(() => {
    document.getElementById("texto-principal").textContent = "";
    document.getElementById("texto-secundario").textContent = "";
    document.getElementById("texto-terceiro").textContent = "";
    
    // Exibir o vídeo
    document.getElementById("video-container").style.display = "block";
}, (textoPrincipal.length * 100) + (textoSecundario.length * 100) + (textoTerceiro.length * 100) + (textoQuarto.length * 100) + (textoQuinto.length * 100) + (textoSexto.length * 100) + 8000); // 5000 ms adicionados
