
import { Routes, Route } from 'react-router-dom';
import Header from './components/header';

import Dashboard from './pages/dashboard';
import PropertyDetail from './pages/propertyDetail';

const App = () =>  {
  return (
    <div className='w-full mx-auto bg-white'>
      <Header/>
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/property/:id' element={<PropertyDetail/>} />
      </Routes>
    </div>
  );
}

export default App;
