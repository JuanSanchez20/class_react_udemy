// Se define el arreglo
const personaje = ['Juan', 'Pedro', 'Jose']

// Se desestructura el arreglo
const [ P1 ] = personaje;
// Se imprime el valor desestructurado
console.log(P1);

// Se define la funcion useState
const useState = ( valor ) => {
    // Se retorna un arreglo con el valor y una función
    return [valor, ()=>{console.log('hola')}] ;
}

// Se desestructura el arreglo
const [nombre, setNombre] = useState('Goku');
// Se imprime el valor desestructurado
console.log(nombre);
// Se ejecuta la función
setNombre();
