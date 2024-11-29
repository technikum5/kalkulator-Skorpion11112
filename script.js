function calculate(operation) {
    var num1 = parseFloat(document.getElementById('number1').value);
    var num2 = parseFloat(document.getElementById('number2').value);
    if (isNaN(num1) || isNaN(num2)) {
        alert('Proszę wprowadzić prawidłowe liczby.');
        return;
    }
    var wynik;
    switch (operation) {
        case 'add':
            wynik=num1+num2;
            break;
                    
        case 'subtract':
            wynik=num1-num2;
            break;
                    
        case 'multiply':
            wynik=num1*num2;
            break;
                    
        case 'divide':
            if (num2===0) {
                alert('Nie można dzielić przez zero.');
                return;
            }
                    
            wynik=num1/num2;
            break;
        default:

            alert('Nieznana operacja.');
            return;
    }

    document.getElementById('wynik').textContent = wynik;
}
