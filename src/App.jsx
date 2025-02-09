
import { useEffect , useState} from "react"
import axios from "axios"
import SearchBox from './component/searchBox/searchBox'
import ImageGallery from './component/imageGallery/imageGallery'
import './App.css'





function App() {
  const YOUR_ACCESS_KEY = 'IOZLUQoSz2qJ8NgJfR3waMcWB95IXCBZ2ovTXYGPyVY';
  const [photo, setPhoto] = useState([])
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
   const [serchInf, setSearchInf] = useState('');

  //""

  
  useEffect(() => {
    setQuery(serchInf)

    const fetchPhotos = async (query, page) => {
      
      const  response = await axios.get('https://api.unsplash.com/search/photos', {
        params: {
          query: query,
          client_id: YOUR_ACCESS_KEY,
          per_page: 10,
          page: page,
        }
      }); 

      setPhoto(response.data)
    }; fetchPhotos()
    
    console.log(photo)
  },[query, page])

  
  return (
    <>
      <SearchBox serchInf={serchInf}
        setSearchInf={setSearchInf}
      />

      <ImageGallery iteams={photo} />
      
    </>
  )

}
export default App
