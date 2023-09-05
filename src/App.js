import logo from './logo.svg';
import './App.css';
import LoginWitSSO from './LoginWitSSO';
import LoginWithJWT from './LoginWithJWT';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import { useEffect } from 'react';

function App() {
  const isAuthenticated = !!localStorage.getItem('token')
    const username = localStorage.getItem('name')

const navigate = useNavigate()
    useEffect(()=>{
      if(isAuthenticated) {navigate('/dashboard')} else {
        navigate('/')
      }
    },[])

  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<LoginWitSSO/>}/>
        <Route exact path='/dashboard' element={<Dashboard/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
