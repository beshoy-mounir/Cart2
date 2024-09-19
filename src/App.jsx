import { useState } from "react";
import Nav from "./components/Nav";
import MainMarket from "./components/MainMarket";
import Buttons from "./components/Buttons";
import MainProducts from "./components/MainProducts";

function App() {
    const [products, setProducts] = useState([
        { id: 1, name: "chipsy", price: 100, items: 1 },
        { id: 2, name: "pepsi", price: 200, items: 1 },
        { id: 3, name: "cigaretes", price: 300, items: 1 },
        { id: 4, name: "kranshy", price: 400, items: 1 },
    ]);

    const [readonly] = useState([
        { id: 1, name: "chipsy", price: 100, items: 1 },
        { id: 2, name: "pepsi", price: 200, items: 1 },
        { id: 3, name: "cigaretes", price: 300, items: 1 },
        { id: 4, name: "kranshy", price: 400, items: 1 },
    ]);

    const [bgColor, setbgColor] = useState(true);

    // Add Products
    const addProduct = (sentId) => {
        if (products.find((i) => i.id == sentId)) {
            numOfItems(sentId, "+");
        } else {
            setProducts([...products, readonly[sentId - 1]]);
        }
    };

    // DeleteALL
    const deleteAll = () => {
        setProducts([]);
    };

    // Reset
    const resetNum = () => {
        let newProducts = products.map((products) => {
            products.items = 1;
            return products;
        });
        setProducts(newProducts);
    };

    // DarkLight
    const darklight = () => {
        setbgColor(!bgColor);
    };

    // items number change

    const numOfItems = (sentId, sign) => {
        let newProducts = products.map((product) => {
            if (product.id == sentId) {
                if (sign == "+") {
                    product.items += 1;
                } else if (sign == "-") {
                    product.items > 1 ? (product.items -= 1) : product.items;
                }
            }
            return product;
        });
        setProducts(newProducts);
    };

    // Delete button
    const dele = (sentId) => {
        let newProducts = products.filter((product) => product.id != sentId);
        setProducts(newProducts);
    };
    return (
        <div
            className="h-screen select-none"
            style={{ backgroundColor: bgColor ? "white" : "black" }}>
            <Nav products={products} />
            <MainMarket products={readonly} addProduct={addProduct} />
            <Buttons
                deleteAll={deleteAll}
                resetNum={resetNum}
                darklight={darklight}
            />
            <MainProducts
                products={products}
                numOfItems={numOfItems}
                dele={dele}
            />
        </div>
    );
}

export default App;
