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

    // Aguarda até o texto ser digitado completamente e, em seguida, limpa após uma pausa
    return new Promise((resolve) => {
        setTimeout(() => {
            setTimeout(() => {
                document.getElementById(elementoId).textContent = "";
                resolve();
            }, 5000); // 5 segundos para limpar
        }, texto.length * delay + pausaFinal);
    });
}

// Definindo os textos
const textos = [
    { texto: "Oii amor, tudo bem com você? ❤️", id: "texto-principal" },
    { texto: "Aposto que sim!", id: "texto-secundario" },
    { texto: "Você provavelmente não esperava que eu ia fazer algo assim, sei disso.", id: "texto-terceiro" },
    { texto: "Eu só queria te homenagear de uma forma diferente, e como eu sou um programador, por que não usar disso né?", id: "texto-principal" },
    { texto: "Enfim, saiba que eu te amo muitãoo, parabéns pelo seu aniversário, e eu quero te surpreender em todos eles 😘❤️", id: "texto-secundario" },
    { texto: "Pra finalizar essa pequena homenagem, quero dedicar uma música pra você (não é a nossa) heheh, espera que vai carregar aqui!", id: "texto-terceiro" }
];

// Função principal para controlar a sequência de digitação
async function iniciarDigitação() {
    // Digita os três primeiros textos
    for (let i = 0; i < 3; i++) {
        await digitarTexto(textos[i].texto, textos[i].id, 100);
    }

    // Espera 5 segundos após os três primeiros textos
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Limpa os textos e digita os três últimos textos
    for (let i = 3; i < 6; i++) {
        await digitarTexto(textos[i].texto, textos[i].id, 100);
    }

    // Espera 5 segundos após os três últimos textos
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Exibe o vídeo
    document.getElementById("video-container").style.display = "block";
}

// Inicia a digitação
iniciarDigitação();
