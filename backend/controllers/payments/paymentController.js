import RZInstance from "../../config/razorpayInstance.js";
import crypto from "crypto";
import dotenv from "dotenv";
dotenv.config();

export const testController = (req, res) => {
    return res.status(200).json({ message: "Testing..." })
}

const makePaymentController = async (req, res) => {
    const options = {
        amount: Number(req.body.amount * 100),
        currency: "INR"
    }

    // Create an order.
    const order = await RZInstance.orders.create(options);

    res.status(200).json({
        success: true,
        order
    })
}

export const paymentVerificationController = async (req, res) => {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;

    const ctVerificationString = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET || "").update(ctVerificationString.toString()).digest("hex");

    // console.log("Razorpay Signature : " + razorpay_signature);
    // console.log("Expected Signature : " + expectedSignature);

    const isPaymentVerified = expectedSignature === razorpay_signature;

    if (isPaymentVerified) {
        const redirect_uri = `${process.env.FRONTEND_URI}/payment-confirmation?payment_reference_number=${razorpay_payment_id}`;
        return res.redirect(redirect_uri);
    } else {
        res.status(404).json({
            success: false,
        });
    }
}

export default makePaymentController;