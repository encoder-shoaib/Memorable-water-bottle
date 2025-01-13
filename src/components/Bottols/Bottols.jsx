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

    const [cart ,setCart] = useState([]);

    const handleAddToCart = (bottle) =>{
        console.log('all bottles are here')
        const newCart = [...cart ,bottle]
        setCart(newCart)
    }


    return (
        <div>
            <h2> Available Bottles are here : </h2>
            <h4>Cart : {cart.length}</h4>
            <div className="bottles">
            {
                bottles.map(bottle => <Bottol 
                    key={bottle.id} 
                    handleAddToCart ={handleAddToCart}
                    bottle ={bottle}
                    ></Bottol>)
            }
            </div>
        </div>
    );
};

export default Bottols;