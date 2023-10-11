import image from "../../assets/image/children.webp"
const ExtraSection = () => {
    return (
        <div className="bg-cover bg-fixed bg-center h-[300px] bg-slate-700 opacity-50 bg-transparent w-full" style={{ backgroundImage: `url(${image})` }}>
            <div className="flex justify-center items-center h-full">
                <div className="text-center space-y-3 font-semibold">
                    <p className="text-lg">TENNIS, BADMINTON, VOLLEYBALL</p>
                    <h2 className="text-6xl">ALL PRODUCTS</h2>
                    <h3 className="text-2xl">COLLECTIONS 25% OFFER</h3>
                    <button className="bg-[#3ec5c7] hover:bg-green-800 px-6 py-3 rounded text-white">Shop now</button>
                </div>
            </div>
            
        </div>
    );
};

export default ExtraSection;