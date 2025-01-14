import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Header from './Header';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './Home';
import { MyProvider } from './MyContext';
function App() {
  return (
    <div>
      <BrowserRouter>
      <MyProvider>
      <Header/>
      
     
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      </MyProvider>
      </BrowserRouter>
   
    
    </div>
  );
}

export default App;
