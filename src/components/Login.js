import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate()
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loginform, setloginform] = useState({email:'',password:''});
  const handleChange=(e)=>{
    var name=e.target.name
    var value=e.target.value
    setloginform({...loginform,[name]:value})
    console.log(loginform)
  }
      const handleSubmit=(e)=>{
        // e.preventDefault();
        if(loginform.email && loginform.password ){
            const newLoginform={id:new Date().getTime().toString(), ...loginform};
            setUsers([...users,newLoginform]);
            setloginform({name:'',email:'',password:'',password2:'',tc:true});
            console.log(loginform)
        }
        var requestOptions = {
        
          method: "POST",
          headers: {
      
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(loginform),
         redirect: 'follow'
         
        };
      
        fetch("http://127.0.0.1:8000/api/user/login/", requestOptions)
        .then(response => response.json())
        .then(result =>{ 
          if(result?.errors){
            setError(result.errors?.email[0])
            console.log('email checking ',result.errors?.email[0]);
          }
          localStorage.setItem('access_token', result.token.access)
        navigate("/Imageupload/")})
        .catch(error => setError(error.message));
      
      }   
    
      return (
        <div className="form">
        <div className="form-body">
            <div className="email">
                <label className="form__label" for="email">Email </label>
                <input  type="email" id="email" name="email" onChange={handleChange} className="form__input" placeholder="Email"/>
            </div>
            <div className="password">
                <label className="form__label" for="password">Password </label>
                <input className="form__input" type="password"  id="password" name="password" onChange={handleChange} placeholder="Password"/>
            </div>
        </div>
        <div class="footer">
            <button type="submit" onClick={()=>handleSubmit()} class="btn">Login</button>
        </div>
    </div>
      );
    };

export default Login