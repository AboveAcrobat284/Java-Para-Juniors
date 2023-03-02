import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Landing from '../pages/Landing';
import NotFound from '../pages/NotFound';
import Login from '../pages/Login';
import FormRegister from '../components/organism/FormRegister';

function App() {
    return ( 
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Landing/>} />
                    <Route path="/*" element={<NotFound/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/register" element={<FormRegister/>} />
                </Routes>
        </BrowserRouter>   
     );
}

export default App;