import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

// pages & components
import Home from './pages/Home'
import Signup from './pages/signup'
import Login from './pages/login'
import Navbar from './components/Navbar'

function App() {
  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to="/Login"/>}
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/"/>}
            />
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/"/>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
