let userName = 'Valeria';
userName === 'Jane'? console.log(`Hello, ${userName}!`) : console.log('Hello!'); 

const userQuestion = 'Will I get pizza for dinner?';

console.log(`${userName} asked: ${userQuestion}`);


//Math.random() returns a value between 0 (inclusive) and 1 (exclusive).
//In order to make this set of numbers range from 0 (inclusive) to 8 (exclusive) 
//we can multiple the returned value by 8.
//Finally, to ensure we only have whole numbers from 0 to 7 we can round down using Math.floor().
const randomNumber = Math.floor(Math.random() * 8);

