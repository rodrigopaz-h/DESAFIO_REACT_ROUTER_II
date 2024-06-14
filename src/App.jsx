import { Route, Routes } from "react-router-dom";
import Home from "./Views/Home";
import Details from "./Views/Details";
import "./App.css";
import Navigation from "./Components/Navbar";
import PokemonSelect from "./Views/PokemonSelect";

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemones" element={<PokemonSelect />} />
        <Route path="/pokemones/:name" element={<Details />} />
      </Routes>
    </div>
  );
};
export default App;
