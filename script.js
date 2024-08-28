var botãoEncriptar = document.querySelector(".btn-encriptar");
var botãoDesencriptar = document.querySelector(".btn-desencriptar");
var feio = document.querySelector(".meninofeio");
var paragrafo = document.querySelector(".paragrafo");
var resultado = document.querySelector(".Resultado");

botãoEncriptar.onclick = encriptar;
botãoDesencriptar.onclick = desencriptar;

function encriptar(){
    ocultarAdelante();
    var caixadetexto = recuperarTexto()
    resultado.textContent = encriptarTexto(caixadetexto);
}

function desencriptar(){
    ocultarAdelante();
    var caixadetexto = recuperarTexto()
    resultado.textContent = desencriptarTexto(caixadetexto);
}

function recuperarTexto(){
    var caixadetexto = document.querySelector(".caixadetexto")
    return caixadetexto.value
}

function ocultarAdelante(){
    feio.classList.add("ocultar");
    paragrafo.classList.add("ocultar");
}

function encriptarTexto(mensagem){
    var texto = mensagem;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;

}

function desencriptarTexto(mensagem){
    var texto = mensagem;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
        
    }

    return textoFinal;

}

const btnCopiar = document.querySelector(".btn-copiar"); 
    btnCopiar.addEventListener("click", copiar = () => {
    var conteudo = document.querySelector(".Resultado").textContent;
    navigator.clipboard.writeText(conteudo);
    console.log("ola"); 
});