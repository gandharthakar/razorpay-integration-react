import ProductCard from "../components/productCard";
import products from "../data/data";

const HomePage = () => {

    return (
        <section className="min-h-screen bg-zinc-100">
            <div className="max-w-[1440px] py-[50px] px-[20px] mx-auto">
                <div className="pb-[20px] md:pb-[50px] text-center">
                    <h1 className="text-[20px] md:text-[30px] font-bold text-zinc-800 font-roboto">
                        My Products
                    </h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[15px]">
                    {
                        products && products.map((item) => (
                            <ProductCard
                                key={item.product_id}
                                product_id={item.product_id}
                                product_title={item.product_title}
                                product_cover={item.product_cover}
                                product_price={item.product_price}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default HomePage;