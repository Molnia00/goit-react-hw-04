import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
function SearchBox({ onSubmit}) {
    
 const [serchInf, setSearchInf] = useState('');
  function handleChange(event) {
    setSearchInf(event.target.value);
    

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (serchInf.trim() === '') {
      toast.error('Please enter a correct value to search for!' );
            return;
    }
onSubmit(serchInf);
        setSearchInf('');
        
    };
  return (
    <>
      <header>
        <Toaster position="top-right" />
        <form onSubmit={handleSubmit}>
          
          <input
            value={serchInf}
            type="text"
            placeholder="Search "
            onChange={handleChange}
          />
          
              <button type="submit">Submit</button>
           </form>
       </header>
    </>
)
    
}








export default SearchBox