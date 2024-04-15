import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import "./App.css";
import { createContext } from "react";

function App() {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
