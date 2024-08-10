const iniciarBtn = document.querySelector('.iniciar-btn');
const telaInicial = document.querySelector('.tela-inicial');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaResultadoFinal = document.querySelector('.caixa-resultado-final');
const resultadoPerguntas = document.querySelector('.resultado-perguntas');
const voltarBtn = document.querySelector('.voltar-btn');

const perguntasRespostas = [
    {
        pergunta: "A festa do agricultor ajuda a promover a conscientização sobre os desafios enfrentados pelos agricultores?",
        alternativas: ["Benéfica", "Não Benéfica"],
        resposta: "Benéfica"
    },
    {
        pergunta: "A festa do agricultor contribui para o fortalecimento da economia local?",
        alternativas: ["Benéfica", "Não Benéfica"],
        resposta: "Benéfica"
    }
];

let perguntaAtual = 0;
let respostasSelecionadas = [];

function iniciarJogo() {
    telaInicial.style.display = 'none';
    caixaPerguntas.style.display = 'block';
    exibirPergunta(perguntaAtual);
}

function exibirPergunta(index) {
    caixaPerguntas.innerHTML = '';

    const pergunta = perguntasRespostas[index];

    const perguntaElement = document.createElement('p');
    perguntaElement.textContent = pergunta.pergunta;
    caixaPerguntas.appendChild(perguntaElement);

    pergunta.alternativas.forEach((alternativa, alternativaIndex) => {
        const alternativaBtn = document.createElement('button');
        alternativaBtn.textContent = alternativa;
        alternativaBtn.classList.add('alternativa-btn');
        alternativaBtn.addEventListener('click', () => {
            respostasSelecionadas.push({
                pergunta: pergunta.pergunta,
                respostaSelecionada: alternativa
            });
            proximaPergunta();
        });
        caixaPerguntas.appendChild(alternativaBtn);
    });
}

function proximaPergunta() {
    perguntaAtual++;
    if (perguntaAtual < perguntasRespostas.length) {
        exibirPergunta(perguntaAtual);
    } else {
        exibirResultadoFinal();
    }
}

function exibirResultadoFinal() {
    caixaPerguntas.style.display = 'none';
    resultadoPerguntas.innerHTML = '';

    respostasSelecionadas.forEach((item, index) => {
        const perguntaElement = document.createElement('p');
        perguntaElement.textContent = `Pergunta ${index + 1}: ${item.pergunta} - Resposta Selecionada: ${item.respostaSelecionada}`;
        resultadoPerguntas.appendChild(perguntaElement);
    });

    caixaResultadoFinal.style.display = 'block';
}

voltarBtn.addEventListener('click', () => {
    reiniciarJogo();
});

function reiniciarJogo() {
    perguntaAtual = 0;
    respostasSelecionadas = [];

    caixaResultadoFinal.style.display = 'none';

    telaInicial.style.display = 'block';
}

iniciarBtn.addEventListener('click', iniciarJogo);
