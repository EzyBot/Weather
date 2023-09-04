import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import InputComponent from './InputComponent';


function App() {
  const [data, setData] = useState({});
  

  const getWeatherDetails = (input)=>{
    const url =` https://api.openweathermap.org/data/2.5/weather?q=${input}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`;
    if(input !== ""){
      axios.get(url)
      .then((response)=> {
        setData(response.data)
        console.log(response.data)
        console.log(data);
      })
      .catch((er)=>{
        console.log(er);
        alert("Enter a valid city name.")
      })
      }
    }
    //console.log(input);
    
  


  return (
    <div>
      <div className='search'>
      <InputComponent getWeatherDetails={getWeatherDetails} />
      </div>
      <div className='alignCity'><p>{data.name}</p></div>
      <div className='alignTemp'>{data.main? <h1>{data.main.temp}°F</h1> : ""}
      {data.weather? <p>{data.weather[0].description}</p> : ""}</div>
      <div className='bottom'>
      {
        data.name === null?
        "" :
        <table className='table'>
          <tr>
            <th>{data.main? <p><b>Feels Like</b></p> : ""}</th>
            <th>{data.main? <p><b>Humidity</b></p> : ""}</th>
            <th>{data.wind? <p><b>Wind Speed</b></p> : ""}</th>
          </tr>
          <tr>
            <td>{data.main? <p>{data.main.feels_like}°F</p> : ""}</td>
            <td>{data.main? <p>{data.main.humidity}%</p> : ""}</td>
            <td>{data.wind? <p>{data.wind.speed}MPH</p> : ""}</td>
          </tr>
        </table>
      }
      </div>
    </div>
  );
}

export default App;
