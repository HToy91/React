import Loading from "./Loading";
import useFetch from "../hooks/useFetch.tsx";
// import useFetchProducts from "../hooks/useFetchProducts.tsx";
const FetchingData = () => {
    const {data: products, error, loading} = useFetch("posts");
    // const {products, error, loading} = useFetchProducts();
    if (loading) {
        return <Loading />;
    }

    if (error.length > 0) {
        return <p>{error}</p>
    }

    return (
        <div className={"json-list"}>
            {products.length && (products.map((product) => {
                return (
                    <div key={product.id}>
                        <p>{product.title}</p>
                        <p>{product.body}</p>
                    </div>
                );
            }))}
        </div>
    );
};

export default FetchingData;