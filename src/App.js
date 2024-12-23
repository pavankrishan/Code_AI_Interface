import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LoginForm from './components/LoginForm';
import Home from './components/Home';
import NotFound from './components/NotFound';

import './App.css';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/login' element={<LoginForm />} />
      <Route path='/' element={<Home />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
