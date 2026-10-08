import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./page/Home";
import { NotFound } from "./page/NotFound";

function App() {
  return (
    <>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
