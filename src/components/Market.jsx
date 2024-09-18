const Market = ({ products: { name, id }, addProduct }) => {
    return (
        <div>
            <button
                className="btn w-[100px] bg-green-500 text-black hover:text-white"
                onClick={() => {
                    addProduct(id);
                }}>
                {name}
            </button>
        </div>
    );
};

export default Market;
