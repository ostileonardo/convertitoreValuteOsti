const input = document.getElementById("input");

class Valuta{
    constructor(paese, nomeValuta, simbolo, cambio){
        this.cambio = cambio;
        this.simbolo = simbolo;
        this.paese = paese;
    }

    daEuro(euro){
        return (euro * this.cambio).toFixed(2);
    }
}


const valuta1 = new Valuta("Argentina", "Peso argentino", "$", 1707.12);
const valuta2 = new Valuta("Burundi", "Franco del burundi", "FBu", 3319.20);
const valuta3 = new Valuta("Madagascar", "Ariary malgascio", "Ar", 5017.46);

function converti(){
    let euro = input.value;
    document.getElementById("valuta1").innerHTML = valuta1.daEuro(euro) + " " +valuta1.simbolo;
    document.getElementById("valuta2").innerHTML = valuta2.daEuro(euro) + " " +valuta2.simbolo;
    document.getElementById("valuta3").innerHTML = valuta3.daEuro(euro) + " " +valuta3.simbolo;
}

function darkmode(){
    document.body.classList.toggle("darkmode");
}