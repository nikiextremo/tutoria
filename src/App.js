import './App.css';
import Index from './components/Index.tsx'
import UserConfig from './components/usuario/UserConfig.tsx';
import MyCards from './components/usuario/MyCards.tsx';
import Logout from './components/usuario/Logout.tsx';
import UserLayout from './components/usuario/UserLayout.tsx';
import ShowCard from './components/tradeo/ShowCard.tsx';
import Contacto from './components/contact/Contacto.tsx';
import Soporte from './components/contact/Soporte.tsx';
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UserLayout />}>
        <Route index element={<Index />} />
          <Route path="UserConfig" element={<UserConfig />} />
          <Route path="ShowCard" element={<ShowCard />} />
          <Route path="Contacto" element={<Contacto />} />
          <Route path="Soporte" element={<Soporte />} />
          <Route path="MyCards" element={<MyCards />} />
          <Route path="Logout" element={<Logout />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
