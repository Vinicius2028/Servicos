function buscarCEP(){
    let input = document.getElementById("cep").value;
    const ajax = new XMLHttpRequest();
    ajax.open('GET','https://viacep.com.br/ws/' + input + '/json/');
    ajax.send();
    ajax.onload = function(){

        let obj = JSON.parse(this.responseText);

        let cep = obj.cep;
        let logradouro = obj.logradouro;
        let bairro = obj.bairro;
        let localidade = obj.localidade;
        let uf = obj.uf;
        let ddd = obj.ddd;

        if(uf == 'DF'){
            alert('Cep De Distrito Federal. Mudar o cep para o Robô não Bugar! - Cep opcional | 57266-665')
        }else if(uf == undefined){
            alert("De acordo com o Busca cep, o cep " + input + " e invalido, favor corrigir.")
        }

        document.getElementById('CEP').innerHTML = "CEP: " + cep;

        document.getElementById('RUA').innerHTML = "Rua: " + logradouro;

        document.getElementById('BAIRRO').innerHTML = "Bairro: " + bairro ;

        document.getElementById('CIDADE').innerHTML = "Cidade: " + localidade;

        document.getElementById('ESTADO').innerHTML = "Estado: " + uf;

        document.getElementById('DDD').innerHTML = "DDD: " + ddd;
    }
}

function VoltarMenu(){
    window.location.href = "../Menu/index.html";
}