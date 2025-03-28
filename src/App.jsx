import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AuthContextProvider from "./components/AuthContextProvider";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
