import Post from "../components/Post";
import {useLoaderData} from "react-router-dom"
import { Form } from "react-router-dom";
import "../styles/Stylesheet.css"

const Index = (props) => {
  const petlogs = useLoaderData()
  console.log(petlogs, "<this is the pet logs>")
  // For each post in the array render a Post component
  return <>
  <div style={{textAlign: "center"}}>
    
  <h2 className="petheader">My Pet Planner</h2>
  <img src="https://i.imgur.com/CSrJcNh.gif" alt="petlogo"/>
  <Form action="/create" method="post">
      <input type="text" name="pet" placeholder="write pets name here"/>
      <input type="text" name="date" placeholder="write date here"/>
      <input type="text" name="weight" placeholder="write weight here"/>
      <input type="text" name="appointments" placeholder="write any appointments here"/>
      <input type="text" name="notes" placeholder="write any notes here"/>
      <button className="formbutton">Create New Petlog</button>
  </Form>
  </div>
  {petlogs.map((post) => <Post post={post} key={post.id} />)}
  </>;
};

export default Index;