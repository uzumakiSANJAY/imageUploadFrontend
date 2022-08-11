import React, { useEffect , useState }  from 'react'
import './Viewimg.css';
function Viewimg() {
    const [image,setImage] = useState([])
    const [error,setError] = useState(null)
    useEffect(() => {
      
        // fetch(`http://127.0.0.1:8000/api/imageUpload/`)
        fetch(`https://imageupbackend.herokuapp.com/api/imageUpload/`)
         .then((response) => response.json())
         .then((actualData) => setImage(actualData))
         .then((actualData) => console.log(JSON.stringify(actualData)))
         .catch((err) => {
          console.log(err.message);
         });
       }, []);
    
    
  return (
    <ul>
        {image.map(person => {
          return (
            <li key={person.id}>
              <img className="zoom" src={person.image}   alt="" srcSet="" width={"200px"} height={"200px"} />
            
            </li>
          )
        })}
      </ul>
  )
}

export default Viewimg