import "../styles/cart.css";

export const Cart = ({ cartItems, setCartItems }) => {


  const handleQuantityDecrement = (product) => {
    setCartItems((cartItems) =>
      cartItems.map((item) =>
        product.id === item.id
          ? { ...item, quantity: item.quantity - (item.quantity > 1 ? 1 : 0) }
          : item
      )
    );
  };

  const handleQuantityIncrement = (product) => {
    setCartItems((cartItems) =>
      cartItems.map((item) =>
        product.id === item.id ? { ...item, quantity: item.quantity + 1} : item
      )
    );
  };

  const handleRemoveitem = (id) => {
    const updatedCart = cartItems.filter((product) => product.id !== id);
    setCartItems(updatedCart);
  };

  const getCartTotal = () => {
    let cartTotal = 0;
    cartItems.map((product) => { 
      cartTotal += (product.price * product.quantity)
    });
    return cartTotal;
  };

  const checkout = async () => {
    await fetch('http://localhost:4000/checkout', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({items: cartItems})
    }).then((response) => {
      return response.json();
    }).then((response) => {
      if(response.url) {
        window.location.assign(response.url);
      }
    })
  }

  return (
    cartItems.length === 0 ? <h1>Your Cart is Empty!</h1> :
    <div className="cart-display">
      <div className="left-cart-display">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <div className="cart-item-card">
              <div className="cart-item-image">
                <img src={item.image} />
              </div>
              <div className="cart-item-info">
                <h3>{item.name}</h3>
              </div>
              <div className="cart-buttons-container">
                <div className="cart-quantity-buttons">
                  <button
                    className="cart-item-button"
                    onClick={() => handleQuantityDecrement(item)}
                  >
                    -
                  </button>
                  <span className="cart-item-quantity">{item.quantity}</span>
                  <button
                    className="cart-item-button"
                    onClick={() => handleQuantityIncrement(item)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="remove-button"
                  onClick={() => handleRemoveitem(item.id)}
                >
                  REMOVE
                </button>
              </div>
              <span className="cart-item-price">
                ${item.price}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="checkout">
        <div className="cartTotal">
          Total: ${getCartTotal().toFixed(2)}
        </div>
        <button className="checkoutButton" onClick={checkout}>CHECKOUT</button>
      </div>
    </div>
  );
};
