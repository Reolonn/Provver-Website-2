document.getElementById("contatoform").addEventListener("submit", function(e){
    e.preventDefault();

    const assunto = JSON.stringify(document.getElementById("contatoform-assunto").value)
    const mensagem = JSON.stringify(document.getElementById("contatoform-mensagem").value)


    console.log(assunto)
    console.log(mensagem)

    document.getElementById("contatoform").reset();
    alert("Mensagem enviada!")
});