import { useEffect , useState} from "react"
import axios from "axios"
import SearchBox from './components/searchBox/searchBox'
import ImageGallery from './components/imageGallery/imageGallery'
import './App.css'
import LoaderBeing from './components/loader/loader'
import LoadMoreBtn from './components/loadMore/btnLoadMore'
import ImageModal from './components/modalka/modalWindow'
import ReactModal from 'react-modal'
import ErrorMsg from './components/errorMessage/errorMsg'
ReactModal.setAppElement('#root');


function App() {
  const YOUR_ACCESS_KEY = 'IOZLUQoSz2qJ8NgJfR3waMcWB95IXCBZ2ovTXYGPyVY';
  const [photo, setPhoto] = useState([])
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [ errorMsgState, setErrorMsg] = useState(false);

  function onSubmit(newQ) {
    setQuery(newQ)
    setPhoto([])
    setPage(1)
    setErrorMsg(false)
  }
  
  function onNextPage() {
    setPage(prevPage => prevPage + 1)
  }

  useEffect(() => {
     
    if (!query.trim()) return;
    const fetchPhotos = async () => {
      setIsLoading(true)
      try {
      
        const response = await axios.get(
          'https://api.unsplash.com/search/photos',
          {
            params: {
              query: query,
              client_id: YOUR_ACCESS_KEY,
              per_page: 12,
              page: page,
            }
          }
        );

        setPhoto((prevPhoto) => [...prevPhoto, ...response.data.results]); 
      } catch {
        setErrorMsg(true)
      } finally {
        setIsLoading(false)
      }
    };
    fetchPhotos()
  }
  ,[query, page])

  const modalImage = image => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };





  return (
    <>
      <SearchBox
        onSubmit={onSubmit}/>
      <ImageGallery iteams={photo}
        modalImage={modalImage} />
      {isLoading && <LoaderBeing />}
      {photo.length > 0 &&
      <LoadMoreBtn
          onNextPage={onNextPage} />}
      {errorMsgState && <ErrorMsg/>}
      <ImageModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        image={selectedImage}
      />

    </>
  )

}
export default App