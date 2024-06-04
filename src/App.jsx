import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/Navbar'
import Home from './pages/Home';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App
