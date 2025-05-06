function obtenerNumeros() {
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);
    return { numero1, numero2 };
}

function mostrarResultado(valor) {
    document.getElementById("resultado").innerText = "Resultado: " + valor;
}

function sumar() {
    const { numero1, numero2} = obtenerNumeros();
    mostrarResultado(numero1+numero2);
}

function restar() {
    const { numero1, numero2} = obtenerNumeros();
    mostrarResultado(numero1-numero2);
}

function multiplicar() {
    const { numero1, numero2} = obtenerNumeros();
    mostrarResultado(numero1*numero2);
}

function dividir() {
    const { numero1, numero2} = obtenerNumeros();
    if (numero2==0) {
        mostrarResultado("Error - no se puede dividir por 0");
    } else {
        mostrarResultado(numero1/numero2);
    }
}