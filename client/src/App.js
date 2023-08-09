import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/home-page';
import { paths } from './paths';
import { PlanePage } from './pages/plane-page';


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={paths.home} element={<HomePage />} />
          <Route path={`${paths.plane}/:id`} element={<PlanePage />} />
        </Routes>
      </BrowserRouter>

  );
}

export default App;
