import useFetch from "../hooks/useFetch.tsx";
import Loading from "./Loading.tsx";
import {useNavigate, Outlet, useParams} from 'react-router-dom';

const FetchingData = () => {

    const navigate = useNavigate();
    const {data: products, loading, error} = useFetch('products');
    const {id} = useParams();

    if (loading) {
        return <Loading />;
    }
    if (error.length > 0) {
        return <p>{error}</p>
    }

    return (
        <>
            {!id && (
                <button className={'product-list'}>
                    {products.length && (products.map((product) => {
                        return (
                            <div key={product.id} className={"product"} onClick={() => navigate(`${product.id}`)}>
                                <img src={product.image}/>
                                <p>{product.title}</p>
                            </div>
                        )
                    }))}
                </button>
            )}

            <Outlet />
        </>
    );
}

export default FetchingData;