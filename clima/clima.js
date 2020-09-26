const axios = require('axios');


const getClima = async(lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=dd67f9772aac1ce67d9c5a31a80cee2b&units=metric`);
    return resp.data.main.temp;
}


module.exports = {
    getClima
}