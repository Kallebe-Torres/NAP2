function validarCodigoPostal() {
    const codigoPostal = document.getElementById('codigo_postal').value;
    const padrao = /^\d{5}(-\d{4})?$/;
    const mensagemElement = document.getElementById('mensagem');

    if (padrao.test(codigoPostal)) {
        mensagemElement.textContent = "Código postal válido!";
        mensagemElement.className = "mensagem valido";
    } else {
        mensagemElement.textContent = "Código postal inválido. Use xxxxx ou xxxxx-xxxx.";
        mensagemElement.className = "mensagem invalido";
    }
}