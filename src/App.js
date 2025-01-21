
import {  useState } from 'react';
import './App.css';
import CurrentWheather from './component/CurrentWeather/currentWheather';

import Search from './component/search';
import { fetchWheather } from './api/api';

import Forecast from './component/Daily';


function App() {

  const [currentWeatherr,setCurrentWeatherr]=useState(null)
  const [forecastWeatherr,setForcastWeatherr]=useState(null)


  const handleOnSearchChange=async(searchData)=>{
    const [lattitude,longitude ]=searchData.value.split(' ')

    const [currentWheather,forecasteWeather]=await fetchWheather(lattitude,longitude)
    // console.log(currentWheather)
    setCurrentWeatherr({ city:searchData,...currentWheather})
    setForcastWeatherr(forecasteWeather)
  }
  console.log(forecastWeatherr)


 

  return (
    <div className='app'>
      <Search onSearchChange={handleOnSearchChange}/>
      {
        currentWeatherr ==null?<div className='no-content'>PLease Type The City Name</div>:null
      }
      { currentWeatherr && <CurrentWheather curr={currentWeatherr} />}
      { forecastWeatherr && <Forecast data={forecastWeatherr}/>}
    </div>
  );
}

export default App;
