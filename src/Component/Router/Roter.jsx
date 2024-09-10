import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Home/Home/Home";
import Menus from "../Pages/Menus/Menus";
import MealPlans from "../Pages/MealPlans/MealPlans";
import Catering from "../Pages/Catering/Catering";
import Works from "../Pages/Works/Works";
import Testimonials from "../Pages/Testimonials/Testimonials";
import FAQ from "../Pages/FAQ/FAQ";
import ErrorPages from "../Share/Error/ErrorPages";
import Login from "../Share/Login/Login";
import Signup from "../Share/Signup/Signup";
import MenuDetail from "../Pages/Menus/MenuDetail";
import Profile from "../Home/Profile/Profile";
import Dashboard from "../LayOutDashboard/Dashboard";

import ManageMenu from "../LayOutDashboard/DashboardMenu/ManageMenu";
import ManageTestimonials from "../LayOutDashboard/DashboardMenu/ManageTestimonials";
import Transactions from "../LayOutDashboard/Transactions";

   export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPages/> ,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/our-menus',
          element:<Menus/>
        },
        {
          path:'/menu/:id',
          element:<MenuDetail/>,
          loader:()=>fetch('/menus.json')
        },
        {
          path:'/meal-plans',
          element:<MealPlans/>
        },
        {
          path:'/catering',
          element:<Catering/>
        },
        {
          path:'/how-it-works',
          element:<Works/>
        },
        {
          path:'/Testimonials',
          element:<Testimonials/>
        },
        {
          path:'/faq',
          element:<FAQ/>
        },
        {
          path:'/login',
          element:<Login/>
        },
        {
          path:'/signup',
          element:<Signup/>
        },
        {
          path:'/profile',
          element:<Profile/>
        }
      ]
    },
     // dashboard Route
     {
      path:'dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'transactions',
          element:<Transactions/>
        },
        {
          path:'ManageMenu',
          element:<ManageMenu/>
        },
        {
          path:'Testimonials',
          element:<ManageTestimonials/>
        }
      ]
      
     }
  ]);