import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './Roots/Roots.jsx';
import Home from './Components/Home/Home.jsx';
import AllDoctors from './Components/AllDoctors/AllDoctors.jsx';
import Appointments from './Components/Appointments/Appointments.jsx';
import Confirmation from './Components/Confirmation/Confirmation.jsx';
import Packages2 from './Components/Packages2/Packages2.jsx';
import CheckupPasha from './Components/CheckupPasha/CheckupPasha.jsx';
import Doctor from './Components/Doctor/Doctor.jsx';
import HealthAndWellness from './Components/HealthAndWellness/HealthAndWellness.jsx';
import FirsAid from './Components/FirstAid/FirsAid.jsx';
import Diagnostics from './Components/Diagnostics/Diagnostics.jsx';
import Packages from './Components/Packages/Packages.jsx';
import About from './Components/About/About.jsx';
import Location from './Components/Location/Location.jsx';





const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    children: [
      {
        path : '/home',
        element : <Home></Home>
      },
      {
        path : '/allDoctors',
        element : <AllDoctors></AllDoctors>
      },
      {
        path : '/appointment',
        element : <AllDoctors></AllDoctors>
      },
      {
        path : `/appointment/:doctor_id`,
        element : <Appointments></Appointments>
      },
      {
        path : `/health-check/:id`,
        element : <CheckupPasha></CheckupPasha>
      },
      {
        path : `/health-check`,
        element : <Packages2></Packages2>
      },
     
     {
       path : '/confirmation',
       element:<Confirmation></Confirmation>
     },
     {
       path : '/services/healthAndWellness',
       element: <HealthAndWellness></HealthAndWellness>
     },
     {
       path : '/services/firstAid',
       element: <FirsAid></FirsAid>
     },
     {
       path : '/services/diagnostics',
       element: <Diagnostics></Diagnostics>
     },
     {
       path : '/about',
       element: <About></About>
     },
     {
       path : '/location',
       element:<Location></Location>
     },
     
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router} />

  </StrictMode>,
)
