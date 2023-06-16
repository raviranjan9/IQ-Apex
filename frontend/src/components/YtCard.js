import '../styles/YtCard.css';

const YtCard = (props) =>{
    return(
        <>
            <div className="container">
                {props.link}
            </div>
        </>
    )
}

export default YtCard;