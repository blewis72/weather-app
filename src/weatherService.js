
const API_KEY='adc33d437180a08ec660022462a8008f'
const makeIconURL = (iconId) => `http://openweathermap.org/img/wn/${iconId}.png`

//how to get the weather information from the API
const getFormattedWeatherData = async (city,units = 'metric') => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

    const data = await fetch(URL)
    .then ((res)=> res.json())
    .then((data)=>data);

    const {
      
        weather,
        main: {temp, feels_like, temp_min, temp_max, pressure,humidity},
wind:{speed},
visibility,
sys:{country},
name,



} = data;

const {description, icon} = weather[0];

return{
    description,
    iconURL: makeIconURL(icon),
    temp,
    feels_like,
    temp_min,
    temp_max,
    pressure,
    humidity,
    speed,
    visibility,
    country,
    name,
}

}

export {getFormattedWeatherData}
