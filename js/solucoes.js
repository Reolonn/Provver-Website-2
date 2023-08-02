// downarrow

document.getElementById("downarrowsols").addEventListener("click", function(){
    window.scroll(0, 350)

})

// serviços

function contabilidadefunction(){
    window.location.href = "contato.html"
}

// scroll functions 

// calls:
scrollcontabilidade();
scrollanalise();
scrollplanejamento();
scrollexigencias();
scrolltodos();


function scrollcontabilidade(){
    const scroll = sessionStorage.getItem("scrollcontabilidade");

    if(scroll){
        document.getElementById("solcontabilidade").scrollIntoView({block:"center", behavior:"smooth"}, true);

        const underlinetext = '<p class="text-center solstitles fontdefault fs-2 highlightsol">Contabilidade</p>'
        document.getElementById("contabilidadesolstitle").innerHTML = underlinetext


        sessionStorage.removeItem("scrollcontabilidade")
    }
};
function scrollanalise(){
    const scroll = sessionStorage.getItem("scrollanalise");

    if(scroll){
        document.getElementById("solanalise").scrollIntoView({block:"center", behavior:"smooth"}, true);

        const underlinetext = '<p class="text-center solstitles fontdefault fs-2 highlightsol">Análise dos negócios</p>'
        document.getElementById("analisesolstitle").innerHTML = underlinetext


        sessionStorage.removeItem("scrollanalise")
    }
};
function scrollplanejamento(){
    const scroll = sessionStorage.getItem("scrollplanejamento");

    if(scroll){
        document.getElementById("solplanejamento").scrollIntoView({block:"center", behavior:"smooth"}, true);

        const underlinetext = '<p class="text-center solstitles fontdefault fs-2 highlightsol">Planejamento tributário</p>'
        document.getElementById("planejamentosolstitle").innerHTML = underlinetext


        sessionStorage.removeItem("scrollplanejamento")
    }
};
function scrollexigencias(){
    const scroll = sessionStorage.getItem("scrollexigencias");

    if(scroll){
        document.getElementById("solplanejamento").scrollIntoView({block:"center", behavior:"smooth"}, true);

        const underlinetext1 = '<p class="text-center solstitles fontdefault fs-2 highlightsol">Exigências trabalhistas</p>'
        const underlinetext2 = '<p class="text-center solstitles fontdefault fs-2 highlightsol">Exigências tributárias</p>'
        document.getElementById("exigenciassolstitle1").innerHTML = underlinetext1
        document.getElementById("exigenciassolstitle2").innerHTML = underlinetext2

        sessionStorage.removeItem("scrollexigencias")
    }
};
function scrolltodos(){
    const scroll = sessionStorage.getItem("scrolltodos");

    if(scroll){
        window.scroll(0, 350)

        sessionStorage.removeItem("scrolltodos")
    }
};


// highlight functions

// calls



// function hlcontabilidade(){
//     const hlcontabilidade = sessionStorage.getItem("hlcontabilidade")
// }