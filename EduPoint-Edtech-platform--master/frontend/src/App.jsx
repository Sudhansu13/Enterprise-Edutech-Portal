import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Courses from './pages/Courses';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Admin from './pages/Admin';
import AdminLogin from './pages/AdminLogin';
import AdminCourses from './pages/AdminCourses';
import NewCourse from './pages/NewCourse';
import EditCourse from './pages/EditCourse';
import Purchased from './pages/Purchased';

function App() {
  return (<div>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}>
          <Route path='home'element={<Home />} />
          <Route path='courses'element={<Courses />} />
          {/* <Route path='courses/:id' element={<Course/>}/> */}
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="purchasedcourses" element={<Purchased/>}/>
          </Route>
          <Route path='admin' element={<Admin/>}>
          <Route path='adminLogin' element={<AdminLogin/>}/>
          <Route path='courses' element={<AdminCourses/>}/>
          <Route path='NewCourse' element={<NewCourse/>}/>
          <Route path='EditCourse/:id' element={<EditCourse/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
