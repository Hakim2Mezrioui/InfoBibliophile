import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import "./app.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Home />
    </BrowserRouter>
  );
}

export default App;
