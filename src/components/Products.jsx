const Products = ({ p: { id, name, items, price }, numOfItems, dele }) => {
    return (
        <div className="flex felx-col justify-evenly items-center h-14 bg-gray-600 text-white rounded-3xl my-5">
            <span className="w-20 text-center">{name}</span>
            <span>{price}</span>
            <div className="w-48 flex justify-evenly items-center ">
                <button
                    className="btn w-12 bg-blue-500 text-black hover:bg-blue-600"
                    onClick={() => {
                        numOfItems(id, "+");
                    }}>
                    +
                </button>
                <span className="w-8 text-center">{items}</span>
                <button
                    className="btn w-12 bg-red-500 text-black hover:bg-red-600"
                    onClick={() => {
                        numOfItems(id, "-");
                    }}>
                    -
                </button>
            </div>
            <span className="w-28 text-center">Total : {items * price}</span>
            <button
                className="btn btn-circle btn-outline"
                onClick={() => {
                    dele(id);
                }}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>
        </div>
    );
};

export default Products;
