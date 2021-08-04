const n = 100;

//detailled version
// for (let i = 0; i <= n; i++) {
//     if (i % 3 === 0 && i % 5 === 0){ // this condition should be first else it do not pass
//         console.log('FIZZBUZZ');
//     } else if(i % 3 === 0) {
//         console.log('FIZZ');
//     } else if(i % 5 === 0) {
//         console.log('BUZZ');
//     }  else {
//         console.log(i);
//     }
// }

// shorter version, wrap every thing into console.log() to avoid repeat it at every if
for (let i = 0; i <= n; i++) {
    console.log((i % 3 === 0 && i % 5 === 0 ) ? 'FIZZBUZZ' : (i % 3 === 0) ? 'FIZZ' : (i % 5 === 0) ? 'BUZZ' : i);
}