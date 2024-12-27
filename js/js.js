// N1 //
// Сам масив //
let numbersNumbers = [5, 15, 25];
// Зміна масиву //
numbersNumbers[1] = 10;
console.log(numbersNumbers);

// N2 //
// Сам масив //
let hiJs = ['Ку', 'це', 'JavaScript'];
// Додавання рядка //
hiJs.push('Масиви');
console.log(hiJs);

// N3 //
// Сам масив //
let sumka = [2, 4, 6, 8];
// Обчислення суми //
let sum = sumka.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);


// N4 //
// Сам масив //
let fiveNumbers = [1, 2, 3, 4, 5];
// Виведення елементу //
for (let i = 0; i < fiveNumbers.length; i++) {
    console.log(fiveNumbers[i]);
}


// N5 //
// Сам масив //
let stringArray = ['А', 'Б', 'В', 'Г', 'Д'];
// Виведення рядків //
for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i].length > 5) {
        console.log(stringArray[i]);
    }
}


// N6 //
// Сам масив //
let tenNumbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Знаходження максимального значення //
let maxNumber = Math.max(...tenNumbersArray);
console.log(maxNumber);


// N7 //
// Сам масив //
let anotherTenNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Виведення чисел //
for (let i = 0; i < anotherTenNumbers.length; i++) {
    if (anotherTenNumbersArray[i] % 2 === 0) {
        console.log(anotherTenNumbers[i]);
    }
}