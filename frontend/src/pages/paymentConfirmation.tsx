import { CircleCheckBig } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";

const PaymentConfirmation = () => {
    const [searchParams] = useSearchParams();

    return (
        <>
            <section className="min-h-screen bg-zinc-100 flex items-center justify-center py-[50px] px-[15px]">
                <div className="max-w-[500px] w-full">
                    <div className="w-full p-[30px] bg-white rounded-[15px] border border-zinc-300">
                        <div className="pb-[10px] text-center">
                            <CircleCheckBig size={40} className="text-green-500 inline-block w-[35px] h-[35px] md:w-[40px] md:h-[40px]" />
                        </div>
                        <div className="pb-[10px] text-center">
                            <h1 className="inline-block text-[20px] md:text-[26px] font-roboto font-bold text-green-500">
                                Payment Successfull!
                            </h1>
                        </div>
                        <div className="pb-[15px] text-center max-w-[400px] mx-auto">
                            <p className="block text-[14px] font-roboto text-zinc-600">
                                Thank you! for making the payment. You will recieve confirmation of this payment. Kindly not the below reference no for your record.
                            </p>
                        </div>
                        <div className="text-center">
                            <h4 className="inline-block bg-zinc-200 text-zinc-700 text-[14px] font-roboto px-[10px] py-[3px] rounded-[5px]">
                                <span className="font-bold">Reference ID :</span> {searchParams.get('payment_reference_number') ? searchParams.get('payment_reference_number') : null}
                            </h4>
                        </div>
                    </div>

                    <div className="pt-[15px] text-center">
                        <Link to="/" title="Back To Products" className="inline-block text-[14px] font-semibold underline text-zinc-900 hover:text-blue-700">
                            Back To Products
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PaymentConfirmation;