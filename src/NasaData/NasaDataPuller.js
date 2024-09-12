import React, {useState, useEffect} from "react";
import axios from "axios";
import NasaDataOrganizer from "./NasaDataOrganizer";

export default function NasaDataPuller () {

const [nasaData, setNasaData] = useState([])
const [number1,setNumber1] = useState(0);

useEffect(()=>{
console.log(number1)


},[number1])

useEffect(()=>{
    axios.get("https://api.nasa.gov/planetary/apod?api_key=8vd3LW7hIZmiWlOvcIsjgCC8m6ofKN92WwNE6IqC")
    .then(response => {
        console.log(response)
    return setNasaData(response.data)
    })
    .catch(err => {
        console.log(`the error is a ${err}`);
    });

},[])

console.log(nasaData)
return (
<div className="nasaElement">
    <NasaDataOrganizer number1={number1} setNumber1={setNumber1} copyright={nasaData.copyright} 
    date={nasaData.date} explanation={nasaData.explanation}
    url={nasaData.url} title={nasaData.title}
    />
 

</div>

);
}