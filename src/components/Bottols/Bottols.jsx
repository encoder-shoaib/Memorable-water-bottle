import { useEffect } from "react";
import { useState } from "react";
import './Bottols.css'
import Bottol from "../Bottol/Bottol";

const Bottols = () => {

    const [bottles , setBottles] = useState([])

    useEffect(()=>{
        fetch('bottol.json')
        .then(res => res.json())
        .then(data =>setBottles(data))
    }, [])


    return (
        <div>
            <h2>Bottles are here : </h2>
            <div className="bottles">
            {
                bottles.map(bottle => <Bottol key={bottle.id} bottle ={bottle}></Bottol>)
            }
            </div>
        </div>
    );
};

export default Bottols;