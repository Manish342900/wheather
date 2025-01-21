import React from 'react'
import "./style.css"

export default function CurrentWheather({curr}) {
  // console.log(curr)

  return (
    <>
    
      <div className='weather'>
      <div className='top' >
          <p  className='city'>{curr?.city?.label}</p>
          <p className='weather-description' >{curr?.weather?.[0].description}</p>
      <img alt='weather' className='weather-icon' src={`/assets/icons/${curr?.weather?.[0].icon}.png`} />

      </div>
      <div className='bottom'>
        <p className='temp'>{Math.round(curr?.main?.temp)}°C</p>
        <div className='details'>
          <div className='parameter-row'>
            <span className='parameter-label'>Details</span>
          </div>
          <div className='parameter-row'>
            <span className='parameter-label'>feels like</span>
            <span className='parameter-value'>{curr?.main?.feels_like}</span>
          </div>
          <div className='parameter-row'>
            <span className='parameter-label'>Winds</span>
            <span className='parameter-value'>{curr?.wind?.speed}m/s</span>
          </div>
          <div className='parameter-row'>
            <span className='parameter-label'>Humidity</span>
            <span className='parameter-value'>{curr?.main?.humidity}</span>
          </div>

        </div>
      </div>
    </div>
    
    </>
  )
}
