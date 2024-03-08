/* eslint-disable no-unused-vars */
import Button from "../components/button/index";
import EmptyCartIcon from "../assets/icons/emptybag.svg";
import TrashIcon from "../assets/icons/bin.svg";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import {
  addProductToCart,
  deleteFromCart,
  purchaseProducts,
} from "../services/services";
export default function Cart() {
  const { cartProducts, setCartProducts, removeFromCart } = useCart();

  const navigate = useNavigate();

  const calculateTotalPrice = () => {
    return cartProducts.reduce(
      (total, product) => total + product.cartProduct.price * product.count,
      0
    );
  };

  const increaseCount = async (productId) => {
    addProductToCart({ product_id: productId })
      .then(() => {
        const updatedData = cartProducts.map((item) =>
          item.cartProduct.id === productId
            ? { ...item, count: item.count + 1 }
            : item
        );
        setCartProducts(updatedData);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handlePurchase = async () => {
    try {
      const response = await purchaseProducts({
        totalPrice: calculateTotalPrice(),
        totalItems: cartProducts.reduce((total, item) => total + item.count, 0),
      });

      navigate("/payment");
    } catch (error) {
      console.error(error);
    }
  };

  const decreaseQuantity = async (productId) => {
    deleteFromCart(productId, false)
      .then(() => {
        const updatedData = cartProducts.map((item) =>
          item.id === productId
            ? { ...item, count: item.count > 1 ? item.count - 1 : 1 }
            : item
        );

        setCartProducts(updatedData);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const productItemActions = (product) => {
    return (
      <div className="flex gap-3 items-center">
        <div className="bg-orange-600 text-white flex justify-around items-center text-[12px] font-bold w-[100px] h-[30px] rounded-[30px]">
          <button
            onClick={() => decreaseQuantity(product.id)}
            disabled={product.count <= 1}
            className={`${product.count <= 1 && "opacity-50"}`}
          >
            -
          </button>

          <span>{product.count}</span>
          <button onClick={() => increaseCount(product.cartProduct.id)}>
            +
          </button>
        </div>
        <button onClick={() => removeFromCart(product.id, true)}>
          <img src={TrashIcon} alt="trashIcon" />
        </button>
      </div>
    );
  };

  return (
    <div className="custom-container  ">
      <div className="mt-10">
        <div className="pb-5 border-b-2 ">
          <p className="font-bold text-[28px] leading-7">
            შენს კალათაში{" "}
            {cartProducts.reduce((total, item) => total + item.count, 0)} ნივთია
          </p>
        </div>
        <div className="flex justify-between mt-[30px]">
          <div className="flex flex-col gap-5">
            {cartProducts.length > 0 ? (
              cartProducts.map((product) => (
                <div
                  key={product?.cartProduct.id}
                  className=" h-[100px] p-[12px] rounded-[12px] justify-between bg-[#f2f2f2] flex items-center w-[700px]"
                >
                  <div className="flex flex-row justify-start items-center">
                    <div>
                      <img
                        src={product?.cartProduct.image}
                        className="w-full h-24 object-contain"
                        alt={product?.cartProduct.title}
                      />
                    </div>
                    <div className="flex flex-col justify-start gap-4">
                      <h1 className="text-gray-600 text-md">
                        {product?.cartProduct.title}
                      </h1>
                      <span className="font-bold">
                        {" "}
                        {product?.cartProduct.price}
                      </span>
                    </div>
                  </div>
                  {productItemActions(product)}
                </div>
              ))
            ) : (
              <img src={EmptyCartIcon} alt="emptyCartIcon" />
            )}
          </div>
          <div className="rounded-[12px] ">
            <div className="flex justify-between items-center gap-2 mb-5  ">
              <h2 className="text-orange-600 font-bold text-md">
                გადასახდელი თანხა
              </h2>
              <span className="font-bold text-md text-black">
                {calculateTotalPrice().toFixed(2)}₾
              </span>
            </div>
            <div>
              <Button
                className="w-full bg-orange-600 text-white px-[10px] py-2 rounded-[4px] font-bold text-sm leading-5"
                onClick={handlePurchase}
              >
                ყიდვა
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
