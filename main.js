var numDecimal = document.querySelector("#campoDecimal");
var btoConverte = document.querySelector("#btoConverte");
var resultado = document.querySelector("#resultado");

numDecimal.addEventListener("input", function(e){
    e.preventDefault();

    var re = /[0-9]/;
    var valorDecimal = this.value;
    var OK = re.exec(valorDecimal);

    btoConverte.addEventListener("click", function(e){
        e.preventDefault();

            if (!OK){
                resultado.classList.add("invisivel");
            }else if(valorDecimal <0){
                resultado.classList.add("invisivel");
            }else{
                var numeroBinario = converteNumeroDecimal(valorDecimal);
                resultado.setAttribute("value",numeroBinario);
                resultado.classList.remove("invisivel");
            }
    });

});
function converteNumeroDecimal(valor){
    var valorBinario = ""; 
    var umOuZero = 0;
    var quociente=valor;
    var novoQuociente;
    var resto = "";
    
    if(quociente == 1 || quociente == 0){
        valorBinario = quociente;
        return valorBinario;
    }else{
        while(quociente>=2){
            umOuZero = quociente%2;
            resto = resto + umOuZero;
            novoQuociente = Math.floor(quociente/2);
            
            quociente = novoQuociente;
            if(quociente < 2){
                resto = resto + quociente;
            }
        }  
        valorBinario = inverteString(resto);

        return valorBinario;
    }
    function inverteString(resto){
        var valorInvertido="";
        for(var i = resto.length -1;i>=0;i--){
            valorInvertido = valorInvertido + resto[i];
        }
        return valorInvertido;
    }
 }  