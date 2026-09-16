import { createBrowserRouter } from "react-router";
import Home from "./pages/Admin/Home";
import About from "./pages/Admin/About";
import AppLayout from "./layouts/coretcoret/AppLayout";
import Santri from "./pages/Admin/Santri";
import SantriLayout from "./layouts/coretcoret/SantriLayout";
import SantriNilai from "./pages/Admin/Santri/SantriNilai";
import SantriAbsensi from "./pages/Admin/Santri/SantriAbsensi";
import SantriList from "./pages/Admin/Santri/SantriList";
import SantriDetail from "./pages/Admin/Santri/SantriDetail";
const router = createBrowserRouter([
  {
    path: "/admin",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "santri",
        element: <SantriLayout />,
        children: [
          {
            index: true,
            element: <Santri />,
          },
          {
            path: "nilai",
            element: <SantriNilai />,
          },
          {
            path: "list",
            children: [
              {
                index: true,
                element: <SantriList />,
              },
              {
                path: ":santri_id",
                element: <SantriDetail />,
              },
            ],
          },
          {
            path: "absensi",
            element: <SantriAbsensi />,
          },
        ],
      },
    ],
  },
]);
export default router;
