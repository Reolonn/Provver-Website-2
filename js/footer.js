function data(){
    var data = new Date();

    document.getElementById("allrightsreserved").innerHTML = `© ${data.getFullYear()} Provver Controladoria | Todos os direitos reservados`
}
data();

// form 

document.getElementById("newsletterform").addEventListener("submit", function(e){
    e.preventDefault();

    const email = document.getElementById("emailinput").value;

    localStorage.setItem(email, "newsletter");
    alert("Recebemos o seu e-mail!")
});


// buttons 

document.getElementById("footerbutton1").addEventListener("click", function(){
    const telefone = "+55 (54) 3028-8558"

    navigator.clipboard.writeText(telefone).then(function(){
        alert("Copiado para a área de transferência!");
    });
});
document.getElementById("footerbutton2").addEventListener("click", function(){
    const whatsapp = "+55 (54) 3028-8558"

    navigator.clipboard.writeText(whatsapp).then(function(){
        alert("Copiado para a área de transferência!");
    });
});

document.getElementById("footerbutton3").addEventListener("click", function(){
    window.open("https://www.facebook.com/Provver-Controladoria-253757654769827/")
});
document.getElementById("footerbutton4").addEventListener("click", function(){
    window.open("https://goo.gl/maps/ecBbsaU4CBhGycGn6")
});