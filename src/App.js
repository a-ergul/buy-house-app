
import { Routes, Route } from 'react-router-dom';
import Header from './components/header';

import Dashboard from './pages/dashboard';

const App = () =>  {
  return (
    <div className='w-full mx-auto bg-white'>
      <Header/>
      <Routes>
        <Route path='/' element={<Dashboard/>} />
      </Routes>
    </div>
  );
}

export default App;
