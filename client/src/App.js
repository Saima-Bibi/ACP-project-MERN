import './App.css';
import Home from './components/Home';
import Pets from './components/Pets';
import { Toaster } from 'react-hot-toast';
import { Route, Routes} from 'react-router-dom'
import SignUp from './components/SignUp';


function App() {
  return (
  <>
<div className=" dark:bg-slate-900 dark:text-white">
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/allpets' element={<Pets/>}/>
<Route path='/signup' element={<SignUp/>}/>
</Routes>
<Toaster/>

</div>
  </>
  );
}

export default App;
