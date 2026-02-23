const {registrar, leer } = require('./operaciones');

const argumentos = process.argv.slice(2);
const operacion = argumentos[0];

if (operacion === 'registrar') {
    if (argumentos.length < 6) {
        console.log('❌ Error: Faltan argumentos');
        console.log('Uso correcto: node index.js registrar <nombre> <edad> <tipo> <color> <enfermedad>');
        console.log('Ejemplo: node index.js registrar Benito "2 años" perro blanco vomitos');
    } else {
        const [nombre, edad, tipoAnimal, color, enfermedad] = argumentos;
        registrar(nombre, edad, tipoAnimal, color, enfermedad);
    }
} else if (operacion === 'leer') {
    leer();
} else {
    console.log('❌ Operación no reconocida');
    console.log('Opciones válidas: registrar, leer');
    console.log('Ejemplos:');
    console.log('node index.js registrar Benito "2 años" perro blanco vomitos');
    console.log('node index.js leer');
}