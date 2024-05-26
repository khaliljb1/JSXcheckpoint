import pruducts from'../data/pruducts.json';
function Pruducts ({pruductNulber}) {

    return <div>
        {pruductNulber}
        {pruducts.products.map((pruducts) =>(
            <div>
                <h5>{pruducts.title}</h5>
                <p>{pruducts.description}</p>
                <img src={pruducts.thumbnail} alt='' />
                <h6>${pruducts.price}</h6>
            </div>
        ))}
    </div>
}
export default Pruducts