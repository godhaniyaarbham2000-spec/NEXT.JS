const Blog = async (props)=>{
const {slug} = await props.params;
console.log(slug);

return (
    <>
        <h1 className="m-5">Dynamic Nested Routing Slug</h1>
        
    </>
)

};

export default Blog;