import  Movies  from './Components/Movies';
import { Route, Routes } from 'react-router-dom';
import Detail from './Components/Detail';
import Favorites from './Components/favorites';

function App() {
  return (
    <div className="App">
     <Routes>
        <Route index element= {<Movies /> } /> 
        <Route path='/:id' element= {<Detail />} />
        <Route path='/favorites' element={ <Favorites />} />

     </Routes>
      
    </div>
  );
}

export default App;
