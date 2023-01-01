            
function encoderText() {
    let resultado = ''
    let entrada = document.getElementById("entradatext").value;
    let parra = document.getElementById("salidatext")
    let p1 = document.getElementById("p1")
    let p2 = document.getElementById("p2")
    let img = document.getElementById("imagen")
    entrada = filtrotxt(entrada)
    entrada = entrada.toLowerCase()

    for (let i = 0; i < entrada.length; i++) {
        switch (entrada[i]) {
            case 'a':
                //console.log("ai");
                resultado = resultado.concat("ai")
                break
            case 'e':
                //console.log("enter");
                resultado = resultado.concat("enter")
                break
            case 'i':
                //console.log("imes");
                resultado = resultado.concat("imes")
                break
            case 'o':
                //console.log("ober");
                resultado = resultado.concat("ober")
                break
            case 'u':
                //console.log("ufat");
                resultado = resultado.concat("ufat")
                break
            default:
                resultado = resultado.concat(entrada[i])
                //console.log(entrada[i]);
                break
        }
    }
    console.log(resultado);
    p1.setAttribute("class","pnull")
    p2.setAttribute("class","pnull")
    img.setAttribute("class", "pnull")
    parra.setAttribute("class", "psalida")
    parra.innerHTML = resultado

    return resultado
}

function decoderText() {
    let entrada = document.getElementById("salidatext").textContent
    let result = ""
    let llaves = ["ai", "enter", "imes", "ober", "ufat"]
    let claves = ["a", "e", "i", "o", "u"]

    for (let i = 0; i < llaves.length; i++) {

        result = entrada.replaceAll(llaves[i], claves[i])

        //console.log(i)
        //console.log(claves[i] + " - " +llaves[i]);
        //console.log(result)
        entrada = result
    }
    //result = entrada.replace("ober", "o")

    console.log(result)
}

function filtrotxt(texto) {
    let cadena = ""
    cadena = texto.replaceAll("ó", "o")

    return cadena
}
