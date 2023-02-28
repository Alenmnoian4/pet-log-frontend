import { Link, useLoaderData } from "react-router-dom";
import "../styles/Stylesheet.css"

// destructuring the props needed to get our post, including router prop match
const Show = () => {
  const post = useLoaderData();

  ////////////////////
  // Styles
  ///////////////////
  const div = {
    textAlign: "center",
    border: "3px solid green",
    width: "80%",
    margin: "30px auto",
  };

  return (
    <div style={div}>
      <h1>{post.pet}</h1>
      <h2>{post.date}</h2>
      <h2>{post.weight}</h2>
      <h2>{post.appointments}</h2>
      <h2>{post.notes}</h2>
      <Link to="/">
        <button className="formbutton">Go Back</button>
      </Link>
    </div>
  );
};

export default Show;