export const ImageCard = ({url, alt , modalImage}) => {
    return (
        <>
            <img
                onClick={() => modalImage(url)}
                src={url}
                alt={alt}>
                
            </img>
        </>
   )
}







