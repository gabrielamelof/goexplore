
// chave da api
const KEY = 'AIzaSyDDIL3heA7M6RVIES3gIEFrxntKAmhh3nM';



  



// Função para traduzir um texto
function salvarIdioma() {
    const idiomaSelecionado = document.getElementById('option').value;
    localStorage.setItem('idioma', idiomaSelecionado); // Salva no localStorage
    window.location.href = './home.html'; // Redireciona para a próxima página
}

async function traduzirTexto(texto, idiomaDestino) {
    const url = `https://translation.googleapis.com/language/translate/v2?key=${KEY}`;
    
    
    // Requisição para traduzir o texto
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            q: texto,
            target: idiomaDestino
        })
    });

    const data = await response.json();
    console.log(data.data);
    if (data.data && data.data.translations && data.data.translations[0]) {
        return data.data.translations[0].translatedText; // Retorna o texto traduzido
    } else {
        console.error('Erro na tradução:', data);
        return texto; // Se ocorrer um erro, retorna o texto original
    }
}

// Função para traduzir todos os elementos da página
async function traduzirPagina(option) {
    const elementos = document.querySelectorAll('h1, h2, h3, p, li, span, button '); // Elementos com texto
    console.log(elementos);
    for (let elemento of elementos) {
        const textoOriginal = elemento.innerText;
        const textoTraduzido = await traduzirTexto(textoOriginal, option);
        elemento.innerText = textoTraduzido;
    }
}

// Função para mudar o idioma da página
async function mudarIdioma() {
    const option = document.getElementById('option').value; // Pega o idioma escolhido
    if (!option) {
        alert('Escolha um idioma!');
        return;
    }
    await traduzirPagina(option); // Traduz a página para o idioma escolhido
}

async function traduzirAutomaticamente() {
    const idiomaNavegador = navigator.language || navigator.userLanguage; // Detecta o idioma do navegador (ex: 'pt-BR', 'en-US', etc.)

    // Escolhe o idioma desejado para tradução (a partir do idioma do navegador)
    let idioma = 'en'; // Padrão: inglês

    if (idiomaNavegador.includes('pt')) {
        idioma = 'pt'; // Se o idioma do navegador for português, traduz para português
    } else if (idiomaNavegador.includes('es')) {
        idioma = 'es'; // Se for espanhol
    } else if (idiomaNavegador.includes('de')) {
        idioma = 'de'; // Se for alemão
    }

    console.log(`Detectado o idioma do navegador: ${idiomaNavegador}. Traduzindo para: ${idioma}`);
    await traduzirPagina(idioma); // Traduz automaticamente a página
}

// Chama a função para traduzir a página automaticamente
window.onload = traduzirAutomaticamente;

window.onload = async function() {
    const idiomaSalvo = localStorage.getItem('idioma') || 'pt'; // Pega o idioma salvo ou define português como padrão
    await traduzirPagina(idiomaSalvo); // Traduz a página com o idioma escolhido
};