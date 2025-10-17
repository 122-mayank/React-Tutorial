
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import HomePage from './components/HomePage';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import ParamComp from './components/ParamComp';
import MockTest from './components/MockTest';
import Reports from './components/Reports';
import Courses from './components/Courses';

const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
           <Navbar/>
           <HomePage/>
      </div>

    },
    {
         path:"/about",
      element:<div>
           <Navbar/>
           <About/>
      </div>
    },
    {
           path:"/dashboard",
      element:<div>
           <Navbar/>
           <Dashboard/>
         </div>,
         children:[
          {
            path:'courses',
            element:<Courses/>
          },

          {
            path : 'mock-test',
            element:<MockTest/>
          },
          {
           path: 'reports',
           element: <Reports/>

          }

         ]
    },
{
  path:"/student/:id",
  element:
      <div>
           <Navbar/>
           <ParamComp/>
      </div>
}

  ]
);

function App() {


  return (
   <div>
       <RouterProvider router ={router}/>
   </div>


  )
}

export default App
