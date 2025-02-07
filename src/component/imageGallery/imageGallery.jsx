import { ImageCard } from '../imageCard/imageCard';


function ImageGallery({ iteams }) {
    return(
    <>
        <ul>
            {iteams.map((item, index)=> (
                <li key={`${item.id}-${index}`}>
                    <ImageCard
                        url={item.urls.small}
                        alt={item.alt_description}
                    />
                </li>
                
            )) 
                
          }  
        </ul>
    </>)
    
}








export default ImageGallery