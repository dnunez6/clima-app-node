const lugar = require('./lugar/lugar.js');
const clima = require('./clima/clima.js')

// node app -d San Jose Costa Rica
const argv = require('yargs').options({
    direction: {
        alias: 'd',
        desc: 'Dirección de la lacuidad para obetener el clima',
        demand: true
    }
}).argv;

// lugar.getLugarLatLng(argv.direction)
//     .then(console.log);

// console.log(argv.direction);

//api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}


// clima.getClima(40.750000, -74.00000)
//     .then(console.log)
//     .catch(console.log);


const getInfo = async(direccion) => {
    console.log(direccion);
    try {
        //const coords = await lugar.getLugarLatLng(direction);
        const temp = await clima.getClima(40.750000, -74.00000);
        // const temp = await clima.getClima(coords.lat, coords.lon);
        // return `El clima de  ${coords.direction} es de ${temp}`;
        return `El clima de  ${direccion} es de ${temp}`;
    } catch (e) {
        return `No se pudo determinar el clima ${direccion}`;
    }

}

getInfo(argv.direction)
    .then(console.log)
    .catch(console.log);