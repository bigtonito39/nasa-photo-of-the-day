import React from "react";

const NasaDataOrganizer = props => {
console.log(props)
return (
<body>
<header className = "Header-Sec">
 <h1>{props.title}</h1>
</header>
<section className = "Image-sec">
<div classname = "imageMainSec">
<img src={props.url} alt="main image"/>
<p>{props.explanation}</p>
</div> 
  
      
</section>
    
    <footer className = "FooterSec">
<h6>{` by ${props.copyright}`} </h6>
<h6>{props.date}</h6>
    </footer>
    </body>

);

};

export default NasaDataOrganizer;