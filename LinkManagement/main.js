function hover(laLetra, elTitulo, laTag='h1'){
        let nuevoTitulo = document.createElement(laTag);
            nuevoTitulo.textContent = laLetra;
            elTitulo.parentNode.replaceChild(nuevoTitulo, elTitulo);
}

function cambiarParrafo() {
    var pGrande = document.getElementById("pGrande");
    var pPequeno = document.getElementById("pPequeno");

    if (window.innerWidth < 400) {
        pGrande.style.display = "none";
        pPequeno.style.display = "block";
    } else {
        pGrande.style.display = "block";
        pPequeno.style.display = "none";
    }
}


window.onload = cambiarParrafo;
window.onresize = cambiarParrafo;





