import { useLocation } from "react-router-dom";

export default function PaymentStatus() {
  const { state } = useLocation();
  const status = state?.status || "processing";

  return (
    <div className="max-w-lg mx-auto px-4 py-16 text-center">
      {status === "succeeded" ? (
        <>
          <h2 className="text-2xl font-semibold mb-2">Payment successful 🎉</h2>
          <p>Thanks for your order!</p>
        </>
      ) : status === "processing" ? (
        <>
          <h2 className="text-2xl font-semibold mb-2">Payment processing…</h2>
          <p>We’ll update you in a moment.</p>
        </>
      ) : (
        <>
          <h2 className="text-2xl font-semibold mb-2">Payment status: {status}</h2>
          <p>Please try again or use a different method.</p>
        </>
      )}
    </div>
  );
}
