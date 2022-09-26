const personajes = ['Guku', 'Vegeta', 'Trunks'];

const [ , , p3] = personajes;

console.log( p3 );

const retornArreglo = () => {
    return ["ABC", 123];
}

const [ letras, numeros] = retornArreglo();
console.log (letras , numeros);

//Tarea

const useState = ( valor ) => {
    return [ valor, () => { console.log ('Hola Mundo') } ];
}
const [ nombre, setNombre] = useState ('Guku');
console.log (nombre);

setNombre();
