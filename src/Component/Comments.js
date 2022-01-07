// import React, { useEffect, useState } from "react";
// // import "./styles.css";

// function Search() {
//   const [input, setInput] = useState("");
//   const [results, setResults] = useState([]);

//   useEffect(() => {
//     const urls = [
//       "https://jsonplaceholder.typicode.com/comments",
//       //   "https://jsonplaceholder.typicode.com/comments?postId=1",
//     ];

//     Promise.all(
//       urls.map((url) =>
//         fetch(url)
//           .then((response) => response.json())
//           .then((data) => setResults(data))
//           .catch((error) => console.log("There was a problem!", error))
//       ),
//       []
//     );
//   }, []);

//   const handleChange = (e) => {
//     e.preventDefault();
//     setInput(e.target.value.toLowerCase());
//   };

//   return (
//     <div className="search" htmlFor="search-input">
//       <input
//         type="text"
//         name="query"
//         value={input}
//         id="search"
//         placeholder="Search"
//         onChange={handleChange}
//       />
//       {results
//         .filter((i) => input)
//         .map((result, index) => {
//           return (
//             <div className="results" key={index}>
//               <h2>{result.postId}</h2>
//               <p>{result.id}</p>
//               <p>{result.name}</p>
//               <p>{result.email}</p>

//               {result.body}
//             </div>
//           );
//         })}
//     </div>
//   );
// }

// export default function Comments() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>

//       <Search />
//     </div>
//   );
// }
