import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import LandingPage from './pages/landing';
import Authentication from './pages/Authentication';
import { AuthProvider } from './contexts/AuthContext';
import VideoMeetComponent from './pages/VideoMeet';
import HomeComponenet from './pages/Home';

function App() {
  return (
    <>
      <Router>

        <AuthProvider>
        <Routes>
           <Route path='' element={<LandingPage/>} />
           <Route path='/auth' element={<Authentication/>} />
           <Route path='/:url' element={<VideoMeetComponent/>} />
           <Route path='/home' element={<HomeComponenet/>} />
        </Routes>
        </AuthProvider>
      </Router>
    </>
    );
}

export default App;
