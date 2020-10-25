import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Header from '../Header/Header';
import sazek from '../Image/Sajek.png';
import sreemangal from '../Image/Sreemongol.png';
import sundarban from '../Image/sundorbon.png';
import { Link } from 'react-router-dom';


 export const information = [
    {
        id: 0,
        name: "Cox's Bazar",
        details: "Cox's Bazar is located 150 km (93 mi) south of the divisional headquarter city of Chittagong. ... The beach in Cox's Bazar has a gentle slope and with an unbroken length of 155 km (96 mi) it is often termed the 'longest natural unbroken sea beach' in the world.",
        img: sazek,
        background: "https://i.ytimg.com/vi/qG3pwvXwvbI/maxresdefault.jpg"
    },
    {
        id: 1,
        name: "Sreemangal",
        details: "Sreemangal is situated in Moulvibazar district in sylhet division. Sreemangal is an Upazila. It is famous for tea garden. Rain all time occurs here. Nature has adorned sreemangal with green tress. Its natural scenery is very charming. It soothes one’s eyes. Birds are twittering always here. The first tea garden in Bangladesh which names “Malni chho ra tea garden” is here. Only one tea research institute in Bangladesh which name is BTRI (Bangladesh Tea Research Institute) is situated in Sreemangal. The terraced tea gardens, plantations and evergreen hills of sreemangal are wonderful treats for the tourists. ",
        img: sreemangal,
        background:"https://lh3.googleusercontent.com/proxy/Zy11xtwbdX2RhAiCkF-BAwYgbUGVPv0fhejAViBuTyDrVm21m8OONESGOnvOWUgJiX1Md3UdIiaGCNIP-2Ky8vRoXqLouhrpyJjvQ2SiVubFPgd3aiXqsm5P3A"
    },
    {
        id: 2,
        name: "Sundarban",
        details: "The Sundarbans mangrove forest, one of the largest such forests in the world (140,000 ha), lies on the delta of the Ganges, Brahmaputra and Meghna rivers on the Bay of Bengal. It is adjacent to the border of India's Sundarbans World Heritage site inscribed in 1987.",
        img: sundarban,
        background:"http://downloadwallpapers-net.s3.amazonaws.com/sundarban-largest-mangrove-forest.jpg"
    }
]
const Home = () => {
    
    const [place, setPlace] = useState([information]);
    const [click, setClick] = useState([]);

    const handleClick = (e) => {        
        setClick(e);       
    }

    return (
        <div className="f-flex flex-wrap">
            <Header />
            <img className="bg " src={click.background} alt="" />
            <div className="d-flex container-fluid">
                <div className="col-md-5 p-5 ">
                    <h1 style={{fontSize: '70px'}}> {click.name}</h1>
                    <p style={{fontSize: '20px', marginTop: '4px'}}>{click.details}</p>
                    <Link to={"/booking/"+click.id}>
                    <Button  variant="warning">Booking -></Button>
                    </Link>
                    
                </div>
                <div className="col-md-7 ml-2" >
                    {
                        information.map(info => <img className="image" onClick={() => handleClick(info)} onLoad={() => handleClick(info)}  src={info.img} key={info.id} alt="" />)
                    }
                    
                </div>
            </div>
        </div>

    );
};

export default Home;