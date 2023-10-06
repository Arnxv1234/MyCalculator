//javascript so the calculator is able to function

class Calculator {
    //create a constructor 
    constructor() { 
        this.firstNumber = '';
        this.secondNumber = '';
        this.operator = '';
        this.display = document.getElementById('display');
    }

    appendNumber(num) {
        if (this.operator === '') {
            this.firstNumber += num;
            this.display.value = this.firstNumber;
        } else {
            this.secondNumber += num;
            this.display.value = this.secondNumber;
        }
    }

    setOperator(op) {
        this.operator = op;
    }

    clearDisplay() {
        this.firstNumber = '';
        this.secondNumber = '';
        this.operator = '';
        this.display.value = '0';
    }
//calculations
    calculate() {
        const num1 = parseFloat(this.firstNumber);
        const num2 = parseFloat(this.secondNumber);
        let result = 0;
        //switch function that allows calculator to go through the adding, subtracting, multiplying and dividing functions
        switch (this.operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
        }

        this.display.value = result;
        this.firstNumber = result.toString();
        this.secondNumber = '';
        this.operator = '';
    }
}

const calculator = new Calculator();

function getNumber(num) {
    calculator.appendNumber(num);
}

function getOperator(op) {
    calculator.setOperator(op);
}

function clearDisplay() {
    calculator.clearDisplay();
}

function calculateEquals() {
    calculator.calculate();
}
