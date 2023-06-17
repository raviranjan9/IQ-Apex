import '../styles/YtCard.css';

const YtCard = (props) =>{
    return(
        <>
            <div className="container">
                <div className='item'>
                  {props.link}
                </div>
                
            </div>
        </>
    )
}

export default YtCard;