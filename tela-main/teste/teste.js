
        // // Função para traduzir o texto
        // function traduzir() {
        //     const language = document.getElementById('language').textContent;
        //     const idiomaDestino = document.getElementById('idioma-destino').value;

        //     if (textoOriginal.trim() === '') {
        //         alert('Texto não encontrado!');
        //         return;
        //     }

        //     const url = `https://translation.googleapis.com/language/translate/v2?key=AIzaSyDDIL3heA7M6RVIES3gIEFrxntKAmhh3nM`;
            
        //     const dados = {
        //         q: textoOriginal,
        //         target: idiomaDestino,
        //         format: 'text'
        //     };

        //     fetch(url, {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify(dados)
        //     })
        //     .then(response => response.json())
        //     .then(data => {
        //         if (data && data.data && data.data.translations) {
        //             const traducao = data.data.translations[0].translatedText;
        //             document.getElementById('resultado').textContent = traducao;
        //         } else {
        //             alert('Erro na tradução!');
        //         }
        //     })
        //     .catch(error => {
        //         console.error('Erro:', error);
        //         alert('Erro ao conectar à API.');
        //     });
        // }
    // Função para traduzir o texto
// function traduzir() {
//     const textoOriginal = "Texto de exemplo para traduzir"; // Aqui você pode pegar o texto que deseja traduzir
//     const idiomaDestino = document.getElementById('option').value; // Pega o valor do idioma selecionado

//     if (!idiomaDestino) {
//         alert('Escolha um idioma!');
//         return;
//     }

//     const url = `https://translation.googleapis.com/language/translate/v2?key=AIzaSyDDIL3heA7M6RVIES3gIEFrxntKAmhh3nM`;
    
//     const dados = {
//         q: textoOriginal,
//         target: idiomaDestino,
//         format: 'text'
//     };

//     fetch(url, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(dados)
//     })
//     .then(response => response.json())
//     .then(data => {
//         if (data && data.data && data.data.translations) {
//             const traducao = data.data.translations[0].translatedText;
//             document.getElementById('resultado').textContent = traducao;
//         } else {
//             alert('Erro na tradução!');
//         }
//     })
//     .catch(error => {
//         console.error('Erro:', error);
//         alert('Erro ao conectar à API.');
//     });
// }

// // Adiciona um evento de mudança no select
// document.getElementById('option').addEventListener('change', function() {
//     traduzir(); // Chama a função de tradução assim que a seleção mudar
// });

// Função para traduzir o texto
function traduzir() {
    const language = "Texto de exemplo para traduzir"; // Aqui você pode pegar o texto que deseja traduzir
    const idiomaDestino = document.getElementById('option').value; // Pega o valor do idioma selecionado

    if (!idiomaDestino) {
        alert('Escolha um idioma!');
        return;
    }

    const url = `https://translation.googleapis.com/language/translate/v2?key=AIzaSyDDIL3heA7M6RVIES3gIEFrxntKAmhh3nM`;
    
    const dados = {
        q: language,
        target: idiomaDestino,
        format: 'text'
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
    .then(response => response.json())
    .then(data => {
        if (data && data.data && data.data.translations) {
            const traducao = data.data.translations[0].translatedText;
            document.getElementById('resultado').textContent = traducao; // Exibe a tradução
        } else {
            alert('Erro na tradução!');
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Erro ao conectar à API.');
    });
}

// Função para alterar o texto do botão com base no idioma
function alterarTextoBotao(idioma) {
    const botao = document.querySelector('.continue-button');
    
    const textos = {
        pt: 'Continuar',
        en: 'Continue',
        es: 'Continuar',
        de: 'Weiter' // Exemplo em alemão
    };

    // Atualiza o texto do botão conforme o idioma selecionado
    if (textos[idioma]) {
        botao.textContent = textos[idioma];
    }
}

// Adiciona um evento de mudança no select
document.getElementById('option').addEventListener('change', function() {
    const idiomaSelecionado = this.value;
    traduzir(); // Chama a função de tradução
    alterarTextoBotao(idiomaSelecionado); // Atualiza o texto do botão
});

