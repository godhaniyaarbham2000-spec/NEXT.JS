const SingleProfile = async (props)=>{
    const user =await props.params;
    console.log(props);
    console.log(user);
    return <h1 className="m-5">user = {user.username}</h1>;


};

export default SingleProfile;