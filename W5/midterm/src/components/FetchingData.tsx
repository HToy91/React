import useFetch from "../hooks/useFetch.tsx";
import Loading from "./Loading.tsx";
import {NavLink, Outlet, useParams} from 'react-router-dom';

const FetchingData = () => {
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
                <div className={'product-list'}>
                    {products.length && (products.map((product) => {
                        return (
                            <div key={product.id} className={"product"}>
                                <img src={product.image}/>
                                <NavLink to={`${product.id}`}>{product.title}</NavLink>
                            </div>
                        )
                    }))}
                </div>
            )}

            <Outlet />
        </>
    );
}

export default FetchingData;