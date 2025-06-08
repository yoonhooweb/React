import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./styles/App.css";
import "./styles/index.css";
import "./styles/reset.css";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
