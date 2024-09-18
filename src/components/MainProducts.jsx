import Products from "./Products";

const MainProducts = ({ products, numOfItems, dele }) => {
    return (
        <div className="flex flex-col items-center">
            <div className="w-[80%]">
                {products.map((p, i) => (
                    <div key={i}>
                        <Products p={p} numOfItems={numOfItems} dele={dele} />
                    </div>
                ))}
            </div>
            <span className="text-3xl">
                {products != ""
                    ? "Total is :" +
                      products
                          .map((i) => i.price * i.items)
                          .reduce((i, y) => i + y)
                    : "Cart is Empty"}
            </span>
        </div>
    );
};

export default MainProducts;
