import React , {useState} from 'react'
import axios from "axios";
import Card from './Card';
import reactDom from 'react-dom';

function SearchForm() {

    const [city, setCity] = useState("");
    const [searchResult,setSearchResult] = useState({
        name : "",
        mainCondition : "",
        description : "",
        minTemp : "",
        maxTemp : "",
        icon : ""
    })
    
    const backroundStyle = {
        position: "absolute",
        top : "50%",
        left: "50%",
        transform:"translate(-50%,-50%)",
        width:"fit-content",
        display:"block",
        textAlign:"center",
        padding:"12px 12px",
        alignItems:"center",
        borderRadius:"15px",
        backgroundColor:"#FCECDD"
    }
    const imageStyle = {
        width:"230px",
        height:"220px",
        borderRadius:"15px",
        margin:"20px auto"
    }
    const labelStyle = {
        display:"block",
        width:"400px",
        margin:"25px auto",
        fontSize:"38px",
        backgroundColor:"#FCECDD"
    }
    const inputStyle = {
        width:"600px",
        textDecoration:"underline",
        margin: "0 auto",
        border:"none",
        padding:"15px 15px",
        backgroundColor:"#FCECDD",
        fontSize:"18px",
        textAlign:"center"
    }
    const buttonStyle = {
        border:"none",
        display:"block",
        padding:"7px 3px",
        textAlign:"center",
        margin:"20px auto",
        width:"50px",
        height:"50px",
        borderRadius:"50px",
        cursor:"pointer",
        fontSize:"17px",
        backgroundColor:"#FF7C7C"
    }
    const changeHandler = (event) => {
        const cityName = event.target.value
        setCity(cityName);
    }
    const clickHandler = () => {

         axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_APIKEY}`)
            .then(function (response) {
                if(response.data.cod === 200){
                    console.log(response)
                   setSearchResult({
                       name: response.data.name,
                       mainCondition : response.data.weather[0].main,
                       description : response.data.weather[0].description,
                       minTemp : Math.floor(response.data.main.temp_min - 273.15),
                       maxTemp : Math.floor(response.data.main.temp_max - 273.15),
                       icon : response.data.weather[0].icon
                    })
                }
            })
            .catch(function (error) {
            console.log(error);
            })
    }

    return (
        
            
        <div>
        {!searchResult.name ? <div style={backroundStyle}>
        
            <img  style={imageStyle} src="logo.png" alt="Weather app logo"></img>
            
            <label style={labelStyle}>Serch Weather By City Name </label>
            
            <input type="text" placeholder="City Name" style={inputStyle} name="city" value={city} onChange={changeHandler}></input>

            <button style={buttonStyle} onClick={clickHandler}><i style={{size:"10px",backgroundColor:"#FF7C7C"}} class="fas fa-search"></i></button>

        </div> : <Card 
            name = {searchResult.name}
            mainCondition={searchResult.mainCondition}
            description={searchResult.description}
            minTemp={searchResult.minTemp}
            maxTemp={searchResult.maxTemp}
            icon={searchResult.icon}

        />
        }
        </div>
        
    )
}

export default SearchForm




