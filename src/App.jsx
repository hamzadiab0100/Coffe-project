
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider, Routes } from 'react-router-dom' ;
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';


const Layout = () => {

  return(
    <>
    <NavBar/>
    <Outlet/>
    <Footer/>

    </>
  )


};
function App() {

  
  const router = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      </Route>
      <Route path='/contact' element={<Contact/>}></Route>
    </Route>
  ));

  return (
    <div className='abslute font-sans'>
     <RouterProvider  router={router}/>
    </div>
  )
}

export default App
