import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import Classes from './components/Classes';
import Products from './components/Products';
import AboutUs from './components/AboutUs';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Error from './components/Error';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Orders from './components/Orders';
import Tests from './components/Tests';
import QA from './components/QA';
import Script from './components/Script';

// function App() {
//   return (
//     <div className='app'>
//       {/* <Navbar /> */}
//      {/* <Home />   */}
//       {/* <Cart/> */}
//       {/* <Classes/> */}
//       {/* < Products /> */}
//       {/* <AboutUs /> */}
//       {/* <Login/> */}
//       {/* <Signup /> */}
//     {/* <Dashboard /> */}

//       <RouterProvider router = {appRouter}/>
//     </div>
//   );
// };


// const appRouter = createBrowserRouter([
//   {
//     path:"/",
//     element:<Home />,
//     errorElement:<Error />,
//     children:[
//       {
//         path:"/",
//         element:<Home />
//       },
//     ]

//   },
//       {
//         path:"/cart",
//         element:<Cart />,
//       },
//       {
//         path:"/classes",
//         element:<Classes />
//       },
//       {
//         path:"/products",
//         element:<Products />
//       },
//       {
//         path:"/aboutus",
//         element:<AboutUs />
//       },
//       {
//         path:"/profile",
//         element:<Login />,
//       },
      
//       {
//         path:"/signup",
//         element:<Signup />,
//       },
//       {
//         path:"/dashboard",
//         element:<Dashboard />,
//         children:[
//           {
//             path:"order",
//             element:<Orders />,
//           },
//           {
//             path:"tests",
//             element:<Tests />,
//           },
//           {
//             path:"qa",
//             element:<QA />,
//           }
//         ]
//       },
//     ]
// );

// export default App;



// Define your routes
const routes = [
  {
    path: "/",
    element: <Script />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/cart", element: <Cart /> },
{ path: "/classes", element: <Classes /> },
{ path: "/products", element: <Products /> },
{ path: "/aboutus", element: <AboutUs /> },
{ path: "/profile", element: <Login /> },
{ path: "/signup", element: <Signup /> },
{
  path: "/dashboard",
  element: <Dashboard />,
  children: [
    { path: "order", element: <Orders /> },
    { path: "tests", element: <Tests /> },
    { path: "qa", element: <QA /> }
 ]
}
    ]
  }
];

const appRouter = createBrowserRouter(routes);

function App() {
  return (
    <div className='app'>
        <RouterProvider router={appRouter} />
        
    </div>
  );
}

export default App;
