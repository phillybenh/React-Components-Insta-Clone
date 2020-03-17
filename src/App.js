/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React, {useState} from "react";
import "./App.css";
import dummyData from "./dummy-data"
import SearchBar from "./components/SearchBar/SearchBarContainer";
import Post from "./components/PostsContainer/Post" 
// import the PostsPage and SearchBar and add them to the App


const App = () => {

const [data] = useState(dummyData);
// console.log(data);

  return (
    <div className="App">
      {/* Add imported components here to render them */}
      <SearchBar />
      {data.map(x => (
        <Post post={x} />
      ))}
    </div>
  );
};

export default App;
