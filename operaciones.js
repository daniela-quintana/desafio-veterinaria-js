const fs = require('fs');

const registrar = (nombre, edad, tipoAnimal, color, enfermedad) => {
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf-8'));

    const nuevaCita = {
        nombre,
        edad,
        tipoAnimal,
        color,
        enfermedad
    };

    citas.push(nuevaCita);

    fs.writeFileSync('citas.json', JSON.stringify(citas));

    console.log('✅ Cita registrada exitosamente');
}

const leer = () => {
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf-8'));

    console.log('📋 Listado de citas:');
    console.log('=====================');

 if (citas.length === 0) {
        console.log('No hay citas registradas');
    } else {
        citas.forEach((cita, index) => {
            console.log(`\nCita #${index + 1}:`);
            console.log(`  Nombre: ${cita.nombre}`);
            console.log(`  Edad: ${cita.edad}`);
            console.log(`  Tipo de animal: ${cita.tipoAnimal}`);
            console.log(`  Color: ${cita.color}`);
            console.log(`  Enfermedad: ${cita.enfermedad}`);
        });
    }
};

module.exports = { registrar, leer };