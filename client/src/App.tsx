import Navbar from "./components/Navbar/Navbar";
import Photos from "./pages/Photos/Photos";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Users from "./pages/Users/Users";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
function App() {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <main className="main">
          <Outlet />
          <ScrollToTop/>
        </main>
      </>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Photos />,
        },
        {
          path: "/users",
          element: <Users />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
