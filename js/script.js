// const shoppingList = [
//     'patate',
//     'burger vegano',
//     'carne finta',
//     'latte di castagne',
//     'castagne',
//     'cioccolata'
// ];

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




// const students = [
//     {
//         name: 'Gino',
//         average: 3.5,
//     },

//     {
//         name: 'Ginetta',
//         average: 4.5,
//     },

//     {
//         name: 'Lorenzina',
//         average: 27,
//     },

//     {
//         name: 'Ugo',
//         average: 22,
//     },

//     {
//         name: 'Giorgetta',
//         average: 18.5,
//     },

//     {
//         name: 'Caligola',
//         average: 30,
//     },

//     {
//         name: 'Amina',
//         average: 15,
//     }
// ];
// const filteredStudents = students.filter((student) => {
//     if ( student.average < 18 ){
//         return true;
//     }
// });

// const newArray = [];
// for (let index = 0; index < students.length; index++) {
//     const element = students[index];
//     if ( element.average < 18){
//         newArray.push(element);
//     }
// }

// console.log(filteredStudents);
// console.log(newArray);
// console.log(students);


const cars = [
    {
        brand: 'Mercedes',
        model: 'class s',
        engine: 'gasoline',
    },
    {
        brand: 'Audi',
        model: 'R8',
        engine: 'gasoline',
    },
    {
        brand: 'Mercedes',
        model: 'eqs',
        engine: ' electric',
    },
    {
        brand: 'Mercedes',
        model: 'gt 63 s amg',
        engine: 'gasoline',
    },
    {
        brand: 'BMW',
        model: 'i8',
        engine: 'electric',
    },
    {
        brand: 'Ferrari',
        model: 'sf-90 stradale',
        engine: 'electric gasoline',
    },
    {
        brand: 'Lamborghini',
        model: 'Urus',
        engine: 'gasoline',
    },
    {
        brand: 'BMW',
        model: 'X5',
        engine: 'diesel',
    },
    {
        brand: 'Nissan',
        model: 'Boh',
        engine: 'diesel',
    },
    {
        brand: 'Toyota',
        model: 'Yougo',
        engine: 'diesel',
    },
    {
        brand: 'Audi',
        model: 'RSQ8',
        engine: 'gasoline',
    },
    {
        brand: 'Mercedes',
        model: 'class eqc',
        engine: 'electric',
    },
];

const gasCars = cars.filter((singleCar) =>{
    if (singleCar.engine.includes('gasoline')){
        return true;
    }
});

console.log(gasCars);

// ? const dieselCars = cars.filter((singleCar) => singleCar.engine.includes('diesel'));

const dieselCars = cars.filter((singleCar) =>{
    if (singleCar.engine.includes('diesel')){
        return true;
    }
});

console.log(dieselCars);

const otherCars = cars.filter((singleCar) =>{
    if (singleCar.engine != 'diesel' && singleCar.engine != 'gasoline')
        return true;
});

console.log(otherCars);

