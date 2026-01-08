import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PostTemplates from './pages/post-templates';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<PostTemplates />} />
      </Routes>
    </Router>
  );
}
export default App;