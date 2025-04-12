import { ShoppingCart } from "lucide-react";
import { ProductCardPropType } from "../types/componentsTypes";
import axios from "axios";
// import Razorpay from "razorpay";

const ProductCard = (props: ProductCardPropType) => {

    const { product_id, product_title, product_cover, product_price } = props;

    const buttonClickHandler = async () => {
        const BASE_PATH = import.meta.env.VITE_BACKEND_URI_BASE_DEVELOPMENT;
        const RZ_KEY_ID = import.meta.env.VITE_RAZORPAY_KEY_ID;

        const data = await axios.post(`${BASE_PATH}/make-payment`, {
            amount: product_price
        });

        const options = {
            key: RZ_KEY_ID, // Replace with your Razorpay key_id
            amount: product_price, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: 'INR',
            name: 'GT Web Solutions',
            description: 'Razorpay Integration - Test Transaction',
            order_id: data.data.order.id, // This is the order_id created in the backend
            callback_url: `${BASE_PATH}/payment-verify-redirect`, // Your success URL
            prefill: {
                name: 'Gandhar Thakar',
                email: 'gandharthakar@example.com',
                contact: '9999999999'
            },
            theme: {
                color: '#F37254'
            },
        };

        //eslint-disable-next-line
        const rzp = new (window as any).Razorpay(options);
        rzp.open();
    };

    return (
        <>
            <div className="transition-all delay-75 rounded-[10px] p-[15px] bg-white border border-zinc-200 hover:border-zinc-700">
                <div className="mb-[15px] relative">
                    <img src={`images/products/${product_cover}`} width={400} height={400} className="w-full h-auto rounded-[7px] md:rounded-[10px]" alt={product_id} />
                </div>
                <div className="flex gap-x-[10px] items-center">
                    <div className="flex-1">
                        <div className="pb-[2px]">
                            <h2 className="text-[18px] md:text-[20px] text-zinc-700 font-roboto font-semibold">
                                {product_title}
                            </h2>
                        </div>
                        <div>
                            <h3 className="text-[16px] md:text-[18px] text-green-500 font-roboto">
                                ₹ {product_price}/-
                            </h3>
                        </div>
                    </div>
                    <div>
                        <button
                            type="button"
                            title="Buy Now"
                            className="inline-block relative rounded-[5px] w-[36px] h-[36px] transition-all delay-75 py-[7px] px-[7px] text-[16px] font-semibold font-roboto cursor-pointer bg-blue-700 text-zinc-100 hover:bg-red-600"
                            onClick={buttonClickHandler}
                        >
                            <ShoppingCart size={22} />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductCard;