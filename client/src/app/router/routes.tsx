import { createBrowserRouter } from "react-router";
import App from "../layout/App";

import HomePage from "../../features/home/HomePage";
import MainDashboard from "../../features/books/dashboard/MainDashboard";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <HomePage /> },
            { path: 'books', element: <MainDashboard /> }
        ]
    },
]);