import Market from "./Market";

const MainMarket = ({ products, addProduct }) => {
    return (
        <div className="flex justify-evenly">
            {products.map((p, index) => (
                <div key={index}>
                    <Market products={p} addProduct={addProduct} />
                </div>
            ))}
        </div>
    );
};

export default MainMarket;
