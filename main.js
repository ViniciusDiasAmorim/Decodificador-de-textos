var cripto = document.getElementById("criptografar-area");
var resultado = document.querySelector(".resultado");



function Criptografar(){

    var texto = cripto.value;
    texto = texto.toLowerCase();
    texto = texto.split('');
   

    for (let i = 0; i < texto.length; i++) {

        switch (texto[i]){

            case 'a' : texto[i] = 'ai'; break;
            case 'e' : texto[i] = 'enter'; break;
            case 'i' : texto[i] = 'imes'; break;
            case 'o' : texto[i] = 'ober'; break;
            case 'u' : texto[i] = 'ufat'; break;
        }
    }
    texto = texto.join('');

    resultado.innerHTML = ` <textarea cols="26" rows="13" class="resultado-cripto">${texto}</textarea> 
    <button id="botao-copiar" onclick="Copiar()">Copiar</button>`;
    resultado.setAttribute('style', 'height:600px')    
}

function Descriptografar() {
    console.log("cliquei")


    var texto = cripto.value;
    texto = texto.toLowerCase();
    texto = texto.split('');

    for(var i = 0; i < texto.length; i++)
    {
        if(texto[i] == 'a' && texto[i+1] == 'i')
        {
            texto[i] = 'a';
            texto[i+1] = '';
        }
        if(texto[i] == 'e' && texto[i+1] == 'n' && texto[i+2] == 't' && texto[i+3] == 'e' && texto[i+4] == 'r')
        {
            texto[i] = 'e';
            texto[i+1] = '';
            texto[i+2] = '';
            texto[i+3] = '';
            texto[i+4] = '';

        }
        if(texto[i] == 'i' && texto[i+1] == 'm' && texto[i+2] == 'e' && texto[i+3] == 's')
        {
            texto[i] = 'i';
            texto[i+1] = '';
            texto[i+2] = '';
            texto[i+3] = '';
        }
        if(texto[i] == 'o' && texto[i+1] == 'b' && texto[i+2] == 'e' && texto[i+3] == 'r')
        {
            texto[i] = 'o';
            texto[i+1] = '';
            texto[i+2] = '';
            texto[i+3] = '';
        }
        if(texto[i] == 'u' && texto[i+1] == 'f' && texto[i+2] == 'a' && texto[i+3] == 't')
        {
            texto[i] = 'u';
            texto[i+1] = '';
            texto[i+2] = '';
            texto[i+3] = '';
        }
    }

    texto = texto.join('');

    resultado.innerHTML = ` <textarea cols="26" rows="13" class="resultado-cripto">${texto}</textarea> 
    <button id="botao-copiar" onclick="Copiar()">Copiar</button>`;    
    resultado.setAttribute('style', 'height:600px');  
}

function Copiar(){
    var test = document.querySelector(".resultado-cripto")
    test.select();
    document.execCommand('copy');
}