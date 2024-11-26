function convertTemperature() {
    const temp = parseFloat(document.getElementById('inputTemperature').value);
    const unit = document.getElementById('unit').value;
    
    if (isNaN(temp)) {
        document.getElementById('result').innerText = 'Please enter a valid temperature.';
        return;
    }

    let celsius, fahrenheit, kelvin;
    
    if (unit === 'Celsius') {
        celsius = temp;
        fahrenheit = (celsius * 9/5) + 32;
        kelvin = celsius + 273.15;
    } else if (unit === 'Fahrenheit') {
        fahrenheit = temp;
        celsius = (fahrenheit - 32) * 5/9;
        kelvin = (fahrenheit - 32) * 5/9 + 273.15;
    } else if (unit === 'Kelvin') {
        kelvin = temp;
        celsius = kelvin - 273.15;
        fahrenheit = (kelvin - 273.15) * 9/5 + 32;
    }
    document.getElementById('result').innerHTML = `
        <strong>Conversions:</strong><br>
        Celsius: ${celsius.toFixed(2)} °C<br>
        Fahrenheit: ${fahrenheit.toFixed(2)} °F<br>
        Kelvin: ${kelvin.toFixed(2)} K
    `;
}