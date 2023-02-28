import { Link, useLoaderData, Form } from "react-router-dom";
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
      <div style={{ textAlign: "center" }}>
        <h2 className="createlog">Create a Petlog</h2>
        <Form action={`/update/${post.id}`} method="post">
          <input className="inputstyle"
            type="text"
            name="pet"
            placeholder="write pets name here"
            defaultValue={post.pet}
          />
          <input className="inputstyle"
            type="text"
            name="date"
            placeholder="write date here"
            defaultValue={post.date}
          />
          <input
            type="text"
            name="weight"
            placeholder="write date here"
            defaultValue={post.date}
          />
          <input
            type="text"
            name="appointments"
            placeholder="write any appointments here"
            defaultValue={post.appointments}
          />
          <input
            type="text"
            name="notes"
            placeholder="write any notes here"
            defaultValue={post.notes}
          />
          <button className="formbutton">Update Petlog</button>
        </Form>
        <Form action={`/delete/${post.id}`} method="post">
          <button className="formbutton">Delete Petlog</button>
        </Form>
      </div>
      <Link to="/">
        <button className="formbutton">Go Back</button>
      </Link>
    </div>
  );
};

export default Show;