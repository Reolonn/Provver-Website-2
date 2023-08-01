document.getElementById("downarrow").addEventListener("click", function(){
    window.scroll(0, 700)
});

document.getElementById("leiamaisbutton").addEventListener("click", function(){
    window.location.href = "sobre.html"
    sessionStorage.setItem("scrollleiamais", 1)
});
document.getElementById("vertodosservicosbutton").addEventListener("click", function(){
    window.location.href = "solucoes.html"
    sessionStorage.setItem("scrolltodos", 1)
});


document.getElementById("cardbutton1").addEventListener("click", function(){
    window.location.href = "solucoes.html"
    sessionStorage.setItem("scrollcontabilidade", 1)
});
document.getElementById("cardbutton2").addEventListener("click", function(){
    window.location.href = "solucoes.html"
    sessionStorage.setItem("scrollanalise", 1)
});
document.getElementById("cardbutton3").addEventListener("click", function(){
    window.location.href = "solucoes.html"
    sessionStorage.setItem("scrollplanejamento", 1)
});
document.getElementById("cardbutton4").addEventListener("click", function(){
    window.location.href = "solucoes.html"
    sessionStorage.setItem("scrollplanejamento", 1)
});


document.getElementById("saibamaisgestores").addEventListener("click", function(){
    window.location.href = "sobre.html"
    sessionStorage.setItem("scrollgestores", 1)

});