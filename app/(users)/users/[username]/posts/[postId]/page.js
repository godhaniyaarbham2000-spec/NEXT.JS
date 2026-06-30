const SingleProfilePost = async (props)=>{
    const user =await props.params;
    console.log(props);
    console.log(user);
    return <h1 className="m-5">user : {user.username} , PostID : {user.postId}</h1>;


};

export default SingleProfilePost;


//useapi use kri client ma pan joi sakai use(props.params)  thi