import './App.css';
import './component/SignUp.css';
import Sidebar from './component/Sidebar'
import Totaluser from './component/Totaluser';
import SignUp  from './component/SignUp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='main-container'>
      <BrowserRouter>
      <Sidebar />
        <Routes>
          <Route path='/signup' element ={<SignUp/>} />
          <Route path='/' element={<Totaluser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
