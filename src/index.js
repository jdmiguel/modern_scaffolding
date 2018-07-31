//import css from './stylecss.css';
require('./js/app.js');
require('./scss/styles.scss');

console.log(`From index.js =>  MODE: ${process.env.MODE}, PLATFORM: ${process.env.PLATFORM}, TEST: ${process.env.TEST}`); 
console.log(typeof process.env.TEST); 