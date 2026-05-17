import { createBrowserRouter } from "react-router";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import BookDashboard from "../../features/books/dashboard/BookDashboard";
import LoginForm from "../../features/account/LoginForm";
import RegisterForm from "../../features/account/RegisterForm";
import AuthLayout from "../layout/AuthLayout/AuthLayout";
import NotFound from "../../features/errors/NotFound";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {path: '', element: <HomePage /> },
            {path: 'books', element: <BookDashboard />}
        ]
    },
    {
       element: <AuthLayout />,
       children: [
            { path: 'login', element: <LoginForm /> },
            { path: 'register', element: <RegisterForm /> }
       ]
    }, 
    { path: 'not-found', element: <NotFound /> }
]);