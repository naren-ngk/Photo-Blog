import ImageShow from './imageShow';
import './imageList.css';

function imaageList({ images }) {
    const renderedImages = images.map((image) => {
        return <ImageShow key={image.id} image={image} />
    });

    return <div className="image-list">{renderedImages}</div>
}

export default imaageList;