import ProductList from "./ProductList";

const Products = async ({ searchParams }) => {

const searchparams = await searchParams;

console.log("outer",searchparams)
const category = searchparams?.category || "all";
const sort = searchparams?.sort || "default";
const page = searchparams?.page || 1;

return (
    <div className="m-5">
    <ProductList />
        Showing <u>{category}</u> products, sorted by <u>{sort}</u>, and page on <u>{page}</u>.
    </div>
)

};


export default Products;
