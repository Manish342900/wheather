import React from 'react';
import "./style.css"
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemPanel  } from 'react-accessible-accordion';

export default function Forecast({ data }) {
    const forecastList=data?.list
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dateArray=new Date().getDay()
    const gg = daysOfWeek.slice(dateArray , daysOfWeek.length).concat(daysOfWeek.splice(0,dateArray))
    console.log(gg)
    return (
        <>
            <label className='title'>Weekly Forecast</label>
            <Accordion allowMultipleExpanded className='accords'>
                {
                    forecastList?.slice(0, 7).map((item, index) => (
                        <AccordionItem className='accords-item' key={index}>
                            <AccordionItemButton  className='accord-button'>
                                <div className='daily-item'>
                                    <img className='weatherl' alt='weather' src={`/assets/icons/${item?.weather?.[0].icon}.png`}/>
                                    <label className='day'>{gg[index]}</label>
                                    <label className='desx'>{item?.main?.temp}°C</label>
                                    <label className='min-max'>{`${item?.main?.temp_max}°C ${item?.main?.temp_min}°C`}</label>
                                </div>
                            </AccordionItemButton>
                            <AccordionItemPanel className='panel'>
                                <div className='daily-details-grid'>
                                    <div className='daily-details-grid-item'>
                                            <span className='desption'>Pressure {item?.main?.pressure}</span>
                                            <span className='desption'>Feels-Likes {item?.main?.feels_like}</span>
                                            <span className='desption'>Wind {item?.wind?.speed}</span>
                                            <span className='desption'>Humidity {item?.main?.humidity}</span>
                                            <span className='desption'>Sea-level {item?.main?.sea_level}</span>




                                    </div>
                                </div> 
                            </AccordionItemPanel>
                        </AccordionItem>
                    ))
                }
            </Accordion>
        </>
    );
}
