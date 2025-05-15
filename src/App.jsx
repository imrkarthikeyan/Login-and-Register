import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/dashboard' element={<h1>dashboard</h1>}/>
        <Route path='/' element={<h1>home</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
