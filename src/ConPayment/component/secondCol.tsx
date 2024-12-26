import React from "react";
import "../style.css";
import ReptText from "../../Common/TitlesNText/reptText";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setpaytrue } from "../../Redux/slice/restStateSlice";
import { useState, useEffect } from "react";
import { setorderid, settotalamt } from "../../Redux/slice/paymentSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";

export default function SecondCol() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //----------------
  const moviename = useSelector((state: any) => state.home.selectedMovie);
  const { date, weekday, screenName, money, year } = useSelector(
    (state: any) => state.chooseSch
  );
  const seats = useSelector((state: any) => state.seats.seats);
  const len = seats.length;
  const time = useSelector((state: any) => state.chooseSch.selecttime.time);

  //---------------data------------------------------
  const serData = { service: 3, promo: 70 };

  //--------------total payment-----------------
  const totalpay = money * len + serData.service * len - serData.promo;
  const totalpayInPaise = Math.round(totalpay * 100);

  //---------------razorpay------------------------------

  const loginData = {
    amount: totalpayInPaise,
    moviename: moviename.name,
    date: date,
    time: time,
  };

  const params = new URLSearchParams({
    amount: String(loginData.amount), // Temporarily convert to string
    moviename: String(loginData.moviename),
    date: String(loginData.date),
    time: String(loginData.time),
  });

  const formData = new URLSearchParams(params);

  const payment = async (event: React.FormEvent) => {
    await fetch(`http://127.0.0.1:4000/testing/razorpay`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData,
    })
      .then((resp) => {
        return resp.json();
      })
      .then((checkeddata) => {
        console.log("razorpay data: ", checkeddata);

        var options = {
          key: "rzp_test_6q8l5AKf4Ioo0K", // Enter the Key ID generated from the Dashboard
          amount: totalpayInPaise, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
          currency: "INR",
          name: "TIXID", //your business name
          description: "Test Transaction",
          image: "https://example.com/your_logo",
          order_id: checkeddata.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
          handler: async function (response: any) {
            try {
              // Send payment verification data to the backend
              const verificationData = {
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_signature: response.razorpay_signature,
              };

              const formData = new URLSearchParams(verificationData);

              const validateRes = await fetch(
                `http://127.0.0.1:4000/testing/payvalid`,
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                  },
                  body: formData,
                }
              );

              const jsonRes = await validateRes.json();

              if (jsonRes.success) {
                navigate("/success");
                dispatch(setorderid(response.razorpay_order_id));
                dispatch(settotalamt(totalpay));

                insertseats(true);
              } else {
                alert("Payment verification failed!");
                console.error("Verification failed:", jsonRes.message);
              }
            } catch (error) {
              console.error("Error during payment verification:", error);
              alert("Something went wrong during verification!");
              insertseats(false);
            }
          },
          prefill: {
            name: "Gaurav Kumar", //your customer's name
            email: "gaurav.kumar@example.com",
            contact: "9000090000", //Provide the customer's phone number for better conversion rates
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#3399cc",
          },
        };
        var rzp1 = new (window as any).Razorpay(options);
        rzp1.on("payment.failed", function (response: any) {
          console.log(response.error.code);
          console.log(response.error.description);
          console.log(response.error.source);
          console.log(response.error.step);
          console.log(response.error.reason);
          console.log(response.error.metadata.order_id);
          console.log(response.error.metadata.payment_id);
          toast.error("Payment failed", {
            className: "toast-error-red", // Custom class for error background
            progressClassName: "toast-progress-white", // Custom class for progress bar
          });
          insertseats(false);
        });
        rzp1.open();
        event.preventDefault();
      })
      .catch((error) => {
        console.log("Login error:", error);
      });
  };

  //-------------------------------------------------------------------------
  const usertheatrename = useSelector(
    (state: any) => state.chooseSch.theatreName
  );

  const usertime =
    useSelector((state: any) => state.chooseSch.selecttime.time) + ":00";

  const username = useSelector((state: any) => state.signup.phonenumber);

  const date2 = useSelector((state: any) => state.chooseSch.date) || "5";

  function formatDate(inputDate: string) {
    const currentYear = new Date().getFullYear();
    const fullDate = new Date(`${inputDate} ${currentYear}`);

    const year = fullDate.getFullYear();
    const month = String(fullDate.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const day = String(fullDate.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  const refinedDate = formatDate(date2);

  const insertseats = async (paymentstat: boolean) => {
    const divide = seats.map((elem: string) => ({
      usermoviename: moviename.name,
      usertheatrename,
      userscreenname: screenName,
      usertime,
      userseatid: elem, // Each seat gets a different value for userseatid
      username,
      userdate: refinedDate,
      userpayment: paymentstat,
    }));

    console.log("my dataaaa", divide);

    const formData2 = new URLSearchParams();
    formData2.append("data", JSON.stringify(divide)); // Append the serialized data as a string

    try {
      const response = await fetch(
        `http://127.0.0.1:4000/testing/selectseats`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded", // Set the correct content type
          },
          body: formData2, // Send the form data in the body
        }
      );

      const namedata = await response.json(); // Await the JSON response
      console.log("Finallyyyy", namedata);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div className="rept-div">
        <h2>Order Summary</h2>

        <div className="inner-rept-div">
          <h4>Transaction Details</h4>
          <ReptText seattype="REGULAR" price={`Rs. ${money}`} X={`X${len}`} />
          <ReptText
            seattype="SERVICE FEE"
            price={`Rs. ${serData.service}`}
            X={`X${len}`}
          />

          <hr className="hr3"></hr>

          <h4>Promo & Voucher</h4>
          <ReptText seattype="PROMO TIX ID" price={`- Rs. ${serData.promo}`} />

          <hr className="hr3"></hr>

          <ReptText
            fontWeight={600}
            seattype="Total Payment"
            price={`- Rs. ${totalpay}`}
          />

          <hr></hr>

          <p className="warning">*Ticket purchases cannot be cancelled.</p>

          <button
            className="sub-btn"
            onClick={(event) => {
              dispatch(setpaytrue(true));
              payment(event);
              dispatch(settotalamt(totalpayInPaise));
            }}
          >
            BUY TICKETS
          </button>
        </div>
      </div>
    </div>
  );
}
