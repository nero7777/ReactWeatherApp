import React from 'react'
import "./card.css"

function Card(props) {
    return (
        <div className="container  vh-100 d-flex align-items-center justify-content-center">

        <div className="card">
            <div className="card-body flex-column  text-center ">
           
                <h5 className="card-title" style={{marginTop:"20px" ,fontSize:"44px"}}>{props.name}</h5>
            <img src= {`http://openweathermap.org/img/wn/${props.icon}@4x.png`}  alt="..." />
            <div className="row" style={{padding:"5px 5px"}}>
            <div className="col-6">
                <h3 className="card-title" style={{textDecoration:"underline",marginBottom:"10px"}}>Weather</h3>
                </div>
                <div className="col-6" >
                <p className="card-text" style={{textDecoration:"underline",marginBottom:"5px"}}>Temp ( ℃ )</p>
                </div>

                <div className="col-6">
                <h3 className="card-title">{props.mainCondition}</h3>
                </div>
                <div className="col-6">
                <p className="card-text">{props.minTemp +" "}℃</p>
                </div>
                <div className="col-6">
                <p className="card-text">{props.description}</p>
                </div>
                <div className="col-6">
                <p className="card-text">{props.maxTemp +" "}℃</p>
                </div>
            </div>
                
               <a href="/" class="btn btn-primary" style={{marginTop:"30px",marginBottom:"10px",width:"200px",borderRadius:"25px"}}>Back</a>
            </div>
        </div>
        </div>
    )
}

export default Card
