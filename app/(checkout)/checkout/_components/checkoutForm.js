"use client";

import {
  AddressElement,
  Elements,
  LinkAuthenticationElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import classes from "./checkoutForm.module.css";
import { useState } from "react";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export function CheckoutForm({ clientSecret }) {
  return (
    clientSecret && (
      <Elements options={{ clientSecret }} stripe={stripePromise}>
        <Form />
      </Elements>
    )
  );
}

function Form() {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [email, setEmail] = useState();

  function handleSubmit(e) {
    e.preventDefault();

    if (stripe == null || elements == null || email == null) return;

    setIsLoading(true);

    stripe
      .confirmPayment({
        elements,

        confirmParams: {
          return_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/payment-success`,
        },
      })
      .then(({ error }) => {
        if (error.type === "card_error" || error.type === "validation_error") {
          setErrorMessage(error.message);
        } else {
          setErrorMessage("An unexpected error occured");
        }
      })
      .finally(() => setIsLoading(false));
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className={classes.header}>Contact</p>
      <LinkAuthenticationElement
        className={classes.input}
        onChange={(e) => setEmail(e.value.email)}
      />
      <p className={classes.header}>Delivery</p>
      <AddressElement
        className={classes.input}
        options={{
          mode: "shipping",
        }}
      />
      <p className={classes.header}>Payment</p>
      <PaymentElement
        className={classes.input}
        options={{
          layout: {
            type: "accordion",
            radios: true,
            defaultCollapsed: false,
            spacedAccordionItems: false,
          },
        }}
      />
      <AddressElement className={classes.input} options={{ mode: "billing" }} />
      <button
        className={classes["pay-button"]}
        disabled={stripe === null || elements === null || isLoading}
      >
        {isLoading ? "Purchasing..." : "Pay now"}
      </button>
    </form>
  );
}
