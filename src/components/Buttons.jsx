const Buttons = ({ deleteAll, resetNum, darklight }) => {
    return (
        <div className="flex flex-row justify-evenly my-5">
            <button
                className="btn w-[100px] hover:text-red-600"
                onClick={deleteAll}>
                Delete All
            </button>
            <button
                className="btn w-[100px] hover:text-green-500"
                onClick={resetNum}>
                Reset
            </button>
            <button
                className="btn w-[100px] hover:text-black hover:bg-white"
                onClick={darklight}>
                Dark/light
            </button>
        </div>
    );
};

export default Buttons;
