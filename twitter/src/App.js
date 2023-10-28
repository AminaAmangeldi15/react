import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import {Outlet} from "react-router-dom";
function App() {
  return (
      <>
          <Navigation/>
          <Outlet/>
      </>
  );
}

export default App;
