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
  

  function onSubmit(newQ) {
    setQuery(newQ)
setPhoto([])
setPage(1)
  }
  
  useEffect(() => {
     if (!query.trim()) return;
   
    try {

      const fetchPhotos = async () => {
      
        const response = await axios.get('https://api.unsplash.com/search/photos', {
          params: {
            query: query,
            client_id: YOUR_ACCESS_KEY,
            per_page: 10,
            page: page,
          }
        });

        setPhoto(response.data.results)
      }; fetchPhotos()
    
      console.log(photo)
    }
     catch {
      console.log("Error fetching images:");
     }
    }
  ,[query, page])

  
  return (
    <>
      <SearchBox 
    
        onSubmit={onSubmit}
      />

      <ImageGallery iteams={photo} />
      
    </>
  )

}
export default App