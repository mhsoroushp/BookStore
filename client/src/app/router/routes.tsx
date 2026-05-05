import { createBrowserRouter } from "react-router";
import App from "../layout/App";

import HomePage from "../../features/home/HomePage";
import MainDashboard from "../../features/books/dashboard/MainDashboard";
import LoginForm from "../../features/account/LoginForm";
import RegisterForm from "../../features/account/RegisterForm";
// import MainDashboard from "../../features/books/dashboard/MainDashboard";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {children:[
                    {path: 'books', element: <MainDashboard />}
                ]
            },
            { path: '', element: <HomePage /> },
            { path: 'login', element: <LoginForm /> },
            { path: 'register', element: <RegisterForm /> }
        ]
    },
]);