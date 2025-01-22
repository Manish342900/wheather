
import {  useState , useEffect } from 'react';
import './App.css';
import CurrentWheather from './component/CurrentWeather/currentWheather';
import LoadingBar from "react-top-loading-bar";


import Search from './component/search';
import { fetchWheather } from './api/api';

import Forecast from './component/Daily';


function App() {

  const [currentWeatherr,setCurrentWeatherr]=useState(null)
  const [forecastWeatherr,setForcastWeatherr]=useState(null)
  const [progress, setProgress] = useState(0);
  const [loading,setLoading]=useState(false)
 


  const handleOnSearchChange=async(searchData)=>{
    const [lattitude,longitude ]=searchData.value.split(' ')
 
    setLoading(true)
    const [currentWheather,forecasteWeather]=await fetchWheather(lattitude,longitude)
    // console.log(currentWheather)
    setCurrentWeatherr({ city:searchData,...currentWheather})
    setForcastWeatherr(forecasteWeather)
    setLoading(false)
  
  }

  useEffect(() => {
      if (loading) {
        setProgress(30); 
      } else {
        setProgress(100); 
      }
    }, [loading]);



 

  return (
    
    <div className='app'>
         <LoadingBar
        color=
        '#0274B3' progress={progress}
        onLoaderFinished={() => setProgress(0)} />
      <Search onSearchChange={handleOnSearchChange}/>
      {
        currentWeatherr ==null?
        <div className='contain'>
          <div className='tain'>

          </div>
        </div>
        :null
      }
      { currentWeatherr && <CurrentWheather curr={currentWeatherr} />}
      { forecastWeatherr && <Forecast data={forecastWeatherr}/>}
    </div>
  );
}

export default App;
