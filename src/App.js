import './App.css';
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/Navbar';
import Home from './views/Home';
import Grocery from './views/Grocery';
import Pantry from './views/Pantry';
import Ingredients from './views/Ingredients';
import SignUpForm from './users/SignUp';
import LoginForm from './users/LoginForm';
import Error404 from './views/Error404';


import { useEffect, useContext, useState } from 'react';
import { CurrentUser } from './context/CurrentUser';

function App() {

  const [routeNum, setRouteNum] = useState('')
  const { currentUser } = useContext(CurrentUser)


  useEffect(() => {
    if (currentUser != null) {
      setRouteNum(currentUser.user_id)
    }
  }, [currentUser])

  return (
    <div className='absolute_div'>
      <NavBar />
      <Routes>
        <Route exact path='/' element={Home()} />
        <Route exact path={`/grocery${routeNum}`} element={Grocery()} />
        <Route exact path={`/pantry${routeNum}`} element={Pantry()} />
        <Route exact path={`/ingredients${routeNum}`} element={Ingredients()} />
        <Route exact path='users/signup/' element={SignUpForm()} />
        <Route exact path='users/login/' element={LoginForm()} />
        <Route path='*' element={Error404()} />
      </Routes>
    </div>




  );
}

export default App;
