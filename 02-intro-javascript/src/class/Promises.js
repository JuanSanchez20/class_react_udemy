import { findHeroForID } from "./class/impExports";

// const promesa = new Promise( (resolve, reject) => {
// 	setTimeout( () => {
// 		const hero = findHeroForID(2);
//         console.log(hero);
// 	}, 2000);
// });

// promesa.then( () => {
// 	console.log('Cumplió la promesa')
// } ).catch( err => console.warn(err));

const getHeroesByIdAsync = (id) => {
    return new Promise( ( resolve, reject ) => {
        setTimeout ( () => {
            const hero = findHeroForID(id);
            if (hero) {
                resolve(hero);
            } else {
                reject('No se encontro el Heroe');
            }
        }, 2000);   
    });
}

getHeroesByIdAsync(1)
    .then( console.log )
    .catch( console.warn );