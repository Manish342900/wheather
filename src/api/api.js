export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';
const Wheather_URl='https://api.openweathermap.org/data/2.5'
const Wheather_API='cefe6343dff70279a59b18b317f7574d'

export const geoApiOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'e87143638amsh1428cd13aa09fbdp1ee2d6jsn5ee3b3ce9c25',
    'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
  }
};

export async function fetchWheather(lat,lon) {
  try {
      const [wheatherPromise,forecastePromise]=await Promise.all([
        fetch(`${Wheather_URl}/weather?lat=${lat}&lon=${lon}&appid=${Wheather_API}&units=metric`),
        fetch(`${Wheather_URl}/forecast?lat=${lat}&lon=${lon}&appid=${Wheather_API}&units=metric`)
      ])
      const weatherData=await wheatherPromise.json()
      const forecastData=await forecastePromise.json()
      return [weatherData,forecastData]


  } catch (error) {
    console.log(error)
  }
  
}

export async function fetchCitites(params) {
  try {
    const response = await fetch(`${GEO_API_URL}/cities?minPopulation=100000&namePrefix=${params}`, geoApiOptions);
    const result = await response.json();
    return {
      options: result.data.map((city) => {
        return {
          value:`${city.latitude} ${city.longitude}`, 
          label: `${city.name}`,
        }
      })
    }
  } catch (error) {
    console.error(error);
  }
}




