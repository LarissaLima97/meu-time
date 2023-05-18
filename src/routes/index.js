import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login/login.js";
import Search from "../pages/Search/search.js";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/search' element={<Search/>} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;