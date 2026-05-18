import {useNavigate, useParams} from "react-router-dom";
import useFetch from "../hooks/useFetch.tsx";
import Loading from "./Loading.tsx";

interface Product {
    id: number
    title: string
    description: string
    image: string
    category: string
}

const ProductDetails = () => {
    const navigate = useNavigate();

    const { id } = useParams();
    const {data: product, loading, error} = useFetch<Product>(`products/${id}`);

    if (loading) {
        return <Loading />;
    }
    if (error.length > 0) {
        return <p>{error}</p>
    }

    if (!product) {
        return <p>Product not found.</p>
    }

    return (
        <div className="product-details">
            <div className={"img-container"}>
                <img src={product.image} alt={"Error Loading Image"}/>

                <button onClick={() => navigate('/products')} className={"back-btn"}>
                    Go Back
                </button>
            </div>
            <div className="details">
                <div><b>{product.title}</b></div>
                <hr/>
                <div>{product.category}</div>
                <hr/>
                <div>{product.description}</div>
            </div>
        </div>
    )
}

export default ProductDetails;