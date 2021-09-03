'use strict';
/*Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 — значения аргументов, operation — строка с названием операции. В зависимости от
переданного значения выполнить одну из арифметических операций (использовать функции из пункта 5)
и вернуть полученное значение (применить switch). */

function _sum(a, b) {
    return a + b;
}
function _subtraction(a, b) {
    return a - b;
}
function _multiplication(a, b) {
    return a * b;
}
function _division(a, b) {
    return a / b;
}
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            return _sum(arg1, arg2);
        case '-':
            return _subtraction(arg1, arg2);
        case '*':
            return _multiplication(arg1, arg2);
        case '/':
            return _division(arg1, arg2);
    }
}

let a = parseInt(prompt('Введите число "a": '));
let b = parseInt(prompt('Введите число "b": '));
const userOperation = prompt('Какую операцию выполнить? ("+", "-", "*", "/"): ');
alert(`${a} ${userOperation} ${b} = ${mathOperation(a, b, userOperation)}`)