require('../global');
const reacth=globalString;
/*console.log(console === global.console); // true
console.log(setTimeout === global.setTimeout); // true
console.log(process === global.process); // true
console.log(globalString); // Output: undefined*/
console.log(globalString); // Output: undefined
globalString = 'We can change it too!';
console.log(globalString); // Output: "We can change it too!"
console.log(reacth);
