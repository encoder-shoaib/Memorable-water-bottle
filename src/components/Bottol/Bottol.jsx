import './Bottol.css'
const Bottol = ({bottle}) => {
    const {name , price,img} = bottle;
    return (
        <div className='bottle'>
            <img src={img} alt="" />
            <p>Name : {name}</p>
            <p>price : {price}$</p>
        </div>
    );
};

export default Bottol;