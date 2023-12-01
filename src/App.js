import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './pages/Footer';
import Header from './pages/Header';
import LandingPage from './pages/Landingpage';
import Task from './components/Task';


function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/task' element={<Task/>}/>
      </Routes>
     
      <Footer/>
    </div>
   
  );
}

export default App;
