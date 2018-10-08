
const axios = require('axios');

const apiKey = "AIzaSyCuV9ZpfL8xhoe8EJouuy5To1x8Ch6sy9E";


const getPlace = async(address) =>{
    
    const urlData = encodeURI(address);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${urlData}&key=${apiKey}`);


    if(resp.data.status==='ZERO_RESULTS'){
        throw new Error('No hay resultados')
    }

    let location = resp.data.results[0];
    let coors = location.geometry.location;
    let formatted_address = location.formatted_address;

    return {
        direccion: formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }

}

module.exports={
    getPlace
}

        


