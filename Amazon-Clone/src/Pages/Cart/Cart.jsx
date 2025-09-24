import { useContext, useState } from "react";
import { DataContext } from "../../Componenets/DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";
import styles from "./Cart.module.css"; // CSS module

// export default function Cart() {
//   const [{ basket }, dispatch] = useContext(DataContext);

//   const totalPrice = basket.reduce(
//     (sum, item) => sum + (item.price * (item.qty||1)),
//     0
//   );

//   const increaseQty = (id) => dispatch({ type: Type.INCREASE_QTY, id });

//   const decreaseQty = (id) => dispatch({ type: Type.DECREASE_QTY, id });

//   return (
//     <div className={styles.cartPage}>
//       <h2>Your Shopping Cart</h2>
//       {basket.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div>
//           <ul className={styles.cartItems}>
//             {basket.map((item) => (
//               <li key={item.id} className={styles.cartItem}>
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className={styles.cartImg}
//                 />
//                 <div className={styles.cartInfo}>
//                   <h4>{item.title}</h4>
//                   <p>Price: ${item.price.toFixed(2)}</p>

//                   {/* Quantity controls */}
//                   <div className={styles.qtyControls}>
//                     <button onClick={() => decreaseQty(item.id)}>-</button>
//                     <span>{item.qty}</span>
//                     <button onClick={() => increaseQty(item.id)}>+</button>
//                   </div>

//                   <p>
//                     Subtotal:<strong>${(item.price * (item.qty||1)).toFixed(2)}</strong>
//                   </p>
//                 </div>
//               </li>
//             ))}
//           </ul>

//           {/* Checkout section */}
//           <div className={styles.checkoutBox}>
//             <h3>Total: ${totalPrice.toFixed(2)}</h3>
//             <label>
//               <input type="checkbox" /> This order contains a gift
//             </label>
//             <button className={styles.checkoutBtn}>Proceed to Checkout</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default function Cart() {
//   const [{ basket }, dispatch] = useContext(DataContext);

//   const increaseQty = (id) => {
//     dispatch({ type: Type.ADD_TO_BASKET, item: { id } }); // already handles +1 in reducer
//   };

//   const decreaseQty = (id) => {
//     dispatch({ type: Type.DECREASE_QTY, id });
//   };

//   const totalPrice = basket.reduce(
//     (sum, item) => sum + item.price * (item.qty || 1),
//     0
//   );

//   return (
//     <div className={styles.cartPage}>
//       <div className={styles.cartItemsSection}>
//         <h2>Your Shopping Cart</h2>
//         {basket.length === 0 ? (
//           <p>Your cart is empty.</p>
//         ) : (
//           <ul className={styles.cartItems}>
//             {basket.map((item, i) => (
//               <li key={i} className={styles.cartItem}>
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className={styles.cartImg}
//                 />
//                 <div className={styles.cartInfo}>
//                   <h4>{item.title}</h4>
//                   <p className={styles.desc}>{item.description}</p>
//                 </div>
//                 <div className={styles.cartActions}>
//                   <div className={styles.qtyControl}>
//                     <button onClick={() => decreaseQty(item.id)}>-</button>
//                     <span>{item.qty || 1}</span>
//                     <button onClick={() => increaseQty(item)}>+</button>
//                   </div>
//                   <p className={styles.price}>${item.price.toFixed(2)}</p>
//                   <p className={styles.subtotal}>
//                     Subtotal: ${(item.price * (item.qty || 1)).toFixed(2)}
//                   </p>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>

//       {basket.length > 0 && (
//         <div className={styles.checkoutSection}>
//           <h3>
//             Subtotal ({basket.reduce((sum, item) => sum + (item.qty || 1), 0)}{" "}
//             items): ${totalPrice.toFixed(2)}
//           </h3>
//           <label>
//             <input type="checkbox" /> This order contains a gift
//           </label>
//           <button className={styles.checkoutBtn}>Proceed to Checkout</button>
//         </div>
//       )}
//     </div>
//   );
// }
export default function Cart() {
  const [{ basket }, dispatch] = useContext(DataContext);
  const [isGift, setIsGift] = useState(false);

  // Calculate total
  const totalPrice = basket.reduce(
    (sum, item) => sum + (item.price || 0) * (item.qty || 1),
    0
  );

  const increaseQty = (id) => {
    dispatch({ type: Type.INCREASE_QTY, id });
  };

  const decreaseQty = (id) => {
    dispatch({ type: Type.DECREASE_QTY, id });
  };

  const removeItem = (id) => {
    dispatch({ type: Type.REMOVE_FROM_BASKET, id });
  };

  return (
    <div className={styles.cartPage}>
      <h2>Your Shopping Cart</h2>

      {basket.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className={styles.cartContainer}>
          <ul className={styles.cartItems}>
            {basket.map((item) => (
              <li key={item.id} className={styles.cartItem}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={styles.cartImg}
                />
                <div className={styles.cartInfo}>
                  <h4>{item.title}</h4>
                  <p>${item.price?.toFixed(2)}</p>

                  <div className={styles.qtyControls}>
                    <button onClick={() => decreaseQty(item.id)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => increaseQty(item.id)}>+</button>
                  </div>

                  <p>
                    Subtotal: $
                    {((item.price || 0) * (item.qty || 1)).toFixed(2)}
                  </p>

                  <button
                    className={styles.removeButton}
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className={styles.cartSummary}>
            <label>
              <input
                type="checkbox"
                checked={isGift}
                onChange={() => setIsGift(!isGift)}
              />
              This order contains a gift
            </label>
            {/* Total items and subtotal */}
            <h3>
              Subtotal ({basket.reduce((sum, item) => sum + (item.qty || 1), 0)}{" "}
              items): ${totalPrice.toFixed(2)}
            </h3>
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
            <button className={styles.checkoutButton}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
