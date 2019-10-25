import React from "react";

const NasaDataOrganizer = props => {
console.log(props)
return (
<body>
    <div className = "mainDiv">
<header className = "Header-Sec">
 <h1>{`${props.title}`}</h1>
 <h5>{`  by ${props.copyright} on ${props.date} `} </h5>

</header>
<section className = "Image-sec">
<div classname = "imageMainSec">
<img src={props.url} alt="main image"/>
<p>{props.explanation}</p>
</div> 
  
      
</section>
    
    <footer className = "FooterSec">
<h2>Nasa Project!</h2>
    </footer>
    </div>
    </body>

);

};

export default NasaDataOrganizer;