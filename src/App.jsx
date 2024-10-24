import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import SideBar from "./components/SideBar";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Service from "./pages/Service";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider  } from "react-router-dom";
import RootLayout from "./layout/RootLayout";

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='service' element={<Service/>}/>
        <Route path='portfolio' element={<Portfolio/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Route>
    )
  )

  return(
    <RouterProvider router={router}/>
  )
}

export default App