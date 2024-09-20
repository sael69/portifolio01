// Exemplo de função para copiar o e-mail
document.getElementById('email-text').addEventListener('click', function() {
    const email = this.textContent;
    navigator.clipboard.writeText(email).then(() => {
        alert('E-mail copiado: ' + email);
    });
});