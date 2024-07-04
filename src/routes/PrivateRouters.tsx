import { createBrowserRouter } from "react-router-dom";
import PagesCounts from "../pages/PagesCounts/PagesCounts";
import AppLayout from "../core/layout/AppLayout";
import { Error404 } from "../core/components/Error/error-404";

export const router = createBrowserRouter([
    {
       path: '/',
       element: <AppLayout />,
       errorElement: <Error404 />,
       children: [
        {
            path: 'counts',
            element: <PagesCounts />
        }
       ] 
    }
])