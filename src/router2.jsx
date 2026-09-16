import { createBrowserRouter } from "react-router";

// Import Layouts
import GuestLayout from "./layouts/GuestLayout";
import AuthLayout from "./layouts/AuthLayout";

// Import Pages
import HomeGuest from "./pages/HomeGuest";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import { AuthOnly, GuestOnly } from "./components/AuthGuards";

const router = createBrowserRouter([
  // 1. Group Route Guest (Landing Page / Home)
  {
    path: "/",
    element: (
      <GuestOnly>
        <GuestLayout />
      </GuestOnly>
    ),
    children: [
      {
        index: true,
        element: <HomeGuest />,
      },
    ],
  },
  // 2. Group Route Auth (Sign-in & Sign-up)
  {
    element: <AuthLayout />,
    children: [
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "dashboard",
        element: (
          <AuthOnly>
            <Dashboard />
          </AuthOnly>
        ),
      },
    ],
  },
]);

export default router;
