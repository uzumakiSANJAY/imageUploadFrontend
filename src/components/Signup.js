import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
const navigate = useNavigate()
const [error, setError] = useState(null);
const [users, setUsers] = useState([]);
const [signupform, setsignupform] = useState({name:'', email:'',password:'',password2:'',tc:true});
const handleChange=(e)=>{
  var name=e.target.name
  var value=e.target.value
  setsignupform({...signupform,[name]:value})
  console.log(signupform)
}
const handleSubmit=(e)=>{
  // e.preventDefault();
  if(signupform.name && signupform.email && signupform.password && signupform.password2 ){
      const newSignupform={id:new Date().getTime().toString(), ...signupform};
      setUsers([...users,newSignupform]);
      setsignupform({name:'',email:'',password:'',password2:'',tc:true});
      console.log(signupform)
  }
  var requestOptions = {
  
    method: "POST",
    headers: {

      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(signupform),
   redirect: 'follow'
   
  };
  
  // fetch("http://127.0.0.1:8000/api/user/register/", requestOptions)
  fetch("https://imageupbackend.herokuapp.com/api/user/register/", requestOptions)
  .then(response => response.json())
  .then(result =>{ 
    if(result?.errors){
      setError(result.errors?.email[0])
      console.log('email checking ',result.errors?.email[0]);
    }
    localStorage.setItem('access_token', result.token.access)
  // if(otpPhone){
  //   storePhone(result.token.access)
  // }
  navigate("/login/")})
  .catch(error => setError(error.message));

}
  return (
    <div className="form">
          <div className="form-body">
              <div className="username">
                  <label className="form__label" for="firstName">Name</label>
                  <input className="form__input" type="text" name="name" onChange={handleChange} id="name" placeholder="First Name"/>
              </div>
              <div className="email">
                  <label className="form__label" for="email">Email </label>
                  <input  type="email" id="email" name="email" onChange={handleChange} className="form__input" placeholder="Email"/>
              </div>
              <div className="password">
                  <label className="form__label" for="password">Password </label>
                  <input className="form__input" type="password"  id="password" name="password" onChange={handleChange} placeholder="Password"/>
              </div>
              <div className="confirm-password">
                  <label className="form__label" for="confirmPassword">Confirm Password </label>
                  <input className="form__input" type="password" id="password2" name="password2" onChange={handleChange} placeholder="Confirm Password"/>
              </div>
          </div>
          <div class="footer">
              <button type="submit" onClick={()=>handleSubmit()} class="btn">Register</button>
          </div>
      </div>
  );
};


export default Signup