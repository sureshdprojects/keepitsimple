import { Route, Routes } from 'react-router-dom';
import './app.css';
import Header from './components/header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import WriteForUs from './components/WriteForUs/WriteForUs';
import SpecificPost from './components/Specific Post/SpecificPost';
import Upload from './components/upload/Upload';
import Thanks from './components/thanks/Thanks';

// import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='content-container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/writeforus" element={<WriteForUs />} />
          <Route path="/posts/:id" element={<SpecificPost />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/thanks" element={<Thanks />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
