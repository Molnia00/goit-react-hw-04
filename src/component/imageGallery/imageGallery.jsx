import { ImageCard } from '../imageCard/imageCard';
import s from './imageGallery.module.css'

function ImageGallery({ iteams , modalImage}) {
    return(
    <>
        <ul className={s.photoList}>
            {iteams.map((item)=> (
                <li className={s.photoLi} key={`${item.id}`}>
                    <ImageCard
                        modalImage={modalImage}
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