import { Link, useParams } from "react-router-dom";

export default function ProductList({ products, productType }) {
    let { type } = useParams();

    const productsByType = products.filter((product) => {
        return product.type.toLowerCase() === type;
    })

    function showProduct(product) {
        return (
            <li key={product.id}>
                <Link to={`/${productType.toLowerCase()}/${product.type.toLowerCase()}/${product.id}`}>
                    <h4>{product.name}</h4>
                    <img src={product.image} alt={product.name} />
                </Link>
            </li>
        )
    }

    return (
        <section>
            <h2>All {productType}</h2>
            <article className="products">
                <ul>
                    {
                        productsByType.length === 0
                        ? products.map(product => showProduct(product))
                        : productsByType.map(product => showProduct(product))
                    }
                </ul>
            </article>
        </section>
    );
};
