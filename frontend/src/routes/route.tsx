import { createBrowserRouter } from "react-router-dom";

// Pages & Components.
import App from "../App";
import HomePage from "../pages/homepage";
import PaymentConfirmation from "../pages/paymentConfirmation";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/payment-confirmation',
                element: <PaymentConfirmation />
            }
        ]
    }
]);

export default Router;