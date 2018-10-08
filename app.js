
//AIzaSyCuV9ZpfL8xhoe8EJouuy5To1x8Ch6sy9E
const place = require('./places/place')
const weather = require('./weather/weather')

const argv = require('yargs').options({
    direccion:{
        alias: 'd',
        require: true,
        description: 'direccion de la ciudad.'
    }    
})
.argv;

let getInfo = async(direccion)=>{

    try{

        let placeResponse = await place.getPlace(direccion);
        let weatherResponse = await weather.getWeather(placeResponse.lat,placeResponse.lng);

        return `El clima ${placeResponse.direccion} es: ${weatherResponse.data}`

    }catch(e){
        return 'No de pudo determinar el clima'
    }
    
}

getInfo(argv.direccion)
.then(data=>{
    console.log(data);
})
.catch(error=>{
    console.log('Error!!!',error);
});