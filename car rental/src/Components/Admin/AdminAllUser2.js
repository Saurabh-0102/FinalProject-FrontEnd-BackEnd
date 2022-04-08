// import { useEffect, useState } from "react";
// import axios from "axios";
// import AdminNavbarCompo from "./AdminNavBar";

// export default function UserDetailsCompo() {
//   const [result, setResult] = useState([]);
//   console.log(result.firstName);
//   const user3 = sessionStorage.getItem("userName");

//   useEffect(async () => {
//     if (
//       sessionStorage.getItem("userRole") === "null" ||
//       sessionStorage.getItem("userRole") != "admin"
//     ) {
//       window.location.href = "/login";
//     }
//     let response = await axios.get(`http://localhost:8080/getalluser`);
//     setResult(response.data);
//     getAllUsers();
//   }, []);

//   const getAllUsers = async () => {
//     const response = await axios.get(`http://localhost:8080/getalluser`);
//     setResult(response.data);
//   };

//   const myfun = async (userEmail) => {
//     console.log(">>>>>" + userEmail);
//     const user = { email: userEmail };
//     const res = await axios.post("http://localhost:8080/findbyemail", user);
//     console.log(res.data.firstname);
//     const user1 = {
//       firstName: res.data.firstname,
//       lastName: res.data.lastname,
//       email: res.data.email,
//       password: res.data.password,
//       role: res.data.role,
//       branch: res.data.branch,
//       state: res.data.state,
//       status: "InActive",
//     };
//     console.log(user1);
//     if (res.data.status === "Active") {
//       const user1 = {
//         name: res.data.name,
//         email: res.data.email,
//         password: res.data.password,
//         mobileNumber: res.data.mobileNumber,
//         city: res.data.city,
//         govId: res.data.govId,
//         role: res.data.role,
//         status: "InActive",
//       };

//       const user2 = axios.post("http://localhost:8080/editUser", user1);
//     } else {
//       const user1 = {
//         name: res.data.name,
//         email: res.data.email,
//         password: res.data.password,
//         mobileNumber: res.data.mobileNumber,
//         city: res.data.city,
//         govId: res.data.govId,
//         role: res.data.role,
//         status: "Active",
//       };

//       const user2 = axios.post("http://localhost:8080/editUser", user1);
//     }

//     getAllUsers();
//   };
//   return (
//     <div>
//       <AdminNavbarCompo />
//       <h1 className="text-center text-danger">Welcome Admin{user3} </h1>
//       <h1 className="text-center text-info">List of User Account</h1>

//       <div className="container-fluid">
//         <table class="table table-hover table-dark text-center">
//           <thead>
//             <tr>
//               <th>CustomerId</th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>MobileNumber</th>
//               <th>City</th>
//               <th>Government Id</th>
//               <th>status</th>
//               <th>Active/Deactivate</th>
//             </tr>
//           </thead>
//           <tbody>
//             {result.map((list, index) => (
//               <tr>
//                 <td>{list.userId}</td>
//                 <td>{list.name}</td>
//                 <td>{list.email}</td>
//                 <td>{list.mobileNumber}</td>
//                 <td>{list.city}</td>
//                 <td>{list.govId}</td>
//                 <td>{list.status.toString()}</td>
//                 <td>
//                   <input
//                     type="button"
//                     onClick={() => {
//                       myfun(list.email);
//                     }}
//                     className="btn btn-success mb-4"
//                     value={list.status}
//                   />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
