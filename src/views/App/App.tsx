import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import RootLayout from "../../widgets/RootLayout";
import Honey from "../Honey/Honey";
import Pollen from "../Pollen/Pollen";
import Poltos from "../Poltos/Poltos";

function App() {
  return (
    <div className="@container">
      <div className="flex-column">
        <div className="w-full">
          <Routes>
            <Route path="/" element={<RootLayout />}>
              <Route index element={<Home />} />
              <Route path="/pages/honey" element={<Honey />} />
              <Route path="/pages/pollen" element={<Pollen />} />
              <Route path="/pages/poltos" element={<Poltos />} />
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
