import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UsersList from "./components/userList";

function App() {
  return (
    <>

    <BrowserRouter>
    <Routes>
    {/* <Navbar /> */}

      {/* <div className="container"> */}
        <Route path="/" exact element={<UsersList />} />
      {/* </div> */}
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
