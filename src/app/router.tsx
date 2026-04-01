import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "@/pages/HomePage/HomePage";
import { VariablesPage } from "@/pages/VariablesPage/VariablesPage";
import { VariableDetailsPage } from "@/pages/VariableDetailsPage/VariableDetailsPage";
import { Layout } from "@/components/Layout/Layout";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/variables", element: <VariablesPage /> },
      { path: "/variables/:id", element: <VariableDetailsPage /> },
    ],
  },
]);
