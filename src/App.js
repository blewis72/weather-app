
import sunnyBg from './assets/SunnyDay.jpg';
import rainyBg from './assets/rainyDay.jpg';
import Descriptions from './descriptions';
import { useState,useEffect } from 'react';
import { getFormattedWeatherData } from './weatherService';






function App() {
  const [city, setCity] = useState('Chicago');
  const [weatherData, setWeatherData] = useState(null);
const [units, setUnits] = useState('imperial');
const [bg, setBg] = useState(sunnyBg);

  useEffect(() =>{
    const fetchWeatherData = async () =>{
  const data = await getFormattedWeatherData(city, units);
  setWeatherData(data);

  //dynamic background
  if(weatherData && weatherData.description){
    let imageString = data.description;
    if(imageString.includes('rain')){
      setBg(rainyBg);
    }else{
      setBg(sunnyBg);
    }
  }
    }
  


  fetchWeatherData();
  },[units, city]);

  const enterKeyPressed = (e) => {
    if (e.keyCode === 13) {
   setCity(e.currentTarget.value);
   e.currentTarget.blur();
    } 
  }


  
  return (
 <div>
    {weatherData && (
    <div className="app" style={{ backgroundImage: `url(${bg})` }}>
       <div className='temperature'>
              <h1>{`${weatherData.temp.toFixed()} °${units === 'metric' ? 'C' : 'F'}`}</h1>
             
            </div>
            <div className='forcast'>
              <Descriptions WeatherData={weatherData} units={units} />
              </div>  
      <div className='overlay'>

  <div className='container'>
          <div className='section section_inputs'>
           
            <input onKeyDown={enterKeyPressed}
             type="text" name='city' placeholder='Enter City..' />
            <button>°F</button>
         
          </div>
         
          <div className='section section_temperature'>
            
           <div className='icon'>
            <h3>{`${weatherData.name}, ${weatherData.country}`}</h3>
            <hr/>
            <br/>
            <h4>{`${weatherData.description}`}</h4>
            <hr></hr>
            
            <h4>humidity: {`${weatherData.humidity} `}%</h4>
            <hr></hr>
            <h4>Visiblity: {`${weatherData.visibility}`}</h4>
            <hr></hr>
            <h4>Wind Speed: {`${weatherData.speed}`} MPH</h4>
        
         
          
            </div>
            
          </div>
        
          
          {/* /* bottom description */ }


        </div>


        

       
      </div>
    
    

    </div>
    )}
    </div>
  );
}

export default App;
