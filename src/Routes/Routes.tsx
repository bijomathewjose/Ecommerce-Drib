import React from "react";
import { Navigate } from "react-router-dom";
import Navbar from "../Pages/Navigation/Dashboard";
export const routes=[
  {
    path:'/',
    element:<Navbar />,
    
    children:[
      {path:'',element:<>This is bad</>},
      {path:'a', element:<>Hi from ,'aas'</> },
      {path:'b',element:<>Hi from ,'b'</> },
      {path:'c',element:<>Hi from ,'c'</> }
    ]
  },
  {
    path:'*',
    element:<Navigate to='a'/>
  }
]

