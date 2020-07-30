import React, { useState, useEffect, useRef, useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Navbar from "./Components/NavbarComponent";
import Layout from "./pages/Layout";

// const ForRef = () => {
//   const [name, setName] = useState("");
//   const [count, setCount] = useState(0);
//   const renderCount = useRef(0);

//   useEffect(() => {
//     setCount(count + 1);
//     renderCount.current = renderCount.current + 1;
//   }, [name]);

//   return (
//     <div>
//       <input
//         value={name}
//         onChange={(e) => {
//           setName(e.target.value);
//         }}
//       />
//       <div>my name is {name}</div>
//       <div>{renderCount.current} renderd!</div>
//       {count}
//     </div>
//   );
// };
// function slowFunction(num) {
//   console.log("Calling Slow Function");
//   for (let i = 0; i < 1000000000; i++) {}
//   return num * 2;
// }

// const ForMemo = () => {
//   const [number, setNumber] = useState();
//   const [dark, setDark] = useState(false);
//   const doulbeNumSlow = useMemo(() => {
//     return slowFunction(number);
//   }, [number]);
//   const themStyles = {
//     backgroundColor: dark ? "black" : "white",
//     color: dark ? "white" : "black",
//   };
//   return (
//     <div>
//       <input
//         value={number}
//         onChange={(e) => {
//           setNumber(e.target.value);
//         }}
//       />
//       <button
//         onClick={() => {
//           setDark((prevDark) => !prevDark);
//         }}
//       >
//         Change Theme
//       </button>
//       <div style={themStyles}>{doulbeNumSlow}</div>
//     </div>
//   );
// };

function App() {
  return (
    <>
      <Navbar />
      <Layout />
      {/* <ForRef />
      <ForMemo /> */}
    </>
  );
}

export default App;
