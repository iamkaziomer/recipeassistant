  import './App.css';
  import { BrowserRouter, Routes, Route } from 'react-router-dom';
  import Categories from './components/Categories';
  import Home from './pages/Home';
  import Italian from './components/cuisine/Italian';
  import American from './components/cuisine/American';
  import Thai from './components/cuisine/Thai';
  import Japanese from './components/cuisine/Japanese';
  import Searched from './pages/Searched';
  import Recipe from './pages/Recipe';
  

  function App() {
    return (
      <div className="App">
        <BrowserRouter>
          <Categories/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cuisine/Japanese" element={<Japanese />} />
            <Route path="/cuisine/Italian" element={<Italian />} />
            <Route path="/cuisine/American" element={<American />} />
            <Route path="/cuisine/Thai" element={<Thai />} />
            <Route path="/Searched/:search" element={<Searched/>}></Route>
            <Route path="/Recipe/:name" element={<Recipe/>}></Route>
            

          </Routes>
        </BrowserRouter>
      </div>
    );
  }

  export default App;
