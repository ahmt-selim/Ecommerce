import { createBrowserRouter, Navigate } from "react-router";
import App from "../layout/App";
import HomePage from "../features/HomePage";
import { ContactPage } from "@mui/icons-material";
import AboutPage from "../features/AboutPage";
import CatalogPage from "../features/catalog/CatalogPage";
import ProductDetailsPage from "../features/catalog/ProductDetails";
import ErrorPage from "../features/ErrorPage";
import ServerError from "../errors/ServerError";
import NotFound from "../errors/NotFound";
import ShoppingCartPAge from "../features/cart/ShoppingCartPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children:[
            { path: "", element: <HomePage />},
            { path: "about", element: <AboutPage />},
            { path: "contact", element: <ContactPage />},
            { path: "catalog", element: <CatalogPage />},
            { path: "cart", element: <ShoppingCartPAge />},
            { path: "catalog/:id", element: <ProductDetailsPage />},
            { path: "error", element: <ErrorPage />},
            { path: "server-error", element: <ServerError />},
            { path: "not-found", element: <NotFound />},
            { path: "*", element: <Navigate to="/not-found" />},//Yukarıdaki route lar dışında bir route girildiğinde buraya yönlendirir.
        ]
    }
])