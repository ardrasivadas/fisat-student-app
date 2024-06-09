import logo from './logo.svg';
import './App.css';
import AddStudent from './component/AddStudent';
import Search from './component/Search';
import Navbar from './component/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewAll from './component/ViewAll';

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddStudent/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/viewall' element={<ViewAll/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
