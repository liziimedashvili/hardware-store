import "react-credit-cards-2/dist/es/styles-compiled.css";
import { useState } from "react";
import Button from "../components/button";
import Cards from "react-credit-cards-2";
import { getPurchases } from "../services/services";

const PaymentForm = () => {
  const [showCardForm, setShowCardForm] = useState(false);
  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  const [errors, setErrors] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    setState((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  const handleSubmit = async () => {
    let isValid = true;
    const newErrors = {};

    if (state.number.replace(/\D/g, "").length !== 16) {
      newErrors.number = "უნდა იყოს 16 ციფრი";
      isValid = false;
    }
    if (state.name.trim() === "") {
      newErrors.name = "ამ ნაწილის შევსება აუცილებელია ";
      isValid = false;
    }
    if (!/^\d{2}\/\d{2}$/.test(state.expiry)) {
      newErrors.expiry = "Expiry უნდა იყოს MM/YY ფორმატში";
      isValid = false;
    }
    if (state.cvc.replace(/\D/g, "").length !== 3) {
      newErrors.cvc = "CVC უნდა იყოს სამი რიცხვი";
      isValid = false;
    }

    if (!isValid) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await getPurchases();

      console.log("Purchase data:", response.data);
    } catch (error) {
      console.error("Error fetching purchases:", error);
    }
  };

  return (
    <div className="custom-container">
      <div className="mt-10">
        <div className="mb-4 border-b border-gray-200 p-2">
          <h1 className="text-xl font-bold text-orange-600">გადაიხადე აქ</h1>
        </div>
        {!showCardForm && (
          <div className="flex justify-center my-32">
            <div>
              <input
                type="text"
                placeholder="ჩაწერე შენი ლოკაცია"
                className="p-3 outline-none bg-gray-300 rounded-lg font-serif w-96"
              />
              <Button
                className="bg-orange-600 hover:bg-orange-700 w-full text-white font-bold py-2 px-4 rounded-lg focus:outline-none mt-2 focus:shadow-outline"
                onClick={() => setShowCardForm(true)}
              >
                დადასტურება
              </Button>
            </div>
          </div>
        )}
        {showCardForm && (
          <div className="flex justify-center gap-2">
            <div>
              <Cards
                number={state.number}
                expiry={state.expiry}
                cvc={state.cvc}
                name={state.name}
                focused={state.focus}
              />
              <form className="flex flex-col mt-2 gap-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Cardholder Name"
                  value={state.name}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  className={`p-2 outline-none bg-gray-300 rounded-lg font-serif ${
                    errors.name && "border-red-500"
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs italic">{errors.name}</p>
                )}
                <input
                  type="text"
                  name="expiry"
                  placeholder="Expiry Date (MM/YY)"
                  value={state.expiry}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  className={`p-2 outline-none bg-gray-300 rounded-lg font-semibold ${
                    errors.expiry && "border-red-500"
                  }`}
                />
                {errors.expiry && (
                  <p className="text-red-500 text-xs italic">{errors.expiry}</p>
                )}
                <input
                  type="number"
                  name="cvc"
                  placeholder="CVV/CVC"
                  value={state.cvc}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  className={`p-2 outline-none bg-gray-300 rounded-lg font-semibold ${
                    errors.cvc && "border-red-500"
                  }`}
                />
                {errors.cvc && (
                  <p className="text-red-500 text-xs italic">{errors.cvc}</p>
                )}
                <input
                  type="number"
                  name="number"
                  placeholder="Card Number"
                  value={state.number}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  className={`p-2 outline-none bg-gray-300 rounded-lg font-semibold ${
                    errors.number && "border-red-500"
                  }`}
                />
                {errors.number && (
                  <p className="text-red-500 text-xs italic">{errors.number}</p>
                )}
              </form>
              <Button
                className="bg-orange-600 hover:bg-orange-700 w-full text-white font-bold py-2 px-4 rounded-lg focus:outline-none mt-2 focus:shadow-outline"
                onClick={handleSubmit}
              >
                გადახდა
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentForm;
