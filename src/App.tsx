import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./mainPage/mainPage";
import Form from "../src/createForm/form";
import SubmittedForms from "./viewForms/viewForms";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/form" element={<Form />} />
        <Route path="/view-forms" element={<SubmittedForms />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
