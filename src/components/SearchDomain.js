import Information from "./Information";
import {useState} from 'react';
import axios from 'axios';

function SearchDomain(props){

    const [ipAddress, setIpAddress] = useState('');
    const [information, setInformation] = useState({
        ip:'192.212.174.101',
        isp:'Southern California Edison'
    });
    const [location, setLocation] = useState({
        city:'South San Gabriel',
        region:'California',
        postalCode:'',
        timezone:'-07:00'
    });
    const [style, setStyle] = useState('error');

    async function getData(){
        try{
            const {data} = await axios.get(`https://geo.ipify.org/api/v1?apiKey=at_AaqLb8oLa9ynWTVR0TJM0cwHlGdXW&ipAddress=${ipAddress}`);
            if(data){
                setStyle('error');
            }
            setInformation(data);
            setLocation(data.location);
            props.addLocationMap(data.location.lat,data.location.lng);
        }catch(err){
            setStyle('error error-visibility');
        }
    }

    function handleSubmit(e){
        e.preventDefault();
        getData();
    }

    return(
        <div className="search-domain">
            <h1>IP Address Tracker</h1>
            <form onSubmit={handleSubmit}>
                <div className="form">
                    <input type="text" value={ipAddress} onChange={(e)=>setIpAddress(e.target.value)} placeholder="Search for any IP address or domain"/>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
                            <path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6"/>
                        </svg>
                    </button>
                </div>
            </form>
            <p className={style}><span>Enter a valid IP, please</span></p>
            <Information information={information} location={location}/>
        </div>
    )
}

export default SearchDomain;