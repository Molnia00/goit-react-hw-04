
import { useEffect , useState} from "react"
import axios from "axios"
import SearchBox from './component/searchBox/searchBox'
import ImageGallery from './component/imageGallery/imageGallery'
import './App.css'





function App() {

  const [photo , setPhoto] = useState([])
  const YOUR_ACCESS_KEY = 'IOZLUQoSz2qJ8NgJfR3waMcWB95IXCBZ2ovTXYGPyVY';
//""


  useEffect(() => {
    const fetchPhotos = async (query, page) => {
      const const response = await axios.get("https://api.unsplash.com/search/photos", {
        params: {
            query: query,
            client_id: YOUR_ACCESS_KEY,
            per_page: 10,
            page: page,
        }
      });
      
    return response.data;
    }
  });

  
  return (
    <>
    <SearchBox />
    </>
  )
}

export default App
