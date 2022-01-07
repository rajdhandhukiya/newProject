// import { Form } from "react-bootstrap";
// import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
// import InputValue from "./InputValue";
// import "bootstrap/dist/css/bootstrap.min.css";

// function Forms() {
//   const [name, setName] = useState("");
//   const [data, setData] = useState([]);
//   const [email, setEmail] = useState("");
//   const [number, setNumber] = useState("");
//   const [password, setPassword] = useState("");
//   const [isButton, setIsButton] = useState(true);
//   const [dataIndex, setDataIndex] = useState("");

//   function onSubmit(e) {
//     e.preventDefault();

//     const formData = new FormData(e.target),
//       formDataObj = Object.fromEntries(formData.entries());
//     console.log(formDataObj);

//     if (isButton) setData([...data, formDataObj]);
//     else {
//       let arr = data;
//       for (let i = 0; i < arr.length; i++) {
//         console.log(i, dataIndex);
//         if (i === dataIndex) {
//           arr[i] = formDataObj;
//           setDataIndex("");
//         }
//       }
//       setData([...arr]);
//       setIsButton(true);
//     }
//     e.target.reset();
//     clear();
//   }

//   const clear = () => {
//     setName("");
//     setEmail("");
//     setNumber("");
//     setPassword("");
//   };

//   function handleRemove(index) {
//     let arr = data;
//     arr.splice(index, 1);
//     setData([...arr]);

//     console.log("removeData", data);
//   }

//   const handleEdit = (editData, index) => {
//     setName(editData.Name);
//     setEmail(editData.Email);
//     setNumber(editData.Number);
//     setPassword(editData.Password);
//     setIsButton(false);
//     setDataIndex(index);
//   };

//   // const enabled =
//   //   name.length > 0 &&
//   //   email.length > 0 &&
//   //   password.length > 0 &&
//   //   number.length > 0;

//   return (
//     <>
//       <Form onSubmit={onSubmit}>
//         <InputValue />
//         {/* <InputValue /> */}
//         {/* <Form.Group className="mb-3" controlId="formBasicName">
//           <Form.Label>Name</Form.Label>
//           <Form.Control
//             type="Name"
//             placeholder="Name"
//             name={"Name"}
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control
//             type="email"
//             name={"Email"}
//             placeholder="Enter email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             placeholder=" Password"
//             name={"Password"}
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicNumber">
//           <Form.Label>Number</Form.Label>
//           <Form.Control
//             type="Number"
//             placeholder="Number"
//             name={"Number"}
//             value={number}
//             onChange={(e) => setNumber(e.target.value)}
//           />
//         </Form.Group> */}

//         <Button
//           variant="primary"
//           type="submit"
//           // disabled={!enabled}
//         >
//           {isButton ? "save" : "update"}
//         </Button>
//       </Form>
//       <table className="table">
//         <thead>
//           <tr>
//             <th>name</th>
//             <th>email</th>
//             <th>password</th>
//             <th>number</th>
//           </tr>
//         </thead>
//         <tbody id="tableData">
//           {data.map((data, index) => {
//             console.log();
//             return (
//               <tr>
//                 <td>{data.Name}</td>
//                 <td>{data.Email}</td>
//                 <td>{data.Password}</td>
//                 <td>{data.Number}</td>
//                 <td>
//                   <button
//                     variant="primary"
//                     mb-3
//                     className="btn btn-sm btn-primary"
//                     onClick={() => handleEdit(data, index)}
//                   >
//                     edit
//                   </button>
//                   <button
//                     varient="danger"
//                     className="btn btn-sm btn-danger "
//                     onClick={() => handleRemove(index)}
//                   >
//                     delete
//                   </button>
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </>
//   );
// }

// export default Forms;
