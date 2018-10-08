
const axios = require('axios');

const apiKey = "07145f4ed38d2dd403e363c86f40054a";


const getWeather = async(lat,lng) =>{
    
    let address = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}&units=imperial`

    let resp = await axios.get(address);
    
    //console.log(resp.data.main.temp);

    return {
        data: resp.data.main.temp
    }


}

module.exports={
    getWeather
}
