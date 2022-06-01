var imagens = document.getElementById("imgs");
var contador = 0;


function aumentar() {
    // imagens.style.display = "block";
    var texto = document.getElementById("nome");
    var TManho = [] // Array para armazenar caracter

    for (var i = 0; i <= texto.value.length - 1; i++) {
        TManho.push(texto.value.charAt(i)) //inserir caracter no array
        if (TManho[i] === TManho[i].toUpperCase()) {
            TManho[i] = TManho[i].toLowerCase();
        }
    }

    if (TManho.length > 0){
        imagens.style.borderStyle = "groove";
    } else{
        alert('Insira algum caracter.')
    }
    
    function mostrarC(value){

        if (value != ' ') {
            var CM = value.toUpperCase();
            var img = document.createElement("img");
            img.src = "img/Teste_Letra_"+CM+".jpg";
            img.style.borderRadius = "6px";
            img.style.width = "100px";
            img.style.height = "100px";
            imagens.appendChild(img);

        }else{
            var img = document.createElement("img");
            img.src = "img/Teste_Espaco.jpg";
            img.style.borderRadius = "5px";
            img.style.width = "50px";
            img.style.height = "100px";
            imagens.appendChild(img);
        }

    }

    for (const n of TManho) {
        mostrarC(n)
    }

    texto.value = '';
    
}

function clean () {
    while (imagens.firstChild) {
        imagens.removeChild(imagens.firstChild)
    }
    imagens.style.display = "none";
}