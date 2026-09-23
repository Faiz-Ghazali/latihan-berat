import { createBrowserRouter } from "react-router";
import Home from "./pages/Admin/Home";
import About from "./pages/Admin/About";
import Santri from "./pages/Admin/Santri";
import SantriLayout from "./layouts/coretcoret/SantriLayout";
import SantriNilai from "./pages/Admin/Santri/SantriNilai";
import SantriAbsensi from "./pages/Admin/Santri/SantriAbsensi";
import SantriList from "./pages/Admin/Santri/SantriList";
import SantriDetail from "./pages/Admin/Santri/SantriDetail";
import Dashboard2 from "./pages/User/Dashboard2";
import Myprofile from "./pages/User/Myprofile";
import SignIn from "./pages/Auth/SignIn";
import HomeDummy from "./pages/HomeDummy";
import AuthLayout from "./layouts/AuthLayout";
import { Guard } from "./components/Guard";
import UserFrom from "./components/UserForm.jsx"
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeDummy />,
  },
  {
    element: <Guard isGuest />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          {
            path: "signin",
            element: <SignIn />,
          },
        ],
      },
    ],
  },
  {
    path: "/admin",
    element: <Guard role="admin" />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      {
        path: "santri",
        element: <SantriLayout />,
        children: [
          { index: true, element: <Santri /> },
          { path: "nilai", element: <SantriNilai /> },
          { path: "absensi", element: <SantriAbsensi /> },
          {
            path: "list",
            children: [
              { index: true, element: <SantriList /> },
              { path: ":santri_id", element: <SantriDetail /> },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "/user",
    element: <Guard role="user" />,
    children: [
      {
        index: true,
        element: (
          <>
            
            <Myprofile />
            <UserFrom />
            <Dashboard2 />
          </>
        ),
      },
    ],
  },
]);

export default router;
