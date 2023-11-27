const shoppingList = [
    'patate',
    'burger vegano',
    'carne finta',
    'latte di castagne',
    'castagne',
    'cioccolata'
];

// for (let index = 0; index < shoppingList.length; index++) {
//     const element = shoppingList[index];
// }

// shoppingList.forEach((item, index) => {
//     console.log(item, index);
// });


// const numbers = ['1, 2, 3, 4, 5, 6, 7, 8 ,9, 10, 15, 18, 123, 555, 786, 5, 32, 11'];
// const newNumbersArray = numbers.map((number) => {
//     return number / 2;
// });
// console.log(newNumbersArray);
// console.log(numbers);




const students = [
    {
        name: 'Gino',
        average: 3.5,
    },

    {
        name: 'Ginetta',
        average: 4.5,
    },

    {
        name: 'Lorenzina',
        average: 27,
    },

    {
        name: 'Ugo',
        average: 22,
    },

    {
        name: 'Giorgetta',
        average: 18.5,
    },

    {
        name: 'Caligola',
        average: 30,
    },

    {
        name: 'Amina',
        average: 15,
    }
];
const filteredStudents = students.filter((student) => {
    if ( student.average < 18 ){
        return true;
    }
});

const newArray = [];
for (let index = 0; index < students.length; index++) {
    const element = students[index];
    if ( element.average < 18){
        newArray.push(element);
    }
}


console.log(filteredStudents);
console.log(newArray);
console.log(students);
