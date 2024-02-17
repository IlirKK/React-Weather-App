
import { useState, useEffect } from 'react';
import './App.css';


// const Fetch = () => {const [state, setState] = useState([]);
//   useEffect(() => {
//     fetch('http://api.weatherapi.com/v1/current.json?key=553c60f7a8fc4b05819183408241302&q=10001' + '')
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         console.log(data);
//         setState(data);
//       });
//   }, []);
// };
// export default Fetch;


export default function Weather() {
  const [city, setCity] = useState();
  const [cityButton, setCityButton] = useState(0);
  const [response, setResponse] = useState();
  useEffect(() => {
    fetch('http://api.weatherapi.com/v1/current.json?key=553c60f7a8fc4b05819183408241302&q=' + city)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        console.log(json)
        setResponse(json);
      })
    setCity('')
  }, [cityButton])

  return <div className='weather'>

    <h4>Ilir's Weather API App</h4>

    <div>
      <input value={city} onChange={(evnt) => { setCity(evnt.target.value) }}></input>
      <button onClick={(evnt) => { setCityButton(cityButton + 1) }}>Go!</button>
    </div>
    <WeatherResponse data={response} ></WeatherResponse>

  </div>
}


function WeatherResponse({ data }) {
  return <div>
    <br></br>
    <div>City: {data?.location?.name}</div>
    <div>Country: {data?.location?.country}</div>
    <div>Local Time: {data?.location?.localtime}</div>
    <div>Weather: {data?.current?.feelslike_c}°C</div>
  </div>
}

