const express = require("express");
const app = express();
const cors = require("cors");
const stripe = require("stripe")('sk_test_51OhVMUSFdCe5uGCsDjD8O5WPuqCTErjvSoLE08e2cRLO3OcNgUlr6z4uMUKo8vD2Ws94XYKGJ9CDKtDxF8frayTc00PflZcbMo');

app.use(express.json());
app.use(cors());

app.post("/api/create-checkout-session", async (req, res) => {
    try {
        const { donationAmount, name, email, address, paymentMethod } = req.body;


        const lineItems = [{
            price_data: {
                currency: "inr",
                product_data: {
                    name: "Donation",
                },
                unit_amount: donationAmount * 100, // Amount in cents
            },
            quantity: 1,
        }];

        let paymentMethodTypes = ["card"]; // Default payment method type is card

        // Add additional payment method types based on the selected payment method
        if (paymentMethod === "paypal") {
            paymentMethodTypes.push("paypal");
        } else if (paymentMethod === "bankTransfer") {
            paymentMethodTypes.push("bank_transfer");
        }

        const session = await stripe.checkout.sessions.create({
            payment_method_types: paymentMethodTypes,
            line_items: lineItems,
            mode: "payment",
            success_url: "http://localhost:3000/success",
            cancel_url: "http://localhost:3000/cancel",
        });

        res.json({ id: session.id });
    } catch (error) {
        console.error("Error creating checkout session:", error);
        res.status(500).json({ error: "Failed to create checkout session" });
    }
});

app.listen(8000, () => {
    console.log("Server started on port 8000");
});



