var imagens = document.getElementById("imgs");
var contador = 0;

function aumentar() {

    var texto = document.getElementById("nome");
    var TManho = [] // Array para armazenar caracter

    for (var i = 0; i <= texto.value.length - 1; i++) {
        TManho.push(texto.value.charAt(i)) //inserir caracter no array
        if (TManho[i] === TManho[i].toUpperCase()) {
            TManho[i] = TManho[i].toLowerCase();
        }
    }

    TManho.length > 0? imagens.style.borderStyle = "groove" : imagens.style.borderStyle = "none";

    for (var j = 0; j <= TManho.length; j++) {
                
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

        switch (TManho[j]) {
            case 'a':
                mostrarC(TManho[j]);
                break;
            case 'b':
                mostrarC(TManho[j]);
                break;
            case 'c':
                mostrarC(TManho[j]);
                break;
            case 'd':
                mostrarC(TManho[j]);
                break;    
            case 'e':
                mostrarC(TManho[j]);
                break;
            case 'f':
                mostrarC(TManho[j]);
                break;
            case 'g':
                mostrarC(TManho[j]);
                break;
            case 'h':
                mostrarC(TManho[j]);
                break;
            case 'i':
                mostrarC(TManho[j]);
                break;
            case 'j':
                mostrarC(TManho[j]);
                break;
            case 'k':
                mostrarC(TManho[j]);
                break;
            case 'l':
                mostrarC(TManho[j]);
                break;
            case 'm':
                mostrarC(TManho[j]);
                break;
            case 'n':
                mostrarC(TManho[j]);
                break;
            case 'o':
                mostrarC(TManho[j]);
                break;
            case 'p':
                mostrarC(TManho[j]);
                break;
            case 'q':
                mostrarC(TManho[j]);
                break;
            case 'r':
                mostrarC(TManho[j]);
                break;
            case 's':
                mostrarC(TManho[j]);
                break;
            case 't':
                mostrarC(TManho[j]);
                break;
            case 'u':
                mostrarC(TManho[j]);
                break;
            case 'v':
                mostrarC(TManho[j]);
                break;
            case 'w':
                mostrarC(TManho[j]);
                break;
            case 'x':
                mostrarC(TManho[j]);
                break;
            case 'y':
                mostrarC(TManho[j]);
                break;
            case 'z':
                mostrarC(TManho[j]);
                break;
            case ' ':
                mostrarC(TManho[j]);
                break;
            default:
                break;    
        }
        texto.value = '';
    }

}


