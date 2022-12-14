import './App.css';

//App Route Config
import { Routes, Route } from 'react-router-dom'


//Components Directory
import NavBar from './components/Navbar';
import Header from './components/Header';

//Views Directory
import Home from './views/Home';
import Grocery from './views/Grocery';
import Pantry from './views/Pantry';
import Ingredients from './views/Ingredients';
import UserScreen from './views/User';
import SignUpForm from './users/SignUp';
import Error404 from './views/Error404';

function App() {



  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes>
        <Route exact path='/' element={Home()} />
        <Route exact path='grocery/' element={Grocery()} />
        <Route exact path='pantry/' element={Pantry()} />
        <Route exact path='ingredients/' element={Ingredients()} />
        <Route exact path='users/' element={UserScreen()} />
        <Route exact path='users/signup/' element={SignUpForm()} />
        <Route path='*' element={Error404()} />
      </Routes>

    </div>
  );
}

export default App;
