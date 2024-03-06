import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Users from './pages/Users';
import Posts from './pages/Posts';
import About from './pages/About';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Users /> } />
        <Route path="/posts/:id" element={ <Posts /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </Router>
  );
}

export default App;
