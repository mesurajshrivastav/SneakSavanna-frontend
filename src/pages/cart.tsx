import { useEffect, useState } from "react";
import { BiErrorAlt } from "react-icons/bi";
import CartItem from "../components/cart-Item";

const cartItems = [
  {
    productId : "ksdnkalk",
    photo : "https://media.vogue.in/wp-content/uploads/2021/10/Air-Jordans-2.jpg",
    name : "jordan",
    price : 3000,
    quantity : 4,
    stock : 10
  }
];
const subtotal = 4000;
const tax = Math.round(4000 * 0.18);
const shippingCharges = 200;
const discount = 400;
const total = subtotal + tax + shippingCharges;

const Cart = () => {
  const [couponCode, setCouponCode] = useState<String>("");
  const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      if (Math.random() > 0.5) setIsValidCouponCode(true);
      else setIsValidCouponCode(false);
    }, 1000);

    return () => {
      clearTimeout(timeOutId);
      setIsValidCouponCode(false);
    };
  }, [couponCode]);

  return (
    <>
      <main>

    {
      cartItems.map((i, idx)=>(
        <CartItem key={idx} cartItem={i}/>
      ))
    }

      </main>
      <aside>
        <p>Subtotal : ₹{subtotal}</p>
        <p>Shipping Charges : ₹{shippingCharges}</p>
        <p>Tax : ₹{tax}</p>
        <p>
          Discount : <em> -₹{discount}</em>
        </p>
        <p>
          <b>Total : ₹{total}</b>
        </p>
        <input
          type="text"
          placeholder="Coupon code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />

        {couponCode &&
          (isValidCouponCode ? (
            <span className="green">
              ₹{discount} off using the <code>{couponCode}</code>
            </span>
          ) : (
            <span className="red">
              <BiErrorAlt /> Invalid Coupon
            </span>
          ))}
      </aside>
    </>
  );
};

export default Cart;
