// React Hooks
import { Routes, Route } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link, useNavigate } from 'react-router-dom';

// Components
import Home from './components/Home/Home';
import SomeComponent from './components/SomeComponent/SomeComponent';

// Store actions
// import { authActions } from './store';

// Styles
import './App.css';

const App = () => {
	// const dispatch = useDispatch();
    // const navigate = useNavigate();

	// const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    // const loggedInUser = useSelector((state) => state.auth.loggedInUser);



	return (
		<>
			<Routes>
				<Route path='/' element={ <Home /> } />
				<Route path='/hello' element={ <SomeComponent /> } />
			</Routes>
		</>
	);
}

export default App;
