import Users from "./Users";
import Posts from "./Posts";
import Comments from "./Comments";
import Content from "./Content";
import { useState } from "react";


function App() {

  const [content, setContent] = useState(
      ["naveen", "joshna"]
    );

  return (
    <div className="App">
      <Users 
        setContent={setContent}
      />
      <Posts 
        setContent={setContent}
      />
      <Comments 
        setContent={setContent}
      />
      <Content 
        content={content}
      />
    </div>
  );
}

export default App;
