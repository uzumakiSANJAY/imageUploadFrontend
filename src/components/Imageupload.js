import React , {useState} from 'react';
import { Link } from "react-router-dom";

const Imageupload = () => {
  const [image, setImage] = useState(null);
  const handleSubmit=()=>{
  var myHeaders = new Headers();
myHeaders.append("Cookie", "csrftoken=EmLuPRUNkf6K6gJITHLqCb44GCBa3XdZbwQ9z0697rglSv3GfLbtztOqBKdfAxaB");

var formdata = new FormData();
// formdata.append("image", fileInput.files[0], "/C:/Users/hola9/Desktop/Evlove.jpg");
if (image !== null) {
  formdata["image"]= image;
}
formdata.append("image", image)
var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

// fetch("http://127.0.0.1:8000/api/imageUpload/", requestOptions)
fetch("https://imageupbackend.herokuapp.com/api/imageUpload/", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  console.log("checking value",formdata)
  localStorage.setItem("payAdsData",JSON.stringify(formdata)) 
}
  return (
    <>
    
    <div className="field-group">
    <label>Image</label>
    <input
      type="file"
      className="form-control"
      onChange={(e) => setImage(e.target.files[0])}
        />
    </div>
    <div className="footer">
              <button type="submit" onClick={handleSubmit}  class="btn">Submit</button>
    </div>
    <div className="footer">
    <Link className="Image" to="/Viewimg/">
              <button type="submit"  class="btn">View Images</button>
              </Link>
    </div>
    </>
  )
}

export default Imageupload