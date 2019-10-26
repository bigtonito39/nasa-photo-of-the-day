import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

const Button = styled.button`
padding: 6px 10px;
  margin: 5px;
  border: none;
  border-radius: 12px;
  color: white;
  background: green;

`;

const ImageDiv = styled.div`

background-image: url(http://t0.gstatic.com/images?q=tbn:ANd9GcQ9u48pu-6IB2FnnYl_H-15le_g8Dkt5d5RN-VWiWIl_-dyJdaa);
background-repeat: no-repeat;

  
  `;

const H2Element = styled.h2 `

color:white;

`;

const NasaDataOrganizer = props => {


function changeNumber (){
    
   props.setNumber1(props.number1 + 1)

};



return (

    <div className = "mainDiv">
<header className = "Header-Sec">

 <h1>{`${props.title}`}</h1>
 <h5>{`  by ${props.copyright} on ${props.date} `} </h5>
  
 <Button onClick= {changeNumber} >Click for attendance</Button>
 <H2Element>{`You are the the student ${props.number1} to visit this site!`}</H2Element> 
</header>
<section className = "Image-sec">
<ImageDiv>
<img src={props.url} alt="main"/>
<p>{props.explanation}</p>
</ImageDiv> 

      
</section>
    
    <footer className = "FooterSec">
<h2>Nasa Project!</h2>
    </footer>
    </div>
 
);

};

export default NasaDataOrganizer;