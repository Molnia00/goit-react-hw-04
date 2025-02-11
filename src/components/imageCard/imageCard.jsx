export const ImageCard = ({url, alt , modalImage, regular}) => {
    return (
        <>
            <img
                onClick={() => modalImage(regular)}
                src={url}
                alt={alt}>
                
            </img>
        </>
   )
}







