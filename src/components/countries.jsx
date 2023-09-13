import { useEffect, useState } from "react"
import Country from "./country"


const Countries = () => {

    const [ countries, setcountries] = useState([])


    useEffect ( () => {
        fetch ('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then( data => setcountries(data))
    } , [])
    return (
        <div className="center">
            <h2>countries: {countries.length} </h2>
           <div className="country-container"> 
           {
                countries.map( country => <Country key={country.cca3} country= {country}></Country>)
            }
           </div>
        </div>
    )
}

export default Countries