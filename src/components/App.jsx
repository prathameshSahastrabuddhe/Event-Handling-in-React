import React ,{useState} from "react";

function App() {


  const [headingText ,setHeadingText] = useState("Hello");

  const [isMouseOver,setMouseOver] = useState(false);


  function handleClick (){
    setHeadingText("Submitted")
  }

  function handleOver() {
   setMouseOver(true)
  }

  function handleOut() {
   setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={{backgroundColor : isMouseOver ? "black" : "white"}} onMouseOver={handleOver} onMouseOut={handleOut} onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
