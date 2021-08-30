import { useParams } from "react-router";
const ProductDetails = ()=> {
    const params = useParams();
return (
    <>
        <section>
            <h1>this is product details page</h1>
            <p>{params.productId}</p>
        </section>
    </>
)
}
export default ProductDetails;