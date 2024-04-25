// Função para calcular e atualizar o cronômetro em tempo real
function atualizarCronometro() {
    // Data atual
    var hoje = new Date();

    // Aniversário de namoro (2 de setembro)
    var aniversarioNamoro = new Date(hoje.getFullYear(), 8, 2);

    // Se o aniversário de namoro já passou este ano, calcular para o próximo ano
    if (hoje > aniversarioNamoro) {
        aniversarioNamoro.setFullYear(aniversarioNamoro.getFullYear() + 1);
    }

    // Calcular a diferença em milissegundos entre as datas
    var diferenca = aniversarioNamoro - hoje;

    // Calcular dias, horas, minutos e segundos restantes
    var dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    var horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    // Exibir o cronômetro na página
    var countdownElement = document.getElementById('countdown');
    countdownElement.textContent = dias + " dias, " + horas + " horas, " + minutos + " minutos e " + segundos + " segundos até o nosso aniversário de namoro!";
}

// Chamar a função para atualizar o cronômetro a cada segundo
setInterval(atualizarCronometro, 1000);