function generateGrid() {
    let grid = document.getElementById("grid");

    var content = '';

    var randomNumber;

    var numbers = new Array();

    var numericValues = new Array();

    var numbersPerLine = new Array();
    
    var counter = 0; 

    for(i = 0; i < 81; i++) {
        var randomBoolean = Math.random() >= 0.5;

        if(randomBoolean && counter <= 27) {
            if (i > 0 && numbers[i - 1] != '<input type="text" class="numberInput">') {
                numbers.push('<input type="text" class="numberInput">');

            } else {
                randomNumber = Math.floor(Math.random() * 9) + 1; 
                numbers.push(randomNumber);
                counter++;
            }

        } else {
            numbers.push('<input type="text" class="numberInput">');
        }

        var begin = '<div class="numberContainer';
        var end = '>' + (numbers[i]) + '</div>';

        if((i + 1) % 3 == 0) {
            begin += ' divisionRight';

        } else if (i == 0 || i % 9 == 0) {
            begin += ' divisionLeft';

        }
        
        if (i <= 8) {
            begin += ' divisionTop"';
        
        } else if ((i >= 18 && i <= 26) || (i >= 45 && i <= 53) || (i >= 72 && i <= 81)) {
           begin += ' divisionBottom"';
        
        } else {
            begin += '"';
        
        }
        content += (begin + end); 
    }
    
    grid.innerHTML = content; 
}