import { Link } from "react-router-dom";
import "../styles/Stylesheet.css"

//destructure the post from props
const Post = ({ post }) => {
  //////////////////
  // Style Objects
  //////////////////
  const div = {
    textAlign: "center",
    border: "3px solid",
    margin: "10px auto",
    width: "80%",
  };
  return (
    <div style={div}>
      <Link to={`/post/${post.id}`}>
        <h1>{post.pet}</h1>
      </Link>
      <h2>{post.date}</h2>
      <h2>{post.weight}</h2>
      <h2>{post.appointments}</h2>
      <h2>{post.notes}</h2>
    </div>
  );
};

export default Post