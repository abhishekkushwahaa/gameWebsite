const Hero = () => {
    return (
        <div className="py-10 mt-10">
            <h1 className="text-white text-center text-5xl font-bold py-4 mt-10">SURVIVE AT ALL COSTS</h1>
            <h2 className="text-white text-center text-md mt-1">EXPERIENCE NEW ASSASSINS CREED MAURYA</h2>
            
            <div className="flex items-center justify-center py-10">
            <button className="border border-green-600 bg-green-600 bg-opacity-20 hover:bg-green-500 hover:bg-opacity-30 text-green-300 hover:text-green-500 m-3 p-3 rounded-md text-md content-center mt-50">Pre-Order Now | $44.50</button>
            </div>

            <div className="py-10 mt-10">
                <h1 className="text-white text-center mt-1 font-medium">THE SHOW</h1>
                <div className="flex mt-2 item-center justify-center">
                    <img src="assets/scroll_down.svg" alt="scroll"/>
                </div>
            </div>

        </div>
    )
};

export default Hero;