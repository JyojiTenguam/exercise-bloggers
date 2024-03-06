import './styles/App.css';
import { About, NotFound, Posts, Users } from './pages';
import { Route, Routes } from 'react-router-dom';
import Post from './components/Post';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Users /> } />
      <Route path="/posts/:id" element={ <Posts /> } />
      <Route path="/about" element={ <About /> } />
      <Route path="*" element={ <NotFound /> } />
    </Routes>
  );
}

export default App;
