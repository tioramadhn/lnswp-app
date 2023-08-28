import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import "./styles/style.css";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

function App() {
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
}

export default App;
