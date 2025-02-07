import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

function SearchBox({onSubmit}) {
    
  const [SerchInf, setSearchInf] = useState('');
  
  
  function handleChange(event) {
    setSearchInf(event.target.value);
    

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (SerchInf.trim() === '') {
      toast.error('Please enter a correct value to search for!' );
            return;
    }
        setSearchInf('');
        onSubmit(SerchInf);
    };
  return (
    <>
      <header>
        <Toaster position="top-right" />
        <form onSubmit={handleSubmit}>
          
          <input
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