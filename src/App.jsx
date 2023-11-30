// import { useRef } from "react"
import PlanePage from "./pages/PlanePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<App />} /> */}
        <Route path="/" element={<PlanePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
