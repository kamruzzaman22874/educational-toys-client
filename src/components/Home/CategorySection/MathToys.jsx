const MathToys = ({ math }) => {
    console.log(math);
    return (
        <div>
            <div className="toy-card">
                <img src={math.image} alt={math.name} />
                <h3>{math.name}</h3>
                <p>Price: {math.price}</p>
                <p>Rating: {math.rating}</p>
                <button>View Details</button>
            </div>
        </div>
    );
};

export default MathToys;