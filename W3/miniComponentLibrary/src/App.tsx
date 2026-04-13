// import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
        <MyAwesomeComponent />
    </>
  )
}

const Box = (props) => {
  let width;

  if (props.size === "small") {
    width = 100;
  } else if (props.size === "medium") {
    width = 200;
  } else if (props.size === "large") {
    width = 400;
  }

  return (
      <div className="box" style={{ width: width }}>
        {props.children}
      </div>
  )
}

const Text = (props) => {
  let fontSize;
  let color;

  if (props.size === "small") {
    fontSize = 25;
  } else if (props.size === "medium") {
    fontSize = 50;
  } else if (props.size === "large") {
    fontSize = 100;
  }

  if (props.color === "orange") {
    color = "orange";
  } else if (props.color === "purple") {
    color = "purple";
  } else if (props.color === "brown") {
    color = "brown";
  }

  return (
      <div className="text" style={{fontSize: fontSize, color: color}}>{props.children}</div>
  )
}

const Button = (props) => {
  let color;

  if (props.color === "green") {
    color = "green";
  } else if (props.color === "red") {
    color = "red";
  } else if (props.color === "yellow") {
    color = "yellow";
  }

  return (
      <button className="button" style={{background: color}} onClick={props.onClick}>{props.children}</button>
  )
}

const MyAwesomeComponent = () => {
  const handleClick = () => {
    alert("Have A Great Day!");
  }

  const boxSize = "large"; // small, medium, large
  const textSize = "large"; // small, medium, large
  const textColor = "brown"; // orange, purple, brown
  const buttonColor = "yellow"; // green, red, yellow
  return (
      <Box size={boxSize}>
        <Text size={textSize} color={textColor}>{textColor}</Text>

        <Button color={buttonColor} onClick={handleClick}>Click Here!</Button>
      </Box>
  )
}

export default App
