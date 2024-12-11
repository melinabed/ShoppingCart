import styles from "./CartList.module.css";

const CartList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cart}>
        <h2>Your Cart</h2>
        <div className={styles.column}>
          <h3>Product</h3>
          <h3>Price</h3>
          <h3>Quantity</h3>
          <h3>Subtotal</h3>
        </div>
        <div className={styles.productContainer}>
          <div className={styles.product}>
            <button>X</button>
            <img src="src/assets/boots.JPEG" />
            <p>Ariat Boots</p>
            <p>$89.99</p>
            <input type="text" />
            <p>$89.99</p>
          </div>
          <div className={styles.product}>
            <button>X</button>
            <img src="src/assets/boots.JPEG" />
            <p>Ariat Boots</p>
            <p>$89.99</p>
            <input type="text" />
            <p>$89.99</p>
          </div>
        </div>
      </div>
      <div className={styles.totals}>
        <h2>Cart Totals</h2>
        <div className={styles.row}>
          <h3>Subtotal</h3>
          <p>$89.99</p>
        </div>
        <div className={styles.row}>
          <h3>Shipping</h3>
          <p>$5.00</p>
        </div>
        <div className={styles.row}>
          <h3>Total</h3>
          <p>$94.99</p>
        </div>
        <button className={styles.checkoutBtn}>Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default CartList;
