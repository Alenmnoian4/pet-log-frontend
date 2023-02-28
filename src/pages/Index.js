import Post from "../components/Post";
import {useLoaderData} from "react-router-dom"
import { Form } from "react-router-dom";

const Index = (props) => {
  const petlogs = useLoaderData()
  // For each post in the array render a Post component
  return <>
  <div style={{textAlign: "center"}}>
  <h2>Create a Petlog</h2>
  <Form action="/create" method="post">
      <input type="text" name="pet" placeholder="write pets name here"/>
      <input type="text" name="date" placeholder="write date here"/>
      <input type="text" name="weight" placeholder="write weight here"/>
      <input type="text" name="appointments" placeholder="write any appointments here"/>
      <input type="text" name="notes" placeholder="write any notes here"/>
      <button>Create New Petlog</button>
  </Form>
  </div>
  {petlogs.map((post) => <Post post={post} key={post.id} />)}
  </>;
};

export default Index;