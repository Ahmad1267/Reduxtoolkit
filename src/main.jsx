import { createRoot } from "react-dom/client";
import "./index.css"
import App from "./App";
import Cards from "./pages/Cards";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Header from "./components/Header";

let root = createRoot(document.getElementById("root"))
root.render(
    <App/>
)