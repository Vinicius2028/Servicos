function VoltarMenu(){
    window.location.href = "../Menu/index.html";
}

var data = new Date();
var dataFormatada = (data.getFullYear() + '/' + ("0" + (data.getMonth() + 1)).substr(-2));
dtaH.value = dataFormatada;

function busca(){
    let qtp = document.getElementById('qtp').value
    let dtaI = document.getElementById('dtaI').value
    let dtaH = document.getElementById('dtaH').value

    const d1  = dtaI;
    const d2    = dtaH;
    const diffInMs   = new Date(d2) - new Date(d1)
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
    const soma = diffInDays / 30.417;
    const soma2 = Math.round(soma)
    const soma3 = qtp - soma2;
    const total = soma3;

    document.getElementById('resultado').innerHTML = total
}

