import {NavLink, useParams} from "react-router-dom";
import useFetch from "../hooks/useFetch.tsx";
import Loading from "./Loading.tsx";

const ProductDetails = () => {
    const { id } = useParams();
    const {data: product, loading, error} = useFetch(`products/${id}`);

    if (loading) {
        return <Loading />;
    }
    if (error.length > 0) {
        return <p>{error}</p>
    }

    return (
        <>
            <div>
                <img src={product.image}/>

                <button>
                    <NavLink to={'/products'}>Go back</NavLink>
                </button>
            </div>
            <div>{product.title}</div>
        </>
    )
}

export default ProductDetails;