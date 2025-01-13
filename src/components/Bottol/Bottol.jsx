import './Bottol.css'
const Bottol = ({bottle ,handleAddToCart}) => {
    const {name , price,img} = bottle;
    return (
        <div className='bottle'>
            <p>Name : {name}</p>
            <img src={img} alt="" />
            <p>price : {price}$</p>
            <button onClick={()=>handleAddToCart(bottle)}>Purchase</button>
        </div>
    );
};

export default Bottol;