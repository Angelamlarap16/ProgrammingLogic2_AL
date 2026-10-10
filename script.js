let celsius;

// Bucle que mantiene la solicitud activa hasta que el usuario ingrese un número válido
while (true) {
    
    let entrada = prompt("Ingresa la temperatura en grados Celsius:");
    
   
    celsius = Number(entrada);

    
    if (Number.isNaN(celsius) || entrada === null || entrada.trim() === "") {
        
        console.log("Error: debes ingresar solamente números.");
        alert("Error: debes ingresar solamente números.");
    } else {
       
        break;
    }
}

// Cálculos matemáticos
const kelvin = celsius + 273.15;
const fahrenheit = (celsius * 9 / 5) + 32;


console.log(`Grados Kelvin: ${kelvin} `);
console.log(`Grados Fahrenheit: ${fahrenheit}`);


const nodoResultado = document.getElementById("resultado");
if (nodoResultado) {
    
    nodoResultado.innerHTML = `
        <p><strong>Grados Kelvin:</strong> ${kelvin}</p>
        <p><strong>Grados Fahrenheit:</strong> ${fahrenheit}</p>
    `;
}