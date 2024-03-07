import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Users, Posts, About, NotFound } from './pages';

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
