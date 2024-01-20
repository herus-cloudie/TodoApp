import { useState } from "react";
import ExploreButton from "./exploreButton";
export default function Weatehr({weather , area , exploreHanlder , err , units , setUnits , checkUnits}){
    let [search , setSearch] = useState()
    let [input , setInput] = useState('')
    const changeWeatherHandler = () => setSearch(true)
    const changeHandler = (e) => setInput(e.target.value)
    const searchHandler = () =>{
        setSearch(false)
        setUnits(false)
        exploreHanlder(input)
    } 
    console.log(units)
    return(
        <>
            <div className="weather">
                <div className="weather-container">
                    <div className="cloud frontt">
                    <span className="left-front"></span>
                    <span className="right-front"></span>
                    </div>
                    <span className="sun sunshine"></span>
                    <span className="sun"></span>
                    <div className="cloud back">
                    <span className="left-back"></span>
                    <span className="right-back"></span>
                    </div>
                </div>

                <div className="weather-header">
                    <span>{area.country}<br/>{area.city}</span>
                </div>
                <div className="margin-temp">
                    <h5>min {weather.temp_min}°</h5>
                    <h5>max {weather.temp_max}°</h5>
                </div>
                <span className="temp">{Math.round(weather.temp)}°<small className="small">{units ? 'F' : 'C'}</small></span>

                <div className="temp-scale">
                    {
                        !search
                        ? <button onClick={changeWeatherHandler} className="btn">
                            <i className="animation"></i>Change Area<i className="animation"></i>
                        </button> 
                        : <div className="group">
                            <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
                                <g>
                                    <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                                </g>
                            </svg>
                            <input onChange={changeHandler} placeholder="Search the town" type="search" className="input-search"/>
                        </div>
                    }
                </div>
                
            </div>
            <div className="search-margin">
                {
                    search ? <ExploreButton onClick={searchHandler}/> : null
                }
                {
                    err != '' ? <p className="err">{err}</p> : null
                }
            </div>
        </>
        
    )
}