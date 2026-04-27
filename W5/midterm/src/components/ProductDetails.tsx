import {useNavigate, useParams} from "react-router-dom";
import useFetch from "../hooks/useFetch.tsx";
import Loading from "./Loading.tsx";

const ProductDetails = () => {
    const navigate = useNavigate();

    const { id } = useParams();
    const {data: product, loading, error} = useFetch(`products/${id}`);

    if (loading) {
        return <Loading />;
    }
    if (error.length > 0) {
        return <p>{error}</p>
    }

    return (
        <div className="product-details">
            <div className={"img-container"}>
                <img src={product.image}/>

                <button onClick={() => navigate('/products')} className={"back-btn"}>
                    Go Back
                </button>
            </div>
            <div>{product.title}</div>
        </div>
    )
}

export default ProductDetails;