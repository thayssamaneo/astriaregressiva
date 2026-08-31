// Configurar a data de abertura do servidor como prazo final
let diaAbertura = new Date("Sep 4, 2026 00:00:00").getTime();

// chamar os elementos da tela pelo id
dias = document.getElementById("dias");
horas = document.getElementById("horas");
minutos = document.getElementById("minutos");
segundos = document.getElementById("segundos");

let contagemRegressiva = setInterval(() =>{
    // atribui a variável "now" o dia atual em milisegundos
    let now = new Date().getTime();

    // calcula a diferença entre o dia final e a data atual
    let tempoRestante = diaAbertura - now;

    // converter os milisegundos em dias, horas, minutos e segundos
    let diasTempo = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));
    let horasTempo = Math.floor((tempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutosTempo = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60));
    let segundosTempo = Math.floor((tempoRestante % (1000 * 60)) / 1000);

    dias.innerText = diasTempo;
    horas.innerText = horasTempo;
    minutos.innerText = minutosTempo;
    segundos.innerText = segundosTempo;
})
