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

    texto = cripto.value;
    texto = texto.replace(/ai/g, "a")
    texto = texto.replace(/enter/g, "e")
    texto = texto.replace(/imes/g, "i")
    texto = texto.replace(/ober/g, "o")
    texto = texto.replace(/ufat/g, "u")

    resultado.innerHTML = ` <textarea cols="26" rows="13" class="resultado-cripto">${texto}</textarea> 
    <button id="botao-copiar" onclick="Copiar()">Copiar</button>`;    
    resultado.setAttribute('style', 'height:600px');  
}

function Copiar(){
    var test = document.querySelector(".resultado-cripto")
    test.select();
    document.execCommand('copy');
}