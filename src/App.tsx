import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import UserPage from './pages/UserPage/UserPage';
import MainPage from './pages/MainPage/MainPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/user/:userId" element={<UserPage />} />
      </Routes>
    </Router>
  );
}

export default App;
