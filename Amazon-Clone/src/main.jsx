// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
    
//   </StrictMode>,
// )
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import DataProvider from "./Componenets/DataProvider/DataProvider.jsx";
import { reducer, initialState } from "./Utility/reducer.jsx"; 

// Create root correctly
const root = createRoot(document.getElementById("root"));

root.render(

    <DataProvider reducer={reducer} initialState={initialState}>
      <App />
    </DataProvider>

);
