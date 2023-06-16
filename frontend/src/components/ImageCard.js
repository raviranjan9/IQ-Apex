import '../styles/ImageCard.css';

const ImageCard = (props) => {
    return(
        <div className='image-card'>
            <img src={props.image} alt=""/>
        </div>
    )
}
export default ImageCard;