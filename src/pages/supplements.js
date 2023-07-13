import Data from "../data/data";
import "../styles/supplements.css";

export const Supplements = ({ AddToCart, filterCategory }) => {
  {
    if (filterCategory === "all") {
      return (
        <div className="product-display">
          {Data.map((supplement) => (
            <div className="product-card" key={supplement.id}>
              <div className="img-container">
                <img src={supplement.image} alt="#" />
              </div>
              <div>
                <b>{supplement.name}</b>
              </div>
              <div>${supplement.price}</div>
              <button
                className="add-to-cart-button"
                onClick={() => {
                  AddToCart(supplement);
                }}
              >
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div className="product-display">
          {Data.filter(
            (supplement) => filterCategory === supplement.category
          ).map((supplement) => (
            <div className="product-card" key={supplement.id}>
              <div className="img-container">
                <img src={supplement.image} alt="#" />
              </div>
              <div>
                <b>{supplement.name}</b>
              </div>
              <div>${supplement.price}</div>
              <button
                className="add-to-cart-button"
                onClick={() => {
                  AddToCart(supplement);
                }}
              >
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      );
    }
  }
};
