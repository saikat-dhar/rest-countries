import { useState } from "react";

const Country = ({country, handelVisitedCountries,  handelVisitedFlags}) => {
    console.log(country);
    const {name, flags, population, region, timezones } = country;

    const [visited, setVisited] = useState(false);

    const handelVisited = () => {
        setVisited(!visited)
    }

    return (
        <div className={`box  ${visited ? 'vst' : 'non-vst'}`}>
           <h3 style={{color: visited ? 'purple' : 'red'}}> name: {name.common} </h3>
           <img src= {flags.png} alt="" />
           <p> population: {population} </p>
           <h5> region: {region} </h5>
           <p> TimeZones: {timezones[0]} </p> 
           <br />
           <button onClick={() => handelVisitedCountries(country)}>mark visited</button>
           <br />
           <button onClick={() =>  handelVisitedFlags(country.flags.png)}>Add Flag</button>
           <button onClick={handelVisited}>{visited? 'visited' : 'going'}</button>
           { visited ? 'i want to visited' : 'i want to going'}
           
        </div>
    );
};

export default Country;