import Navbar from '../navbar/Navbar';
import NewsItem from '../news-item/NewsItem';
import Home from '../home/Home';
import Sources from '../sources/Sources';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path="/" element={ <Home/> }></Route>
        <Route path="/sources" element={ <Sources/> }></Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
