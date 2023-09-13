import { useEffect, useState } from "react"
import Country from "./country"


const Countries = () => {

    const [ countries, setcountries] = useState([])

    const [visitedCountries, setVisitedCountries] = useState([])

    const [visitedFlag, setvisitedFlag] = useState([])


    useEffect ( () => {
        fetch ('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then( data => setcountries(data))
    } , [])

    const handelVisitedCountries = country => {
        console.log('you have to vosited this country');
        const newVisitedCountry = [...visitedCountries , country];
        setVisitedCountries(newVisitedCountry);
    }   
    
    const handelVisitedFlags = flag => {
        const newhandelvisitedflag = [...visitedFlag , flag]
        setvisitedFlag(newhandelvisitedflag)
    }

    return (
        <div className="center">
            <h2>countries: {countries.length} </h2>

            <div>
                <h3>visited countries: {visitedCountries.length} </h3>
                <ul>
                   {
                     visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                   }
                </ul>
            </div>

            <div className="flag-container">
                   {
                    visitedFlag.map(flag => <img key={IDBIndex} src={flag}></img>)
                   }
            </div>

           <div className="country-container"> 
           {
                countries.map( country => <Country key={country.cca3}
                     country= {country} 
                     handelVisitedCountries={handelVisitedCountries}
                     handelVisitedFlags= {handelVisitedFlags}
                     ></Country>)
            }
           </div>
        </div>
    )
}

export default Countries