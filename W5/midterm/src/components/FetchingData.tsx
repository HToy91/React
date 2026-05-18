import useFetch from "../hooks/useFetch.tsx";
import Loading from "./Loading.tsx";
import {useNavigate, Outlet, useParams} from 'react-router-dom';
import {useContext} from "react";
import {ThemeContext} from "../themeContext.tsx";

interface Product {
    id: number;
    title: string;
    image: string;

}

const FetchingData = () => {

    const navigate = useNavigate();
    const {data: products, loading, error} = useFetch<Product[]>('products');
    const {id} = useParams();

    const { theme } = useContext(ThemeContext)

    if (loading) {
        return <Loading />;
    }
    if (error.length > 0) {
        return <p>{error}</p>
    }

    if (!products) {
        return <p>No products found.</p>;
    }

    return (
        <div style={{ backgroundColor: theme.background, color: theme.foreground }}>
            {!id && (
                <button className={'product-list'}>
                    {products.map((product) => {
                        return (
                            <div key={product.id} className={"product"} onClick={() => navigate(`${product.id}`)} style={{ backgroundColor: theme.background, color: theme.foreground }}>
                                <img src={product.image} alt={"Error Loading Image"}/>
                                <p>{product.title}</p>
                            </div>
                        )
                    })}
                </button>
            )}

            <Outlet />
        </div>
    );
}

export default FetchingData;