import { createBrowserRouter } from "react-router-dom";
import App from "../components/App";
import ListingPage, { loader as ListingLoader } from "./listing";
import DetailsPage, { loader as DetailsLoader } from "./details";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <ListingPage />,
                loader: ListingLoader
            },
            {
                path: "/:listingId",
                element: <DetailsPage />,
                loader: DetailsLoader
            },
        ],
    },
]);


export default router;