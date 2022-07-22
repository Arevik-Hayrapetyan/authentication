import { Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import Table from "./components/Table";
import './App.css';

function App() {
  return (
    <div className="App">
    <Routes>
          <Route exact path="/signIn" element={<SignIn />} />
          <Route path="/data" element={<Table />} />
        </Routes>
    </div>
  );
}

export default App;
