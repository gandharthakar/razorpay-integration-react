import { Router } from "express";

import makePaymentController, { testController, paymentVerificationController } from "./../controllers/payments/paymentController.js";

const routes = Router();

routes.get("/test", testController);
routes.post("/make-payment", makePaymentController);
routes.post("/payment-verify-redirect", paymentVerificationController);

export default routes;