import { createBrowserRouter, Navigate, Outlet } from "react-router";
import { useAuthStore } from "./pages/Auth/store/useAuthStore";

import Home from "./pages/Admin/Home";
import Catalog from "./pages/Admin/Catalog";
import PerformaAnalytic from "./pages/Admin/PerformaAnalytic";
import MyGarage from "./pages/Admin/MyGarage";
import About from "./pages/Admin/About";
import Santri from "./pages/Admin/Santri";
import SantriLayout from "./layouts/SantriLayout";
import SantriNilai from "./pages/Admin/Santri/SantriNilai";
import SantriAbsensi from "./pages/Admin/Santri/SantriAbsensi";
import SantriList from "./pages/Admin/Santri/SantriList";
import SantriDetail from "./pages/Admin/Santri/SantriDetail";
import HomeAuth from "./pages/HomeAuth";
import SignIn from "./pages/Auth/SignIn";
import HomeDummy from "./pages/HomeDummy";

import AuthLayout from "./layouts/AuthLayout";
import AppLayout from "./layouts/AppLayout";

function Guard({ role, isGuest }) {
  const user = useAuthStore((state) => state.user);

  if (isGuest && user) {
    return <Navigate to={user.role === "admin" ? "/admin" : "/user"} replace />;
  }

  if (!isGuest && !user) {
    return <Navigate to="/signin" replace />;
  }

  if (!isGuest && role && user?.role !== role) {
    return <Navigate to={user.role === "admin" ? "/admin" : "/user"} replace />;
  }

  return <Outlet />;
}

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
      {
        element: <AppLayout />,
        children: [
          { index: true, element: <Home /> },
          { path: "catalog", element: <Catalog /> },
          { path: "performa", element: <PerformaAnalytic /> },
          { path: "mygarage", element: <MyGarage /> },
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
    ],
  },

  {
    path: "/user",
    element: <Guard role="user" />,
    children: [
      { index: true, element: <HomeAuth /> },
      {
        path: "about",
        element: <div className="text-xl font-bold">Halaman About User</div>,
      },
      {
        path: "contact",
        element: <div className="text-xl font-bold">Halaman Contact User</div>,
      },
    ],
  },
]);

export default router;
