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
scrolltodos();


function scrollcontabilidade(){
    const scroll = sessionStorage.getItem("scrollcontabilidade");

    if(scroll){
        document.getElementById("solcontabilidade").scrollIntoView({block:"center", behavior:"smooth"}, true);

        sessionStorage.removeItem("scrollcontabilidade")
    }
};
function scrollanalise(){
    const scroll = sessionStorage.getItem("scrollanalise");

    if(scroll){
        document.getElementById("solanalise").scrollIntoView({block:"center", behavior:"smooth"}, true);

        sessionStorage.removeItem("scrollanalise")
    }
};
function scrollplanejamento(){
    const scroll = sessionStorage.getItem("scrollplanejamento");

    if(scroll){
        document.getElementById("solplanejamento").scrollIntoView({block:"center", behavior:"smooth"}, true);

        sessionStorage.removeItem("scrollplanejamento")
    }
};
function scrolltodos(){
    const scroll = sessionStorage.getItem("scrolltodos");

    if(scroll){
        window.scroll(0, 350)

        sessionStorage.removeItem("scrolltodos")
    }
};