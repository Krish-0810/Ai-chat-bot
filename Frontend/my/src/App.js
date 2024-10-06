import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import LandingPage from './pages/landing';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <>
      <Router>

        <AuthProvider>
        <Routes>
           <Route path='' element={<LandingPage/>} />
           <Route path='/auth' element={<authentication/>} />
        </Routes>
        </AuthProvider>
      </Router>
    </>
    );
}

export default App;
