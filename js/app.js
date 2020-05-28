var numero1;
var numero2;
var operacion;

function init () {
    var pantalla = document.getElementById("display");
    var borrar = document.getElementById("on");
    var igual = document.getElementById("igual");
    var suma = document.getElementById("mas");
    var resta = document.getElementById("menos");
    var multiplicacion = document.getElementById("por");
    var division = document.getElementById("dividido");
    var uno = document.getElementById("1");
    var dos = document.getElementById("2");
    var tres = document.getElementById("3");
    var cuatro = document.getElementById("4");
    var cinco = document.getElementById("5");
    var seis = document.getElementById("6");
    var siete = document.getElementById("7");
    var ocho = document.getElementById("8");
    var nueve = document.getElementById("9");
    var cero = document.getElementById("0");   
    var cambiosigno = document.getElementById("sign");
    var punto = document.getElementById("punto");

    //Reducir Tamaño de Teclas 
    function disminuirTamanoBotones(){
        document.querySelector(".teclado").style="width:80%";
    }
        document.querySelector(".teclado").onclick = disminuirTamanoBotones;

    function normalTamanoBotones(){
        document.querySelector(".teclado").style="width:100";
    }    
        document.querySelector(".teclado").onmouseout = normalTamanoBotones; 
    
    //eventos
    cero.onclick = function(e){
        if(pantalla.textContent == 0){
            pantalla.textContent = "0";
        }else{
            pantalla.textContent = pantalla.textContent + "0";
        }
    }
    uno.onclick = function(e){
        if(pantalla.textContent == 0){
            pantalla.textContent = "1";
        } else {
        pantalla.textContent = pantalla.textContent + "1";
        }
    }
    dos.onclick = function(e){
        if(pantalla.textContent == 0){
            pantalla.textContent = "2";
        } else {
        pantalla.textContent = pantalla.textContent + "2";
        }
    }
    tres.onclick = function(e){
        if(pantalla.textContent == 0){
            pantalla.textContent = "3";
        } else {
        pantalla.textContent = pantalla.textContent + "3";
        }
    }
    cuatro.onclick = function(e){
        if(pantalla.textContent == 0){
            pantalla.textContent = "4";
        } else {
        pantalla.textContent = pantalla.textContent + "4";
        }
    }
    cinco.onclick = function(e){
        if(pantalla.textContent == 0){
            pantalla.textContent = "5";
        } else {
        pantalla.textContent = pantalla.textContent + "5";
        }
    }
    seis.onclick = function(e){
        if(pantalla.textContent == 0){
            pantalla.textContent = "6";
        } else {
        pantalla.textContent = pantalla.textContent + "6";
        }
    }
    siete.onclick = function(e){
        if(pantalla.textContent == 0){
            pantalla.textContent = "7";
        } else {
        pantalla.textContent = pantalla.textContent + "7";
        }
    }
    ocho.onclick = function(e){
        if(pantalla.textContent == 0){
            pantalla.textContent = "8";
        } else {
        pantalla.textContent = pantalla.textContent + "8";
        }
    }
    nueve.onclick = function(e){
        if(pantalla.textContent == 0){
            pantalla.textContent = "9";
        } else {
        pantalla.textContent = pantalla.textContent + "9";
        }
    }
    cambiosigno.onclick = function(e){
        pantalla.textContent = "-" + pantalla.textContent;
        if (pantalla.textContent == 0){
            pantalla.textContent = "0" ;
        } 
    }  
    punto.onclick = function(e){
        pantalla.textContent = pantalla.textContent + ".";
    }

    suma.onclick = function(e){
        numero1 = pantalla.textContent;
        operacion = "+";
        pantalla.textContent ="";
    }
    resta.onclick = function(e){
        numero1 = pantalla.textContent;
        operacion = "-";
        pantalla.textContent ="";
    }
    multiplicacion.onclick = function(e){
        numero1 = pantalla.textContent;
        operacion = "*";
        pantalla.textContent ="";
    }

    division.onclick = function(e){
        numero1 = pantalla.textContent;
        operacion = "/";
        pantalla.textContent ="";
    }

    borrar.onclick = function(e){
        pantalla.textContent ="0";
        numero1 = 0;
        numero2 = 0;
        operacion = "";
    }
    
    igual.onclick = function(e){
        numero2 = pantalla.textContent;
        var resul = 0;
        switch(operacion){
        case "+":
            resul = parseFloat(numero1) + parseFloat(numero2);
            break;

        case "-":
            resul = parseFloat(numero1) - parseFloat(numero2);
            break;

        case "*":
            resul = parseFloat(numero1) * parseFloat(numero2);
            break;

        case "/":
            resul = parseFloat(numero1) / parseFloat(numero2);
            break;              
        }
        pantalla.textContent = resul;
    }
}


