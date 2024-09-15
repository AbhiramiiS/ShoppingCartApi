import logo from './logo.svg';
import './App.css';
import AddProducts from './components/AddProduct';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchProducts from './components/SearchProducts';
import ViewProducts from './components/ViewProducts';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<AddProducts/>}/>
      <Route path="/search" element={<SearchProducts/>}/>
      <Route path="/view" element={<ViewProducts/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;