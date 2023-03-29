import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NotFound from '../pages/NotFound';
import Landing from '../pages/Langind';
import Logina from '../pages/Logina';
import Logint from '../pages/Logint';
import RegisterT from '../pages/RegisterT';
import RegisterA from '../pages/RegisterA';
import PDC from '../pages/PDC';
import PDCL from '../pages/PDCL';
import EDC from '../pages/EDC';
import EDCL from '../pages/EDCL';
import HomeAcademico from '../pages/HomeAcademico';
import HomeTutor from '../pages/HomeTutor';
import HomeCursosAcademico from '../pages/HomeCursosAcademico';
import HomeClasesAcademico from '../pages/HomeClasesAcademico';
import HomeClasesTutor from '../pages/HomeClasesTutor';
import HomeCursosTutor from '../pages/HomeCursosTutor';
import HomeDashBoard from '../pages/HomeDashBoard';

function App() {
    return ( 
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Landing/>} />
                    <Route path="/logina" element={<Logina/>} />
                    <Route path="/logint" element={<Logint/>} />
                    <Route path="/registert" element={<RegisterT/>} />
                    <Route path="/registera" element={<RegisterA/>} />
                    <Route path="/pdc" element={<PDC/>} />
                    <Route path="/pdcl" element={<PDCL/>} />
                    <Route path="/edc" element={<EDC/>} />
                    <Route path="/edcl" element={<EDCL/>} />
                    <Route path="/homeacademico" element={<HomeAcademico/>} />
                    <Route path="/hometutor" element={<HomeTutor/>} />
                    <Route path="/homecursosacademico" element={<HomeCursosAcademico/>} />
                    <Route path="/homeclasesacademico" element={<HomeClasesAcademico/>} />
                    <Route path="/homeclasestutor" element={<HomeClasesTutor/>} />
                    <Route path="/homecursostutor" element={<HomeCursosTutor/>} />
                    <Route path="/homedashboard" element={<HomeDashBoard/>} />
                    <Route path="/*" element={<NotFound/>} />
                </Routes>
        </BrowserRouter>   
     );
}

export default App;