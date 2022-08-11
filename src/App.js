
import './App.css';
import { BrowserRouter as Router,Routes ,  Route } from "react-router-dom";
import Mainpage from './components/Mainpage';
import Signup from './components/Signup'
import Login from './components/Login'
import Imageupload from './components/Imageupload'
import Viewimg from './components/Viewimg';
function App() {
  return (
    <>
    <Router>
    <Routes>
          <Route path='/' exact element={<Mainpage />} />
          <Route path='/signup' exact element={<Signup/>} />
          <Route path='/login' exact element={<Login/>} />
          <Route path='/Imageupload' exact element={<Imageupload />} />
          <Route path='/Viewimg' exact element={<Viewimg />} />
    </Routes> 
    </Router>   
    </>
  );
}

export default App;
