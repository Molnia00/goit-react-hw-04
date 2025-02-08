import { ImageCard } from '../imageCard/imageCard';


function ImageGallery({ iteams }) {
    return(
    <>
        <ul>
            {iteams.map((item)=> (
                <li key={`${item.id}`}>
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