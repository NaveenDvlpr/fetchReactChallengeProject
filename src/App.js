import Users from "./Users";
import Posts from "./Posts";
import Comments from "./Comments";
import Content from "./Content";
import { useState, useEffect } from "react";


function App() {

  const URL = "https://jsonplaceholder.typicode.com";
  const [choice, setChoice] = useState("/users")
  const [content, setContent] = useState([]);

  useEffect(
    () => {
      const fetchData = async () => {
        const res = await fetch(URL+choice);
        const data = await res.json();
        setContent(data);
      }
      fetchData();
    }
    ,[choice]
  );

  return (
    <div className="App">
      <Users 
        setChoice={setChoice}
      />
      <Posts 
        setChoice={setChoice}
      />
      <Comments 
        setChoice={setChoice}
      />
      <Content 
        content={content}
      />
    </div>
  );
}

export default App;
