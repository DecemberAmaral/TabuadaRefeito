function gerarTabuada() {
    const numeroInput = document.getElementById('numero').value;
    const mensagemErro = document.getElementById('mensagemErro');
    const resultado = document.getElementById('resultado');

    // Limpar mensagens anteriores
    mensagemErro.textContent = '';
    resultado.innerHTML = '';

    // Verificar se a entrada é um número inteiro válido
    const numero = parseInt(numeroInput, 10);
    if (isNaN(numero)) {
        mensagemErro.textContent = 'Por favor, insira um número inteiro válido.';
        return;
    }

    // Gera a tabuada
    let tabela = '<table><tr><th>Operação</th><th>Resultado</th></tr>';
    for (let i = 1; i <= 10; i++) {
        tabela += `<tr><td>${numero} x ${i}</td><td>${numero * i}</td></tr>`;
    }
    tabela += '</table>';

    // Exibir a tabuada
    resultado.innerHTML = tabela;
}