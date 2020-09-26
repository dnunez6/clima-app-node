const axios = require('axios');

const getLugarLatLng = async(dir) => {


    const encodeULR = encodeURIComponent(dir);
    //console.log(encodeULR);


    const instance = axios.create({
        baseURL: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=Ottawa',
        headers: {
            'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
            'x-rapidapi-key': 'bab97effcemsh8e5948b285081a2p1eacdcjsnc3c7827af157'
        }
    });


    const resp = await instance.get();

    if (resp.data.Results == null) {
        // console.log('Paso por aca');
        // throw new error(`No hay resultados para ${dir}`);
        return 'Error';
    }

    const data = resp.data.Results[0];
    const direction = data.name;
    const lat = data.lat;
    const lon = data.lon;


    return {
        direction,
        lat,
        lon
    }
}

module.exports = {
    getLugarLatLng
}