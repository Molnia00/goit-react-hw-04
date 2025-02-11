export const ImageCard = ({url, alt , modalImage}) => {
    return (
        <>
            <img
                onClick={modalImage}
                src={url}
                alt={alt}>
                
            </img>
        </>
   )
}







