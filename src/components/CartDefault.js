export const CartDefault = () => {
  return (
    <div
      className="mainContainer"
      style={{
        height: "100vh",
        width: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "0",
        fontSize: "1.5em",
      }}
    >
      <h1>Your Cart is Empty!</h1>
      <p style={{ color: "#757272" }}>Add Items to Your Cart to Checkout</p>
    </div>
  );
};
