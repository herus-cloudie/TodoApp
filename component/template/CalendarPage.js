'use client'
import { BsStopwatch } from "react-icons/bs";
import { WiDayRain } from "react-icons/wi";
import { useEffect, useState } from "react";
import CalendarCard from "../module/calendarCard";
import Weatehr from "../module/weather";

export default function CalendarPage(){
    let [err , setErr] = useState('')
    let [units , setUnits] = useState(false)
    let [weather , setWeather] = useState({})
    let [area , setArea] = useState({country : '' , city : ''})
    let [searchCity , setSearchCity] = useState('tehran')

    useEffect(() => {
        async function getWeatherData(){
            let progress = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=ec68a45b8063bd65a64d5b2a9b2550d9&units=metric`)
            let Data = await progress.json()
            if(Data.message) {
                setErr('city does not exist , please be carefull about spelling') 
            }else{
                setArea({country : Data.sys.country , city : Data.name})
                setWeather(Data.main)
                setErr('')
            }
        }
        getWeatherData()
    } , [searchCity])

    let date = new Date();
    let [time , setTime] = useState({
        sec : '00',
        min : '00',
        hour : '00',
        day : '',
        month : '',
        year : ''
    })

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AGUUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
    let dayName = days[date.getDay()]
    let monthName = months[date.getMonth()];
    const setMyTime = () => setTimeout(() => {setTime({sec : date.getSeconds() , min : date.getMinutes() , hour : date.getHours() , day : date.getDate(), month : date.getMonth(), year : date.getFullYear()})}, 1000);
    setMyTime();
    const exploreHanlder = (input) => setSearchCity(input)

    /* ---------------------------------------------------------------------- */
    function checkUnits() {
        console.log(units)
        if(!units){
            let temp = (weather.temp * 1.8) + 32;
            let temp_min = (weather.temp_min * 1.8) + 32;
            let temp_max = (weather.temp_max * 1.8) + 32;
            setWeather({temp : Math.round(temp) , temp_min : temp_min.toFixed(2) , temp_max : temp_max.toFixed(2)})
        }else if(units){
            let temp = (weather.temp - 32) / 1.8;
            let temp_min = (weather.temp_min - 32) / 1.8;
            let temp_max = (weather.temp_max - 32) / 1.8;
            setWeather({temp : Math.round(temp) , temp_min : temp_min.toFixed(2) , temp_max : temp_max.toFixed(2)})
        }
    }
    
    const changeUnitsHandler = () => {
        setUnits(!units)
        checkUnits()
    }
    return(
        <div className="time">
            <div className="clock-row">
                <h3 className="choose-status">
                    <BsStopwatch />
                    Current Time
                </h3>
                <div className="clock">
                    {time.hour} : {time.min.toString().length == 1 ? `0${time.min}` : time.min} : {time.sec.toString().length == 1 ? `0${time.sec}` : time.sec}
                </div>
            </div>
            <CalendarCard monthName={monthName} month={time.month + 1} day={time.day}  dayName={dayName} year={time.year}/>
            <br></br>
            <hr/>
            <div className="clock-row">
                <h3 className="choose-status">
                    <WiDayRain />
                    Weatehr Status

                    <div className="padding-toggle">
                        <div  className="toggle-temprature-cover">
                            <div className="temprature r" id="temprature-3">
                            <input onClick={changeUnitsHandler} type="checkbox" checked={units ? true : false} className="checkbox"/>
                            <div className={`knobs ${units ? 'F': 'C'}`}></div>
                            <div className="layer"></div>
                            </div>    
                        </div> 
                    </div>

                </h3>
                
                <Weatehr weather={weather} area={area} exploreHanlder={exploreHanlder} units={units} setUnits={setUnits} err={err}/>
            </div>
        </div>
    )
}