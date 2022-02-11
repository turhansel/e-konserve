import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';
import Products from './pages/Products';

function App() {
	
	return (
		<BrowserRouter>
			<div>
				<Navbar />
				<Routes>
					<Route path='/' element={<Products />} />
					<Route path='/signin' element={<SignIn />} />
					<Route path='/signup' element={<SignUp />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
