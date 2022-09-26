import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RoutersHeros from './routers/RoutersHeros'
import LoginPage from './pages/LoginPage'
function AppHeros() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} /> 
        <Route path="/*" element={<RoutersHeros />} /> 
      </Routes>
    </BrowserRouter>
    
  )
}
export default AppHeros