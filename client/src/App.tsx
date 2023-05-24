import React                                   from "react";
import "./App.css";
import RegisterForm                            from "./components/RegisterForm";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginForm                               from "./components/LoginForm";
import { Toaster }                             from "react-hot-toast";
import { Home }                                from "./components/Home";

function App() {

  const router = createBrowserRouter([

    { path: "/register", element: <RegisterForm/> },
    { path: "/login", element: <LoginForm/> },
    { path: "/", element: <Home/> }
  ]);



  return (
      <div className="App">
        <Toaster/>
        <header className="App-header">

        </header>

        <RouterProvider router={ router }/>

      </div>
  );
}

export default App;
