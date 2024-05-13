function Buscar(){
    let selecao = document.getElementById('selecao').value;
    
    if(selecao == 1){
        document.getElementById('motivo').innerHTML = 'Motivo: Pedencia'
        document.getElementById('frase').innerHTML = 'Frase: O RG não está anexado, favor anexar um rg.'
    }else if(selecao == 0){
        document.getElementById('motivo').innerHTML = 'Escolha uma opção.'
        document.getElementById('frase').innerHTML = ''
    }else if(selecao == 2){
        document.getElementById('motivo').innerHTML = 'Motivo: Pedencia'
        document.getElementById('frase').innerHTML = 'Frase: De acordo com o Busca cep, o cep (colar o cep aqui!) e invalido, favor corrigir.'
    }else if(selecao == 3){
        document.getElementById('motivo').innerHTML = 'Motivo: Pedencia'
        document.getElementById('frase').innerHTML = 'Frase: De acordo com in100, cliente recebe por cartão mag. Gentileza corrigir na ficha e colocar conta no acompanhamento.'
    }else if(selecao == 4){
        document.getElementById('motivo').innerHTML = 'Motivo: Pedencia'
        document.getElementById('frase').innerHTML = 'Frase: De acordo com in100, cliente recebe por outra conta. Gentileza corrigir na ficha.'
    }else if(selecao == 5){
        document.getElementById('motivo').innerHTML = 'Motivo: Pedencia'
        document.getElementById('frase').innerHTML = 'Frase: Número da conta do cliente esta incorreta de acordo com in100 anexado.'
    }else if(selecao == 6){
        document.getElementById('motivo').innerHTML = 'Motivo: Pedencia'
        document.getElementById('frase').innerHTML = 'Frase: Necessario 15 anos de benef. ou ter idade igual ou maior que 60 anos.'
    }else if(selecao == 7){
        document.getElementById('motivo').innerHTML = 'Motivo: Pedencia'
        document.getElementById('frase').innerHTML = 'Frase: Informar no acompamento que o cliente não assina.'
    }else if(selecao == 8){
        document.getElementById('motivo').innerHTML = 'Motivo: Pedencia'
        document.getElementById('frase').innerHTML = 'Frase: preencher campos adicionais.'
    }else if(selecao == 9){
        document.getElementById('motivo').innerHTML = 'Motivo: Pedencia'
        document.getElementById('frase').innerHTML = 'Frase: Documento de identificação fora dos padrões do banco, favor anexar documento sem danificações ou trocar de banco.'
    }else if(selecao == 10){
        document.getElementById('motivo').innerHTML = 'Motivo: Reprova'
        document.getElementById('frase').innerHTML = 'Frase: C6 não faz port para cliente com representante .'
    }else if(selecao == 11){
        document.getElementById('motivo').innerHTML = 'Motivo: Pendecia'
        document.getElementById('frase').innerHTML = 'Frase: Banco escolhido não faz benef. 21 com menos de 45 anos de idade.'
    }else if(selecao == 12){
        document.getElementById('motivo').innerHTML = 'Motivo: Pendecia'
        document.getElementById('frase').innerHTML = 'Frase: Seu cliente mora no estado de (MG ), o telefone dela pertence ao estado de ( SP). O banco não aceita. O que fazer? 1) Favor alterar o endereço na af, com um endereço que pertença ao mesmo estado do telefone dele. 2) Ou peça um novo telefone para formalização que seja do mesmo estado dele.'
    }else if(selecao == 13){
        document.getElementById('motivo').innerHTML = 'Motivo: Pendecia'
        document.getElementById('frase').innerHTML = 'Frase: O numero do contrato está incorreto, favor corrigir.'
    }












}




function VoltarMenu(){
    window.location.href = "../Menu/index.html";
}