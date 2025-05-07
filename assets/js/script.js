function obtenerNumeros() {
    const valor1 = document.getElementById("numero1").value;
    const valor2 = document.getElementById("numero2").value;

    if (valor1.trim() === "" || valor2.trim() === "") {
        mostrarResultado("Por favor ingresa ambos números.");
        throw new Error("Campos vacíos");
    }

    const numero1 = parseFloat(valor1);
    const numero2 = parseFloat(valor2);

    if (isNaN(numero1) || isNaN(numero2)) {
        mostrarResultado("Debes ingresar números válidos.");
        throw new Error("Valores no numéricos");
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

function limpiar() {
    document.getElementById("numero1").value = "";
    document.getElementById("numero2").value = "";
    document.getElementById("resultado").innerText = "Resultado: ";
}
