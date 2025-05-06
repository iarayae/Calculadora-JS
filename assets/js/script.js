function obtenerNumeros() {
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);
    
    if (numero1 === "" || numero2 === "") {
        mostrarResultado("Por favor ingresa ambos números.");
        throw new Error("Campos vacíos");
    }
    
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);
    
    if (isNaN(num1) || isNaN(num2)) {
        mostrarResultado("Debes ingresar números válidos.");
        throw new Error("Valores no númericos");
    }
        
    return { numero1, numero2 };
}

function mostrarResultado(valor) {
    document.getElementById("resultado").innerText = "Resultado: " + valor;
}

function sumar() {
    try {
        const { numero1, numero2} = obtenerNumeros();
        mostrarResultado(numero1+numero2);
    } catch (error) {
        console.error(error.message);
    }
}

function restar() {
    try {
        const { numero1, numero2 } = obtenerNumeros();
        mostrarResultado(numero1 - numero2);
    } catch (error) {
        console.error(error.message);
    }
}

function multiplicar() {
    try {
        const { numero1, numero2 } = obtenerNumeros();
        mostrarResultado(numero1 * numero2);
    } catch (error) {
        console.error(error.message);
    }
}

function dividir() {
    try {
        const { numero1, numero2 } = obtenerNumeros();
        if (numero2 === 0) {
            mostrarResultado("Error: no se puede dividir por 0");
        } else {
            mostrarResultado(numero1 / numero2);
        }
    } catch (error) {
        console.error(error.message);
    }
}