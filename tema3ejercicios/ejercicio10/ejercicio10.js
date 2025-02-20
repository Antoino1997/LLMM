function mostrarmax2() {
    var n1 = document.getElementById("n1-2").value;
    var n2 = document.getElementById("n2-2").value;

    document.getElementById("resultado-2").innerHTML = Math.max(n1, n2)
}

function mostrarmax3() {
    var n1 = document.getElementById("n1-3").value;
    var n2 = document.getElementById("n2-3").value;
    var n3 = document.getElementById("n3-3").value;

    document.getElementById("resultado-3").innerHTML = Math.max(n1, n2, n3)
}

function esvocal(letra) {
    const vocal = 'aeiouAEIOU';
    return vocal.indexOf(letra) !== -1;
}

function mirarvocal() {
    const inputletra = document.getElementById("inputletra").value;
    const resultadoletra = document.getElementById("resultado-letra");

    if (inputletra.length === 1) {
        if (esvocal(inputletra)) {
            resultadoletra.innerHTML = `${inputletra} es una vocal.`;
        } else {
            resultadoletra.innerHTML = `${inputletra} no es una vocal.`;
        }
    } else {
        resultadoletra.innerHTML = 'Por favor, ingresa un solo carácter.';
    }
}

function traducir() {
    var texto = document.getElementById("traducir").value;
    var vocales = "aeiouAEIOU";
    var resultado = [];
    for(var i = 0; i < texto.length; i++) {
        var caracter = texto[i];
        if(caracter.match(/[a-zA-Z]/) && !vocales.includes(caracter)) {
            resultado.push(caracter + "o" + caracter.toLowerCase());
        } else {
            resultado.push(caracter);
        }
    }

    document.getElementById("resultado-traducir").innerHTML = resultado.join("");
}

function mostrarsumarray() {
    var array = document.getElementById("n-array").value;
    var numeros = array.split(",");
    var suma = 0;
    for(i = 0; i < numeros.length; i++) {
        suma += parseInt(numeros[i]);
    }

    document.getElementById("resultado-array").innerHTML = suma;
}

function mostrarmultiplicacionarray() {
    var array = document.getElementById("n-array").value;
    var numeros = array.split(",");
    var multiplicacion = 1;
    for(i = 0; i < numeros.length; i++) {
        multiplicacion *= parseInt(numeros[i]);
    }

    document.getElementById("resultado-array").innerHTML = multiplicacion;
}

function escribiralreves() {
    var frase = document.getElementById("inputreverso").value;
    var frasealreves = frase.split("").reverse().join("");

    document.getElementById("resultado-reves").innerHTML = frasealreves;
}

function ordenar() {
    var palabras = document.getElementById("inputordenar").value;
    var palabrasueltas = palabras.split(",");

    document.getElementById("resultado-ordenar").innerHTML = palabrasueltas.sort();
}

function encontrarpalabralarga() {
    var palabras = document.getElementById("inputlargo").value;
    var palabrasueltas = palabras.split(",");
    var palabralarga = palabrasueltas.sort((a, b) => b.length - a.length)[0]

    document.getElementById("resultado-palabralarga").innerHTML = palabralarga;
}

function encontrarpalabrasmaslargas() {
    var palabras = document.getElementById("inputpalabrasmaslargas").value.split(",");
    var tamaño = parseInt(document.getElementById("inputnumerocomparar").value, 10);
    var palabrasfiltradas = palabras.filter(function(word) {
        return word.length > tamaño;
    })

    document.getElementById("resultado-palabrasmaslargas").innerHTML = palabrasfiltradas.join(", ");
}

function encontrarfrecuencia() {
    var inputfrecuencia = document.getElementById("inputfrecuencia").value;
    var frecuencia = {};
    for (var caracteres of inputfrecuencia) {
        if (frecuencia[caracteres]) {
            frecuencia[caracteres]++;
        } else {
            frecuencia[caracteres] = 1;
        }
    }
    
    var resultado = "";
    for (var clave in frecuencia) {
        if (frecuencia.hasOwnProperty(clave)) {
            resultado += clave + ": " + frecuencia[clave] + "<br>";
        }
    }

    document.getElementById("resultado-frecuencia").innerHTML = resultado;
}