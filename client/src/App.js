import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import SignIn from './pages/Auth/SignIn';
import ProductDetail from './pages/ProductDetail';
import SignUp from './pages/Auth/SignUp';
import Products from './pages/Products';
import Profile from './pages/Profile';
import ProtectedRoute from './pages/ProtectedRoute';
import Error404 from './pages/Error404';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='product/:product_id' element={<ProductDetail />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='*' element={<Error404 />} />
          <Route
            path='/profile'
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
