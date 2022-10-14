// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes";
import { Suspense } from "react";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<></>}>
          <Router />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
