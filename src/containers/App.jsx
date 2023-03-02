import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Landing from '../pages/Landing';
import NotFound from '../pages/NotFound';
import Login from '../pages/Login';

function App() {
    return ( 
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Landing/>} />
                    <Route path="/*" element={<NotFound/>} />
                    <Route path="/login" element={<Login/>} />
                </Routes>
        </BrowserRouter>   
     );
}

export default App;