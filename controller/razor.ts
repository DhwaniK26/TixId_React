const Razorpay = require('razorpay')
import dotenv from "dotenv";
dotenv.config();
const crypto = require('crypto')

const razor = async (req: any, res: any)=>{
    
        try {
          const razorpay = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_SECRET,
          });

          const { amount, moviename, date, time } = req.body;

          const options = {
            amount:amount,       // Amount in paise (e.g., ₹500 => 50000)
            currency: "INR",
            receipt: "receipt#123",
            notes: {
              moviename: moviename, // Add extra data here
              date: date,
              time: time,
            },
          };
      
        //   const options = req.body;
          const order = await razorpay.orders.create(options);
      
          if (!order) {
            return res.status(500).send("Error");
          }
      
          res.json(order);

        } catch (err) {
          console.log(err);
          res.status(500).send("Error");
        }   
}

// app.post("/order/validate", async (req, res) => {

const payvalid = async (req : any, res:any)=>{
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;
    const secret = process.env.RAZORPAY_SECRET; 

    const generated_signature = crypto
      .createHmac("sha256", secret)
      .update(razorpay_order_id + "|" + razorpay_payment_id)
      .digest("hex");
  
    if (generated_signature === razorpay_signature) {
     
      res.json({ success: true, message: "Payment Verified Successfully" });
    } else {
      
      res.status(400).json({ success: false, message: "Invalid Signature" });
    }
}

export {razor, payvalid}