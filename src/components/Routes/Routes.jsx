

import { createBrowserRouter } from "react-router-dom"
import MainLayOut from "../LayOuts/MainLayOut"
import Home from "../Pages/Home"
import Coffees from "../Pages/Coffees"
import DashBoard from "../Pages/DashBoard"



const Routes =createBrowserRouter([
    {
      path:'/',
      element:<MainLayOut></MainLayOut>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch('./categories.json'),
        },
        {
            path:'/coffees',
            element:<Coffees></Coffees>,
        },
        {
            path:'/dashboard',
            element:<DashBoard></DashBoard>
        }
      ]
      
    },
  ])
  export default Routes







  