import { createBrowserRouter } from "react-router-dom";

const HomePage = () => <h1>Home</h1>;
const VariablesPage = () => <h1>Variables</h1>;
const VariableDetailsPage = () => <h1>Variable Details</h1>;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/variables",
    element: <VariablesPage />,
  },
  {
    path: "/variables/:id",
    element: <VariableDetailsPage />,
  },
]);
