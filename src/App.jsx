import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import DigitalMarketing from "./pages/digitalMarketing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/digital-marketing"
          element={<DigitalMarketing />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;