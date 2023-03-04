import { useParams, useNavigate } from "react-router-dom";

export default function Product({ products }) {
    let { id } = useParams();

    const navigate = useNavigate();
    const mockBuyNow = () => {
        alert('You pressed Buy Now! Congrats! Our sophisticated system is already charging your card and sending you your purchase. Let\'s go back to the home page!')
        navigate("/")
    }
    /*
    destructuring - extract a product form the products array,
    and before the prior step,
    we are checking each products id in the array with the id given to us
    and filtering out the specific product we want into the prouct variable
    */
    const [ product ] = products.filter(product => product.id === id);

    if (product) {
        return (
            <section>
                <h5>{product.name}</h5>
                <img src={product.image} alt={product.name} />
                <p>{product.type}</p>
                <p>{product.style}</p>
                <p>${product.price}</p>
                <button onClick={mockBuyNow}>Buy Now!</button>
            </section>
        )
    }
    return (<h1>No products found</h1>)
}