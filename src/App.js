import { Route, Routes } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetupsPage';
import NewMeetupsPage from './pages/NewMeetupsPage';
import FavoritesPage from './pages/FavoritesPage';
import Layout from './components/layout/Layout';


function App() {
  return (
    <Layout> 
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="new-meetup" element={<NewMeetupsPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
