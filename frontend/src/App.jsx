import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Singup from "./pages/singup/Singup";
import RegisterBarber from "./pages/barber/RegisterBarber";
import Schedules from "./pages/schedules/Schedules";
import SchedulesAdmin from "./pages/schedules/SchedulesAdmin";

const router = createBrowserRouter([
  {
    // path: "/",
    // element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/singup",
        element: <Singup/>,
      },
      {
        path: "/register-barber",
        element: <RegisterBarber/>,
      },
      {
        path: "/my-schedules",
        element: <Schedules/>,
      },
      {
        path: "/schedules",
        element: <SchedulesAdmin/>,
      }
    ]
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
