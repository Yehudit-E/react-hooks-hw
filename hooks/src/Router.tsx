import { createBrowserRouter } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import Header from "./components/header/Header";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Header/>,
        children: [
          { path:'', element: <Home/> },
          { path: 'about', element: <About /> },
        ],
      },
  ]);

