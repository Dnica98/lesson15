

// const testCase = 'test2'

// switch(testCase) {
//     case 'test1':{
//         console.log('test1')
//         break;
//     }
//     case 'test2':{
//         console.log('test2')
//         break;
//     }
//     case 'test3':{
//         console.log('test3')
//         break;
//     }
//     case 'test':{
//         console.log('test')
//         break;
//     }
//     default: {
//         console.log('no case match')
//     }
// }


// const meniuCase = 'samp'

// switch(meniuCase) {
//     case 'bors':{
//         console.log('bors')
//         break;
//     }
//     case 'steak':{
//         console.log('steak')
//         break;
//     }
//     case 'fries':{
//         console.log('fries')
//         break;
//     }
//     case 'ice-cream':{
//         console.log('ice-cream')
//         break;
//     }
//     case 'salad':{
//         console.log('salad')
//         break;
//     }
//     default:{
//         console.log('no match here')
        
//     }
// }

// const condition = 'method'

// const user = {
//     name: 'Daniela',
//     job: 'developer',
//     city: 'Chsinau',
//     country: 'Moldova',
//     eyeColor: 'blue'
// }    

// user.sign = 'taurus'
// user['hobby'] = 'painting'

// console.log(`User name is: ${user.name}`)
// console.log(user.sign)
// console.log(`User sign is: ${user.sign}`)
// console.log(user.eyeColor)
// console.log(`Eye color is: ${user.eyeColor}`)
// console.log(user.hobby)
// console.log(`Client name is ${user.name}, and it\'s hobby is ${user.hobby} , client have ${user['eyeColor']} Color of eyes, and is living in ${user.city}`)

// const condition = 'menu3'

// const user = {
//     menu1: () => console.log('meniu1'),
//     menu2: () => console.log('meniu2'),
//     menu3: () => console.log('meniu3'),
//     menu4: () => console.log('meniu4'),

// }    

// console.log(user[condition])


// const str = 'lo hi rem te lor hi ai';

// console.log(str.length)
// console.log(str.charAt(str.length - 1))
// console.log(str[3])
// console.log(str.substring(2, 4))
// console.log(str.slice(-2))
// console.log(str.indexOf('hi'))
// console.log(str.lastIndexOf('hi'))
// console.log(str.replace('hi', 'changed'))
// console.log(str.split(''))
// console.log(str.split(' '))
// console.log(str.split('hi'))
// console.log(str.toUpperCase())
// console.log(str.toLowerCase())


// const str = 'No description or website or topics provided.'

// console.log(str.length)
// console.log(str.charAt(str.length - 3))
// console.log(str[3])
// console.log(str.substring(3, 25))
// console.log(str.slice(str.indexOf('topics')))
// console.log(str.indexOf('website'))
// console.log(str.lastIndexOf('topics'))
// console.log(str.replace('or', ' changed'))
// console.log(str.split(''))
// console.log(str.split(' '))
// console.log(str.split('or'))
// console.log(str.toUpperCase())
// console.log(str.toLocaleLowerCase())

const countBE = 20000;

// console.log(countBE / 2)
// console.log(5 % 2)


const hour = 60;
const day = 1440;
const week = 10080;

if (countBE / week >= 1){
    const remainingWeeks = countBE / week
    const remainingDaysInMinutes = countBE % week

    console.log(`${Math.floor(remainingWeeks)}w ${Math.floor(remainingDaysInMinutes / day)}d`)
    

    // console.log('more than one week')
} else if (countBE / day >= 1) {

    console.log('more than one day')
} else if (countBE / hour >= 1) {

    console.log('more than one hour')
} else {
    
    console.log('less than one hour')
}