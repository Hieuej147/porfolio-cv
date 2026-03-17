import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./page/Home";
import { NotFound } from "./page/NotFound";

function App() {
  return (
    <>
      <BrowserRouter basename="/porfolio-cv">
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
