import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/home-page';
import { paths } from './paths';


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={paths.home} element={<HomePage />} />
        </Routes>
      </BrowserRouter>

  );
}

export default App;
