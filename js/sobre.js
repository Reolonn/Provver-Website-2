function seescrollgestores(){
    const clicked = sessionStorage.getItem("scrollgestores");

    if(clicked){
        window.scroll(0, 1700)

        sessionStorage.removeItem("scrollgestores")
    }
}
function seescrollleiamais(){
    const clicked = sessionStorage.getItem("scrollleiamais");

    if(clicked){
        window.scroll(0, 700)

        sessionStorage.removeItem("scrollleiamais")
    }
}

seescrollgestores();
seescrollleiamais();