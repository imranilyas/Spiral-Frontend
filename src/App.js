import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <div className="App">
      <Router basename='/'>
        <Routes>
          <Route index element = {<LoginScreen />} />
          <Route path = '/user' element = {<HomeScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
